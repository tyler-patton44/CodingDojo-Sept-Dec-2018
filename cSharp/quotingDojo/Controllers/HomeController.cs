using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using quotingDojo.Models;
using DbConnection;

namespace quotingDojo.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [Route("quotes")]
        public IActionResult create(Quotes newQuote){
            if(ModelState.IsValid){
                string query = $"INSERT INTO Quotes (name, content) VALUES ('{newQuote.name}', '{newQuote.content}')";
                DbConnector.Execute(query);
                return RedirectToAction("wall");
            }
            else{
                return View("index");
            }
        }

        [HttpGet("quotes")]
        public IActionResult wall(){
            List<Dictionary<string, object>> allQuotes = DbConnector.Query("SELECT * FROM Quotes ORDER by created_at DESC;");
            ViewBag.allInfo = allQuotes;
            return View("wall");
        }
    }
}
