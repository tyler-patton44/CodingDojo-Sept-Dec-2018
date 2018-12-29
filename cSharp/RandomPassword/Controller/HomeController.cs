using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
namespace RandomPassword{
    public class homeController : Controller{
        // Requests
        //localhost:5000
        [HttpGet("")]
        public IActionResult index(){
            if(HttpContext.Session.GetInt32("attempt") == null){
                HttpContext.Session.SetInt32("attempt", 1);
            }
            ViewBag.SessionCount = HttpContext.Session.GetInt32("attempt");
            return View();
        }

        [HttpGet("randomizer")]
        public IActionResult randomizer(){
            int count = HttpContext.Session.GetInt32("attempt").GetValueOrDefault();
            HttpContext.Session.SetInt32("attempt", count + 1);
            ViewBag.SessionCount = HttpContext.Session.GetInt32("attempt");

            Random rand = new Random();
            var alphaNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            char[] newChars = new char[14];

            for(int i=0; i<newChars.Length; i++){
                newChars[i] = alphaNum[rand.Next(0,36)]; 
            }
            Console.WriteLine(newChars);
            string newString = new String(newChars);
            ViewBag.RandomPasscode = newString;

            return View("index");
        }

        [HttpGet("reset")]
        public IActionResult reset(){
            HttpContext.Session.Clear();
            return RedirectToAction("index");
        }
    }
}