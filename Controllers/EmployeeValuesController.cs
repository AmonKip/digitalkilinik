using Microsoft.AspNetCore.Mvc;
using ePatientCare.Models;
using ePatientCare.Data;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Collections.Generic;
using ePatientCare.Models.BindingTargets;

namespace ePatientCare.Controllers
{
    [Route("api/employees")]
    public class EmployeeValuesController : Controller
    {
        private ApplicationDbContext context;

        public EmployeeValuesController(ApplicationDbContext ctx)
        {
            context = ctx;
        }
        
        [HttpGet("{id}")]
        public UserDetails GetEmployee(long id)
        {
          //return context.Employees.Find(id);
          return context.UserDetails.Find(id);
      
        }

        [HttpGet]
        public IEnumerable<UserDetails> GetEmployees()
        {
          return context.UserDetails;
        }

        [HttpPost]
        public IActionResult CreateEmployee([FromBody] EmployeeData eData)
        {
            if (ModelState.IsValid)
            {
                Employee e = eData.Employee;
                context.Add(e);
                context.SaveChanges();

                return Ok(e.EmployeeID);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
    [HttpPut("{id}")]
    public IActionResult Employee(long id, [FromBody] EmployeeData edata)
    {
      if (ModelState.IsValid)
      {
        Employee e = edata.Employee;
        e.EmployeeID = id;

        context.Update(e);
        context.SaveChanges();
        return Ok();
      }
      else
      {
        return BadRequest(ModelState);
      }
    }

    [HttpDelete("{id}")]
    public void DeleteEmployee(long id)
    {
      context.UserDetails.Remove(new UserDetails { UserDetailsID = id });
      context.SaveChanges();
    }

  }
}
