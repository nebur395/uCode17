import com.machine.lenin._
import org.scalatra._
import grizzled.slf4j.Logger
import javax.servlet.ServletContext

class ScalatraBootstrap extends LifeCycle {
    def logger = Logger[ScalatraBootstrap]

    override def init(context: ServletContext) {
        context mount(new VideoServlet, "/*")
    }
}
