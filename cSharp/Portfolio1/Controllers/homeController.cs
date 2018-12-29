using Microsoft.AspNetCore.Mvc;
namespace Portfolio1{
    public class homeController : Controller{
        // Requests
        //localhost:5000
        [HttpGet("")]
        public ViewResult index(){
            ViewBag.Ex = "What up homie";
            //Views/Home/index.cshtml
            //Views/.../index.cshtml
            return View();
        }


        //localhost:5000/hello
        [HttpGet("projects")]
        public RedirectToActionResult project(){
            return RedirectToAction("index");
        }

        [HttpGet("contact")]
        public string contacts(){
            return "This is my Contact";
        }
    }

}