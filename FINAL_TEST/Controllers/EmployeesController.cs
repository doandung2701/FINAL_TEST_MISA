using FINAL_TEST.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FINAL_TEST.Controllers
{
    public class EmployeesController : Controller
    {
        private EmployeeModelEntities db = new EmployeeModelEntities();
        // GET: Employees
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult AddEmployee()
        {
            return PartialView("AddEmployee");
        }
        public ActionResult AllEmployee()
        {
            return PartialView(db.Employees);
        }
    }
}