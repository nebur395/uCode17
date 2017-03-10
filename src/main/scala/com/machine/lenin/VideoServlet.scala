package com.machine.lenin

import org.scalatra._
import grizzled.slf4j.Logger
import org.json4s.{DefaultFormats, Formats}
import org.json4s.jackson.JsonMethods._
import org.json4s.JsonAST._
import org.json4s._
import org.scalatra.json._

class VideoServlet
extends MlStack
with JacksonJsonSupport {

    protected implicit val jsonFormats: Formats = DefaultFormats

    def jsonHeaders = Map[String,String]("Content-Type" -> "application/json")
    def headers = Map[String,String]("Content-Type" -> "text/plain")
    def logger = Logger[VideoServlet]
    val INTERNAL_ERROR_MESSAGE = "Oops so awkward, something went wrong"

    get("/"){
        <html>
          <body>
            <h1>Hello, world!</h1>
            Say <a href="hello-scalate">hello to Scalate</a>.
          </body>
        </html>
    }
    post("/apply"){}
}
