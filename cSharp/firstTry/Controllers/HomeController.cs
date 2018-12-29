using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using firstTry.Models;

namespace firstTry.Controllers
{
    public class HomeController : Controller
    {
        private Context dbContext;
 
        public HomeController(Context context){
            dbContext = context;
        }

        [HttpGet("/tasks")]
        public JsonResult Index()
        {
            List<users> AllUsers = dbContext.users.ToList();
            Console.WriteLine("Here--------------------------------");
            return Json(AllUsers);
        }

    }
}
