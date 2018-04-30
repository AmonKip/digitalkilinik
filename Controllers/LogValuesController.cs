using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ePatientCare.Models.BindingTargets;
using ePatientCare.Data;
using ePatientCare.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ePatientCare.Controllers
{
    [Route("api/log")]
    public class LogValuesController : Controller
    {

        private ApplicationDbContext context;

        public LogValuesController(ApplicationDbContext ctx)
        {
          context = ctx;
        }
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] LogEntry logEntry)
        {
          try
          {
            context.LogEntry.Add(logEntry);
            context.SaveChanges();
          }
          catch(Exception e)
          {
            Console.Write("Log Add Exception: " + e.InnerException);
          }

        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
