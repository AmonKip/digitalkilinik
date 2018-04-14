using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ePatientCare.Data;

namespace ePatientCare.Controllers
{
    public class HomeController : Controller
    {
        private ApplicationDbContext context;
        public HomeController(ApplicationDbContext ctx)
        {
            context = ctx;
        }
        public IActionResult Index()
        {
      // ViewBag.Message = "ePatient Care App";
         //ViewBag.Message = System.Diagnostics.Process.GetCurrentProcess().Id;
         Console.WriteLine(System.Diagnostics.Process.GetCurrentProcess().Id);
        return View(context.Patients.FirstOrDefault());
            
        }

        //public IActionResult About()
        //{
        //    ViewData["Message"] = "Your application description page.";

        //    return View();
        //}

        //public IActionResult Contact()
        //{
        //    ViewData["Message"] = "Your contact page.";

        //    return View();
        //}

        //public IActionResult Error()
        //{
        //    return View();
        //}
    }
}
