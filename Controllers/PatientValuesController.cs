using Microsoft.AspNetCore.Mvc;
using ePatientCare.Models;
using ePatientCare.Data;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Collections.Generic;
using ePatientCare.Models.BindingTargets;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;
using System;

namespace ePatientCare.Controllers
{

  [Authorize(Roles = "Nurse", ActiveAuthenticationSchemes ="Bearer")]
  public class PatientValuesController : Controller
  {
    private ApplicationDbContext context;
    private readonly ILogger logger;

    public PatientValuesController(ApplicationDbContext ctx, ILoggerFactory logger)
    {
      context = ctx;
      this.logger = logger.CreateLogger<PatientValuesController>();
    }
    [HttpGet]
    [Route("api/patients/{id}")]
    public Patient GetPatient(long id)
    {
      //System.Threading.Thread.Sleep(5000);
      try
      {
        return context.Patients.Find(id);
      }
      catch(Exception e){
        var error = e.InnerException.ToString() ?? e.Message;
        logger.LogInformation(1, error);
        return null;
      }
    }
    [HttpGet]
    [Route("api/patients")]
    public IEnumerable<Patient> GetPatients(string category, string search)
    {
      //System.Threading.Thread.Sleep(5000);
      try
      {
        if (!string.IsNullOrWhiteSpace(category))
        {
          string catLower = category.ToLower();
          return context.Patients.Where(p => p.Sublocation.ToLower().Contains(catLower));
        }
        if (!string.IsNullOrWhiteSpace(search))
        {
          string searchLower = search.ToLower();
          return context.Patients.Where(p => p.LastName.ToLower().Contains(searchLower));
        }
        else
        {
          
          return context.Patients;
        }
      }
      catch(Exception e){
        var error = e.InnerException.ToString() ?? e.Message;
        logger.LogInformation(1, error);
        return null;
      }
    }

    [HttpPost]
    public IActionResult CreatePatient([FromBody] PatientData pdata)
    {
      //System.Threading.Thread.Sleep(5000);
      if (ModelState.IsValid)
      {
        Patient p = pdata.Patient;
        context.Add(p);
        context.SaveChanges();
        return Ok(p.PatientID);
      }
      else
      {
        return BadRequest(ModelState);
      }
    }
    [HttpPut("{id}")]
    public IActionResult ReplacePatient(long id, [FromBody] PatientData pdata)
    {
      //System.Threading.Thread.Sleep(5000);
      if (ModelState.IsValid)
      {
        Patient p = pdata.Patient;
        p.PatientID = id;

        context.Update(p);
        context.SaveChanges();
        return Ok();
      }
      else
      {
        return BadRequest(ModelState);
      }
    }

    [HttpDelete("{id}")]
    public void DeleteProduct(long id)
      {
        context.Patients.Remove(new Patient { PatientID = id });
        context.SaveChanges();
      }
  }
}
