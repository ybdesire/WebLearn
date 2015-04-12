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

        //The 'event' function for button "Sign In" at Index.cshtml
        public String SignIn(string userName, string passwd)
        {

            if(Session["isAuth"]==null)
            {
                Session["isAuth"] = "YES";//creat new session
                Session["user_name"]=userName;
                Session["user_password"]=passwd;
                return "NO";
            }
            else
            {
                return Session.SessionID.ToString();
            }
        }

    }
}
