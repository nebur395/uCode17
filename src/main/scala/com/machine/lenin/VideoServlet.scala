package com.machine.lenin

import org.scalatra._
import grizzled.slf4j.Logger
import org.json4s.{DefaultFormats, Formats}
import org.json4s.jackson.JsonMethods._
import org.json4s.JsonAST._
import org.json4s._
import org.scalatra.json._
import org.scalatra.servlet.{FileUploadSupport, MultipartConfig, SizeConstraintExceededException}

class VideoServlet
extends MlStack
with JacksonJsonSupport
with FileUploadSupport{

    protected implicit val jsonFormats: Formats = DefaultFormats

    def jsonHeaders = Map[String,String]("Content-Type" -> "application/json")
    def headers = Map[String,String]("Content-Type" -> "text/plain")
    def logger = Logger[VideoServlet]
    val INTERNAL_ERROR_MESSAGE = "Oops so awkward, something went wrong"
    val FILE_SIZE = 1024*1024*1024;

    configureMultipartHandling(MultipartConfig(maxFileSize = Some(FILE_SIZE)))

    post("/apply"){
        fileParams.get("file") match {
            case Some(file) =>
                Ok(file.get(), Map(
                 "Content-Type"        -> (file.contentType.getOrElse("application/octet-stream")),
                 "Content-Disposition" -> ("attachment; filename=\"" + file.name + "\"")
                ))

            case None =>
                BadRequest("Bad")
         }
    }
}
