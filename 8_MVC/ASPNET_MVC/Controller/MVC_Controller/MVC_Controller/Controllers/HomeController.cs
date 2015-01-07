using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_Controller.Controllers
{
    public class HomeController : Controller
    {
        // Home is the controller name
        // GET: /Home/

        public string Index()
        {
            return "this is the default access by 'url/' or 'url/Home' or 'url/Home/Index'";
        }

        public string Action1()
        {
            return "Please access this function by url/Home/Action1";
        }

        public string Action2(string name)
        {
            string intro = "Pleas access this function by url/Home/Action2?name=xxx;            ";
            string nameInfo = "This is " + name;
            return intro + nameInfo;
        }

        //Pleas access this function by url/Home/Action3/123
        public string Action3(string ID)//if the function parameter is id/Id/ID, the id at RouteConfig.cs will come here
        {
            return "id is " + ID;
        }
    }
}
