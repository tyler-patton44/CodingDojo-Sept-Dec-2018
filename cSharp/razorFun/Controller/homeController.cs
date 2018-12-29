using Microsoft.AspNetCore.Mvc;
namespace razorFun{
    public class homeController : Controller{
        // Requests
        [HttpGet("/")]
        public ViewResult index(){
            return View();
        }
    }

}