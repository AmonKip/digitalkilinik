using ePatientCare.Data;
using ePatientCare.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ePatientCare.Models.VisitViewModels;
namespace ePatientCare.Controllers
{
  [Authorize(Roles ="Nurse", ActiveAuthenticationSchemes = "Bearer")]
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
       return context.Visits.Find(id);
    }

    [HttpGet]
    [Route("api/patientvisits/{id}")]
    public IEnumerable<Visit> VisitsByUser(long id)
    {
            return context.Visits.Where(v => v.PatientID == id);
            //return null;
    }
    [HttpGet]
    [Route("api/visits")]
    public IEnumerable<Visit> GetVisits()
    {
       return context.Visits;
    }

    [HttpGet]
    [Route("api/vitalsignsbyVisitId/{id}")]
    public VitalSigns GetVitalSigns(long id)
    {
       return context.VitalSigns.Where(vs => vs.VisitId == id).FirstOrDefault();
    }

    [HttpGet]
    [Route("api/assessmentbyVisitId/{id}")]
    public Assessment GetAssessments(long id)
    {
        return context.Assessments.Where(a => a.VisitId == id).FirstOrDefault();
    }

    [HttpGet]
    [Route("api/ordersbyVisitId/{id}")]
    public IEnumerable<Order> GetDoctorsOrders(long id)
    {
        return context.Orders.Where(o => o.VisitId == id);
    }
    // create a visit
    [HttpPost]
    [Route("api/addVisit")]
    public IActionResult AddVisit([FromBody] VisitViewModel visitView)
    {
      if(ModelState.IsValid)
      {
                //var appUserId = HttpContext.User.GetUserId();
                // var userdetailsId = context.UserDetails.Where(u => u.Username == visitView.Username).FirstOrDefault();

                Visit visit = new Visit();
                visit.Date = DateTime.UtcNow;
                visit.Complaint = visitView.Complaint;
                visit.Background = visitView.Background;
                visit.Current = 1;
                visit.PatientID = visitView.PatientID;
                context.Add(visit);
                context.SaveChanges();

                return Ok(visit);
      }
            return BadRequest();
    }
  }
} 
