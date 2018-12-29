using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using cruDelicious.Models;
using Microsoft.EntityFrameworkCore;

namespace cruDelicious.Controllers
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
            List<dishes> ReturnedValues = dbContext.dishes.OrderByDescending(dish => dish.DishesId).ToList();
            ViewBag.allDishes = ReturnedValues;
            return View();
        }
        //================================================
        [HttpGet("create")]
        public IActionResult create()
        {
            return View();
        }
        //================================================

        [HttpPost]
        [Route("dishcreator")]
        public IActionResult addDish(dishes newDish)
        {
            if(ModelState.IsValid){
                dbContext.dishes.Add(newDish);
                dbContext.SaveChanges();
                return RedirectToAction("Index");
            }
            else{
                return View("create");
            }
        }
        //================================================

        [HttpGet("{id}")]
        public IActionResult viewDish(int id){
            dishes ReturnedValues = dbContext.dishes.FirstOrDefault(dish => dish.DishesId == id);
            ViewBag.specDish = ReturnedValues;
            return View("food");
        }
        //================================================

        [HttpGet("edit/{id}")]
        public IActionResult editDish(int id){
            dishes ReturnedValues = dbContext.dishes.FirstOrDefault(dish => dish.DishesId == id);
            ViewBag.editThis = ReturnedValues;
            return View("edit");
        }
        //================================================

        [HttpPost("editor/{id}")]
        public IActionResult editor(int id, dishes updateDish){
            dishes RetrievedUser = dbContext.dishes.FirstOrDefault(dish => dish.DishesId == id);
            if(ModelState.IsValid){
            RetrievedUser.Name = updateDish.Name;
            RetrievedUser.Chef = updateDish.Chef;
            RetrievedUser.Tastiness = updateDish.Tastiness;
            RetrievedUser.Calories = updateDish.Calories;
            RetrievedUser.Description = updateDish.Description;
            RetrievedUser.UpdatedAt = DateTime.Now;
            dbContext.SaveChanges();
            return RedirectToAction("Index");
            }
            else{
                ViewBag.editThis = RetrievedUser;
                return View("edit");
            }  
        }
        //================================================

        [HttpGet("delete/{id}")]
        public IActionResult deletor(int id){
            dishes ReturnedValues = dbContext.dishes.FirstOrDefault(dish => dish.DishesId == id);
            dbContext.dishes.Remove(ReturnedValues);
            dbContext.SaveChanges();
            
            return RedirectToAction("Index");
        }

    }
}
