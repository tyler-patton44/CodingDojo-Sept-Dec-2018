using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using loginRegistration.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace loginRegistration.Controllers
{
    public class HomeController : Controller
    {
        private Context dbContext;
 
    // here we can "inject" our context service into the constructor
        public HomeController(Context context)
    {
        dbContext = context;
    }

        [HttpGet("")]
        public IActionResult Index()
        {
            if(HttpContext.Session.GetInt32("UserId") != null)
            {
                return RedirectToAction("success");
            }
            else{
                return View();
            }
        }
        //=======================================================

        [HttpPost("registration")]
        public IActionResult create(Users newUser){
            if(ModelState.IsValid){
                if(dbContext.Users.Any(u => u.email == newUser.email)){
                    ModelState.AddModelError("email", "Email already in use!");
                    return View("Index");
                }
                PasswordHasher<Users> Hasher = new PasswordHasher<Users>();
                newUser.password = Hasher.HashPassword(newUser, newUser.password);

                HttpContext.Session.SetInt32("UserId", newUser.userId);

                dbContext.Users.Add(newUser);
                dbContext.SaveChanges();
                return RedirectToAction("success");
            }
            else{
                return View("Index");
            }
        }
        //=======================================================
        [HttpGet("login")]
        public IActionResult login(){
            return View();
        }
        //=======================================================
        [HttpPost("loginUser")]
        public IActionResult loginUser(Login exUser){
            if(ModelState.IsValid){
                var userInDb = dbContext.Users.FirstOrDefault(u => u.email == exUser.email);
                if(userInDb == null){
                ModelState.AddModelError("email", "Invalid Email");
                return View("login");
                }
                var hasher = new PasswordHasher<Login>();
                var result = hasher.VerifyHashedPassword(exUser, userInDb.password, exUser.password);

                if(result == 0){
                ModelState.AddModelError("password", "Invalid Password");
                return View("login");
                }
                HttpContext.Session.SetInt32("UserId", userInDb.userId);
                return RedirectToAction("success");
            }
            else{
                return View("login");
            }
        }
        //=======================================================
        [HttpGet("success")]
        public IActionResult success(){
            if(HttpContext.Session.GetInt32("UserId") == null)
            {
                return RedirectToAction("Index");
            }
            return View();
        }

        [HttpGet("logout")]
        public IActionResult logout(){
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }
    }
}
