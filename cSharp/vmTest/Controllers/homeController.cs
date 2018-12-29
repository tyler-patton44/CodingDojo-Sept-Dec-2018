using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using vmTest.Models;
namespace vmTest{
    public class homeController : Controller{

        [HttpGet("")]
        public IActionResult message(){
            string cont =  "Welcome to our home page we love you maybe, maybe not. Please come back though.";
            return View("message", cont);
        }

        [HttpGet("user")]
        public IActionResult index(){
            User user = new User(){
                FirstName = "Tyler", 
                LastName = "Patton"
            };
            return View(user);
        }

        [HttpGet("numbers")]
        public IActionResult numbers(){
            int[] digits = new int[]{1,2,3,4,5,6,7,8,9,10};
            return View(digits);
        }

        [HttpGet("users")]
        public IActionResult users(){
            var people = new List<User>{
                new User(){
                FirstName = "Tyler", 
                LastName = "Patton"
                },
                new User(){
                FirstName = "Joe", 
                LastName = "Rogan"
                },
                new User(){
                FirstName = "Daniel", 
                LastName = "Cormier"
                },
                new User(){
                FirstName = "Derrick", 
                LastName = "Lewis"
                }
            };
            return View(people);
        }
    }
}