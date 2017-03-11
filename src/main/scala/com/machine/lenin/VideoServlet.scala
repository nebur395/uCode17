package com.machine.lenin

import org.scalatra._
import grizzled.slf4j.Logger
import org.json4s.{DefaultFormats, Formats}
import org.json4s.jackson.JsonMethods._
import org.json4s.JsonAST._
import org.json4s._
import org.scalatra.json._
import sys.process._
import java.io.File



class VideoServlet extends MlStack with JacksonJsonSupport{

    protected implicit val jsonFormats: Formats = DefaultFormats
    val headers = Map[String,String]("Content-Type" -> "text/plain")
    def logger = Logger[VideoServlet]
    val INTERNAL_ERROR_MESSAGE = "Oops so awkward, something went wrong"
    val IMAGE_PATH="images/"
    val FILE_SIZE = 1024*1024*1024;

    //val FILTERS = Array("gotham", "lomo", "nashville")

    post("/processVideo"){
        Thread.sleep(5000)
        Ok("Su video ha sido procesado",headers)
    }
}
