package com.machine.lenin

import org.scalatra._
import grizzled.slf4j.Logger
import org.json4s.{DefaultFormats, Formats}
import org.json4s.jackson.JsonMethods._
import org.json4s.JsonAST._
import org.json4s._
import org.scalatra.json._
import org.scalatra.servlet.{FileUploadSupport, FileItem, MultipartConfig, SizeConstraintExceededException}
import sys.process._
import java.io.File



class VideoServlet
extends MlStack
with JacksonJsonSupport{

    protected implicit val jsonFormats: Formats = DefaultFormats

    def logger = Logger[VideoServlet]
    val INTERNAL_ERROR_MESSAGE = "Oops so awkward, something went wrong"
    val VIDEO_PATH="videos/"
    val FILE_SIZE = 1024*1024*1024;

    //val FILTERS = Array("gotham", "lomo", "nashville")

    /** GET METHOD RETURNS A VIDEO */
    get("/filter/:name"){
        params("name") match {
            case videoName:String => {
                contentType = "video/x-msvideo"
                val full_name = videoName+".avi"
                val file = new File(VIDEO_PATH+full_name)
                Ok(file,  Map(
                    "Content-Disposition" -> ("attachment; filename=\"" + full_name + "\"")))
            }
            case null => {
                NotFound("No se ha encontrado el fichero")
            }
        }
    }
    post("/processVideo"){
        Thread.sleep(5000)
        Ok("Su video ha sido procesado")
    }
}
