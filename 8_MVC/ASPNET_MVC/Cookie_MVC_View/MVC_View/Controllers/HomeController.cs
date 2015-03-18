using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_View.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        public ActionResult Index() //Access this by "url" or "url/Home/"
        {
            return View();
        }

        public ActionResult Hello() //Access this by "url/Home/Hello"
        {
            ViewBag.Message = "Hello view";//pass value from controller to view
            return View();
        }

    }
}
