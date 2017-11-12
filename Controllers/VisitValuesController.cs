using ePatientCare.Data;
using ePatientCare.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Controllers
{
  [Authorize(Roles ="Admin")]
  [ValidateAntiForgeryToken]
  public class VisitValuesController : Controller
  {
    private ApplicationDbContext context;

    public VisitValuesController(ApplicationDbContext ctx)
    {
      context = ctx;
    }

   // get any visit by id
    [HttpGet]
    [Route("api/visits/{id}")]
    public Visit Visit(long id)
    {
    
      Visit result = context.Visits.Include(v => v.Patient)
                                   .Include(v => v.UserDetails)
                                   .First(v => v.VisitId == id);
      if(result!= null)
      {
        if(result.Patient != null)
        {
          result.Patient.Visits = null;
        }
        if(result.UserDetails != null)
        {
          result.UserDetails.Visits = null;
        }
      }
      return result;
    }

    [HttpGet]
    [Route("api/patientvisits/{id}")]
    public IEnumerable<Visit> VisitsByUser(long id)
    {
      return context.Visits.Where(v => v.Patient.PatientID == id);
    }
    [HttpGet]
    [Route("api/visits")]
    public IEnumerable<Visit> GetVisits()
    {
      return context.Visits;
    }
  }
}
