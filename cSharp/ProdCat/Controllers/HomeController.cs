using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ProdCat.Models;

namespace ProdCat.Controllers
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
            List<products> postedProducts = dbContext.products.ToList();
            ViewBag.Products = postedProducts;
            return View();
        }

        [HttpPost("createProduct")]
        public IActionResult createProduct(products newProduct){
            if(ModelState.IsValid){
                dbContext.products.Add(newProduct);
                dbContext.SaveChanges();
                return RedirectToAction("Index");
            }
            else{
                List<products> postedProducts = dbContext.products.ToList();
                ViewBag.Products = postedProducts;
                return View("Index");
            }
        }

        [HttpGet("showProd/{id}")]
        public IActionResult showProd(int id)
        {
            products postedProduct = dbContext.products.FirstOrDefault(p => p.productId == id);

            var PandC = dbContext.products.Include(a => a.allAssociations).ThenInclude(prod => prod.category).Where(x => x.productId == postedProduct.productId).ToList();
            List<categories> getRid = new List<categories>();
            foreach(var x in PandC){
                foreach(var y in x.allAssociations){
                    categories nope = dbContext.categories.Where(c => c.categoryId == y.category.categoryId).FirstOrDefault();
                    getRid.Add(nope);
                }
            }
            List<categories> postedCats = dbContext.categories.Except(getRid).ToList();
            ViewBag.Product = postedProduct;
            ViewBag.Categories = postedCats;
            ViewBag.prodCat = PandC;
            return View();
        }

        [HttpPost("createProdAssociation")]
        public IActionResult createProdAssociation(associations newAss){
            if(ModelState.IsValid){
                dbContext.associations.Add(newAss);
                dbContext.SaveChanges();
                return Redirect("showProd/" + newAss.productId);
            }
            else{
                products postedProduct = dbContext.products.FirstOrDefault(p => p.productId == newAss.productId);

                var PandC = dbContext.products.Include(a => a.allAssociations).ThenInclude(prod => prod.category).Where(x => x.productId == postedProduct.productId).ToList();
                List<categories> getRid = new List<categories>();
                foreach(var x in PandC){
                    foreach(var y in x.allAssociations){
                        categories nope = dbContext.categories.Where(c => c.categoryId == y.category.categoryId).FirstOrDefault();
                        getRid.Add(nope);
                    }
                }
                List<categories> postedCats = dbContext.categories.Except(getRid).ToList();
                ViewBag.Product = postedProduct;
                ViewBag.Categories = postedCats;
                ViewBag.prodCat = PandC;
                return View("showProd");
            }
        }

        [HttpGet("categories")]
        public IActionResult showCategories()
        {
            List<categories> postedCats = dbContext.categories.ToList();
            ViewBag.Categories = postedCats;
            return View("category");
        }

        [HttpPost("createCategory")]
        public IActionResult createCategory(categories newCat){
            if(ModelState.IsValid){
                dbContext.categories.Add(newCat);
                dbContext.SaveChanges();
                return RedirectToAction("showCategories");
            }
            else{
                List<categories> postedCats = dbContext.categories.ToList();
                ViewBag.Categories = postedCats;
                return View("category");
            }
        }

        [HttpGet("showCat/{id}")]
        public IActionResult showCat(int id)
        {
            categories postedCategory = dbContext.categories.FirstOrDefault(p => p.categoryId == id);

            var PandC = dbContext.categories.Include(a => a.allAssociations).ThenInclude(prod => prod.product).Where(x => x.categoryId == postedCategory.categoryId).ToList();
            List<products> getRid = new List<products>();
                foreach(var x in PandC){
                    foreach(var y in x.allAssociations){
                        products nope = dbContext.products.Where(c => c.productId == y.product.productId).FirstOrDefault();
                        getRid.Add(nope);
                    }
                }
            List<products> postedProd = dbContext.products.Except(getRid).ToList();
            ViewBag.Products = postedProd;
            ViewBag.Category = postedCategory;
            ViewBag.prodCat = PandC;
            return View();
        }
        
        [HttpPost("createCatAssociation")]
        public IActionResult createCatAssociation(associations newAss){
            if(ModelState.IsValid){
                dbContext.associations.Add(newAss);
                dbContext.SaveChanges();
                return Redirect("showCat/" + newAss.categoryId);
            }
            else{
                categories postedCategory = dbContext.categories.FirstOrDefault(p => p.categoryId == newAss.categoryId);

                var PandC = dbContext.categories.Include(a => a.allAssociations).ThenInclude(prod => prod.product).Where(x => x.categoryId == postedCategory.categoryId).ToList();
                List<products> getRid = new List<products>();
                foreach(var x in PandC){
                    foreach(var y in x.allAssociations){
                        products nope = dbContext.products.Where(c => c.productId == y.product.productId).FirstOrDefault();
                        getRid.Add(nope);
                    }
                }
                List<products> postedProd = dbContext.products.Except(getRid).ToList();
                ViewBag.Products = postedProd;
                ViewBag.Category = postedCategory;
                ViewBag.prodCat = PandC;
                return View("showProd");
            }
        }
    }
}
