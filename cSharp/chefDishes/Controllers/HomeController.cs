using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using chefDishes.Models;
using Microsoft.EntityFrameworkCore;

namespace chefDishes.Controllers
{
    public class HomeController : Controller
    {
        private Context dbContext;
 
        public HomeController(Context context)
    {
        dbContext = context;
    }

        //=====================================================
        [HttpGet("")]
        public IActionResult Index()
        {
            List<chefs> AllChefs = dbContext.chefs.ToList();
            foreach(var x in AllChefs){
                int total = dbContext.dishes.Where(dish => dish.chefId == x.chefId).Count();
                x.total = total;
            }
            ViewBag.AllChefs = AllChefs;
            return View();
        }
        //=====================================================
        [HttpGet("dishes")]
        public IActionResult dishes()
        {
            var chefDish = dbContext.dishes.Include(x => x.chef).ToList();
            ViewBag.AllDishes = chefDish;
            return View();
        }
        //=====================================================
        [HttpGet("addChef")]
        public IActionResult addChef()
        {
            return View();
        }
        //=====================================================
        [HttpPost("createChef")]
        public IActionResult createChef(chefs newChef){
            if(ModelState.IsValid){
                dbContext.chefs.Add(newChef);
                dbContext.SaveChanges();
                return RedirectToAction("Index");
            }
            else{
                return View("addChef");
            }
        }
        //=====================================================
        [HttpGet("addDish")]
        public IActionResult addDish()
        {
            List<chefs> AllChefs = dbContext.chefs.ToList();
            ViewBag.AllChefs = AllChefs;
            return View();
        }
        //=====================================================
        [HttpPost("createDish")]
        public IActionResult createDish(dishes newdish){
            if(ModelState.IsValid){
                chefs retrievedChef = dbContext.chefs.FirstOrDefault(x => x.chefId == newdish.chefId);
                newdish.chef = retrievedChef;
                dbContext.dishes.Add(newdish);
                dbContext.SaveChanges();
                return RedirectToAction("Index");
            }
            else{
                List<chefs> AllChefs = dbContext.chefs.ToList();
                ViewBag.AllChefs = AllChefs;
                return View("addDish");
            }
        }

    }
}
