using Microsoft.AspNetCore.Mvc;
namespace HelloASP{
    public class HomeController : Controller{
        // Requests
        //localhost:5000
        [HttpGet("")]
        public string Index(){
            return "Hello from controller";
        }


        //localhost:5000/hello
        [HttpGet("hello")]
        public string Hello(){
            return "Hello again";
        }

        [HttpGet("users/{username}/{location}")]
        public JsonResult HelloUser(string username, string location){
            var response = new{user=username, place=location};
            return Json(response);
        }
    }

}