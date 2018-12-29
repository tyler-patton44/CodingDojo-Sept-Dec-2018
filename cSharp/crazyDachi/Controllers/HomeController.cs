using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using crazyDachi.Models;

namespace crazyDachi.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public IActionResult Index()
        {
            if(HttpContext.Session.GetString("getDachi") != null)
            {
                string oldDachi = HttpContext.Session.GetString("getDachi");
                dachi dachi = JsonConvert.DeserializeObject<dachi>(oldDachi);
                ViewBag.currentDachi = dachi;
            }
            else{
                dachi dachi = new dachi();
                ViewBag.currentDachi = dachi;
                string newDachi = JsonConvert.SerializeObject(dachi);
                HttpContext.Session.SetString("getDachi", newDachi);
            }   

            return View();
        }

        [HttpPost]
        [Route("update")]
        public IActionResult update(string action){
            string oldDachi = HttpContext.Session.GetString("getDachi");
            dachi dachi = JsonConvert.DeserializeObject<dachi>(oldDachi); 
            if(action == "feed"){
                dachi.feed();
            }
            if(action == "play"){
                dachi.play();
            }
            if(action == "work"){
                dachi.work();
            }
            if(action == "sleep"){
                dachi.sleep();
            }
            if(action == "restart"){
                HttpContext.Session.Clear();
                return RedirectToAction("Index");
            }


            if(dachi.fullness < 1 || dachi.happiness < 1){
                dachi.status = "Game over!";
            }
            if(dachi.energy > 99 && dachi.fullness > 99 && dachi.happiness > 99){
                dachi.status = "You win!";
            }
            
            string newDachi = JsonConvert.SerializeObject(dachi);
            HttpContext.Session.SetString("getDachi", newDachi);
            return RedirectToAction("Index");
        }

    }
}
