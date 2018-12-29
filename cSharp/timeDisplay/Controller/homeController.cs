using Microsoft.AspNetCore.Mvc;
namespace timeDisplay{
    public class homeController : Controller{
        // Requests
        [HttpGet("/")]
        public ViewResult index(){
            return View();
        }
    }

}