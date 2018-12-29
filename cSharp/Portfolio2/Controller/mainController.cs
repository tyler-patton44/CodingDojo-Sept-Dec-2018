using Microsoft.AspNetCore.Mvc;
namespace Portfolio2{
    public class mainController : Controller{
        // Requests
        //localhost:5000
        [HttpGet("/")]
        public ViewResult index(){
            return View();
        }


        //localhost:5000/hello
        [HttpGet("projects")]
        public ViewResult projects(){
            return View();
        }

        [HttpGet("contact")]
        public ViewResult contact(){
            return View();
        }
    }

}