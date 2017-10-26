using Microsoft.AspNetCore.Mvc;
using ePatientCare.Models;
using ePatientCare.Data;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Collections.Generic;
using ePatientCare.Models.BindingTargets;
using Microsoft.AspNetCore.Authorization;

namespace ePatientCare.Controllers
{
  [Route("api/patients")]
  [Authorize(Roles = "Admin")]
  public class PatientValuesController : Controller
  {
    private ApplicationDbContext context;

    public PatientValuesController(ApplicationDbContext ctx)
    {
      context = ctx;
    }
    [HttpGet("{id}")]
    public Patient GetPatient(long id)
    {
      //System.Threading.Thread.Sleep(5000);
      return context.Patients.Find(id);
    }
    [HttpGet]
    public IEnumerable<Patient> GetPatients(string category, string search)
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
        //var x = context.Patients.ToList();
        return context.Patients;
      }
    }

    [HttpPost]
    public IActionResult CreatePatient([FromBody] PatientData pdata)
    {
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
