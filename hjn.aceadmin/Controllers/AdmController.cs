using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace hjn.aceadmin.Controllers
{
    public class AdmController : Controller
    {
        // GET: Adm
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult IndexNoIframe()
        {
            return View();
        }

        public ActionResult IndexNoIframeWithLayout()
        {
            return View();
        }

        public ActionResult AdmEmpIndex()
        {
            return View();
        }
    }
}