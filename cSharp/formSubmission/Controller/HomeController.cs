using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using formSubmission.Models;
namespace formSubmission{
    public class HomeController : Controller{
        // Requests
        //localhost:5000
        [HttpGet("")]
        public ViewResult index(){
            return View();
        }

        [HttpPost]
        [Route("process")]
        public IActionResult process(User user){
            if(ModelState.IsValid){
                return RedirectToAction("submit");
            }
            else{
                return View("index");
            }
    }

    [HttpGet("submit")]
    public IActionResult submit(){
        return View();
    }
}
}