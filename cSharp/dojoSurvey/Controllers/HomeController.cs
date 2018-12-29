using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using dojoSurvey.Models;
namespace dojoSurvey{
    public class homeController : Controller{
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
            return RedirectToAction("submit", user);
            }
            else{
                return View("index", user);
            }
        }

        [HttpGet("submit")]
        public IActionResult submit(User user){

            return View(user);
        }
    }
}