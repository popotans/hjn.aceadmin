using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace hjn.aceadmin.Controllers
{
    public class AdmMenuController : Controller
    {
        // GET: AdmMenu
        public ActionResult GetMenus()
        {
            return View();
        }
    }
}