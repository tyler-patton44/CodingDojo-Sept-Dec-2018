using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using eCommerce.Models;

namespace eCommerce.Controllers
{
    public class HomeController : Controller
    {
        private Context dbContext;
 
        public HomeController(Context context)
        {
            dbContext = context;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("products")]
        public IActionResult products()
        {
            IndexView showProd = new IndexView();
            showProd.products = dbContext.products.ToList();
            return View(showProd);
        }
        [HttpPost("createProduct")]
        public IActionResult createProduct(IndexView newProd){
            if(ModelState.IsValid){
                if(newProd.product.image.Contains("http://") || newProd.product.image.Contains("https://")){
                dbContext.products.Add(newProd.product);
                dbContext.SaveChanges();
                return RedirectToAction("products");
                }
                else{
                    ModelState.AddModelError("product.image", "invalid url");
                }
            }
            IndexView showProd = new IndexView();
            showProd.products = dbContext.products.ToList();
            return View("products",showProd);
        }

        [HttpGet("orders")]
        public IActionResult orders()
        {
            IndexView showAll = new IndexView();
            showAll.customers = dbContext.customers.ToList();
            showAll.products = dbContext.products.Include(o => o.orders).ThenInclude(u => u.customer).ToList();
            return View(showAll);
        }

        [HttpGet("customers")]
        public IActionResult customers()
        {
            IndexView showAll = new IndexView();
            showAll.customers = dbContext.customers.ToList();
            return View(showAll);
        }
    }
}
