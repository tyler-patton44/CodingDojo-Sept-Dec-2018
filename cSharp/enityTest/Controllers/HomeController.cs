using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using enityTest.Models;
using Microsoft.EntityFrameworkCore;

namespace enityTest.Controllers
{
    public class HomeController : Controller
    {
        private Context dbContext;
        public  HomeController(Context myContext){
            dbContext = myContext;
        }


        [HttpGet("")]
        public IActionResult Index()
        {
            List<Person> allUsers = dbContext.Users.ToList();
            return View();
        }
    }
}
