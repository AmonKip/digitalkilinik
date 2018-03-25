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
using System.IdentityModel.Tokens.Jwt;

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
      {         // add visit record
                Visit visit = new Visit();
                visit.Date = DateTime.Now;
                visit.Complaint = visitView.Complaint;
                visit.Background = visitView.Background;
                visit.Current = 1;
                visit.PatientID = visitView.PatientID;
                

                // update patient -- set to current
                var patient = context.Patients.Find(visitView.PatientID);

                if(patient != null)
                  {
                     patient.Current = 1;
                  }
                context.Add(visit);
                context.Update(patient);
                context.SaveChanges();
                 
                return Ok(visit);
      }
            return BadRequest();
    }
    [HttpPost]
    [Route("api/addVitalSigns")]
    public IActionResult AddVitalSigns([FromBody] VitalSignsViewModel vitalSigns)
    {
      if(ModelState.IsValid)
      {
        var claim = HttpContext?.User.Claims.ToArray();
        var username = claim[0].Value.ToString();

        long userDetailsID = context.UserDetails.Where(u => u.Username == username).SingleOrDefault().UserDetailsID;

        var patientId = vitalSigns.PatientID;

        var visitId = context.Visits.Where(v => v.PatientID == patientId)
                                    .Where(v => v.Current == 1).FirstOrDefault().VisitId;

        var vitals = new VitalSigns
        {
          Temperature = vitalSigns.Temperature,
          Pulse = vitalSigns.Pulse,
          Respiration = vitalSigns.Respiration,
          BloodPressure = vitalSigns.BloodPressure,
          OxygenSaturation = vitalSigns.OxygenSaturation,
          Date = DateTime.Now,
          UserDetailsID = userDetailsID,
          VisitId = visitId

        };
        context.VitalSigns.Add(vitals);
        context.SaveChanges();

        return Ok(vitals);
      }
      return BadRequest();
      
    }

    [HttpPost]
    [Route("api/addAssessment")]
    public IActionResult AddAssessment([FromBody] AssessmentViewModel viewAssessment)
    {
      if (ModelState.IsValid)
      {
        var claim = HttpContext?.User.Claims.ToArray();
        var username = claim[0].Value.ToString();

        long userDetailsID = context.UserDetails.Where(u => u.Username == username).SingleOrDefault().UserDetailsID;

        var patientId = viewAssessment.PatientID;

        var visitId = context.Visits.Where(v => v.PatientID == patientId)
                                    .Where(v => v.Current == 1).FirstOrDefault().VisitId;

        var assessment = new Assessment
        {
          Date = DateTime.Now,
          Notes = viewAssessment.Notes,
          UserDetailsID = userDetailsID,
          VisitId = visitId

        };
        context.Assessments.Add(assessment);
        context.SaveChanges();

        return Ok(assessment);
      }
      return BadRequest();

    }

    [HttpGet]
    [Route("api/nurse/{id}")]
    public UserDetails GetNurse(long id)
    {
      
      var userId = context.VitalSigns.Where(v => v.VisitId == id).FirstOrDefault().UserDetailsID;
      var user = context.UserDetails.Find(userId);
      if (user != null)
      {
        return user;
      }
      return null;
    }

    [HttpGet]
    [Route("api/doctor/{id}")]
    public UserDetails GetDoctor(long id)
    {

      var userId = context.Assessments.Where(a => a.VisitId == id).FirstOrDefault().UserDetailsID;
      var user = context.UserDetails.Find(userId);
      if (user != null)
      {
        return user;
      }
      return null;
    }

    [HttpPost]
    [Route("api/addDoctorOrders")]
    public IActionResult AddDoctorOrders([FromBody] List<OrderViewModel> orderViewModel)
    {
      if(ModelState.IsValid)
       {
        var orders = new List<Order>();
        var visit = context.Visits.Where(v => v.PatientID == orderViewModel[0].patientId)
                                    .Where(v => v.Current == 1)
                                    .FirstOrDefault();
        if (visit == null)
        {
          return BadRequest();
        }

        foreach (var orderView in orderViewModel)
         {
           var model = new Order();
           model.Date = DateTime.Now;
           model.VisitId = visit.VisitId;
           model.OrderType = orderView.Type;
           model.Notes = orderView.Notes;

           orders.Add(model);
          }

        context.Orders.AddRange(orders);
        context.SaveChanges();

        return Ok(orders);
        
       }
      return BadRequest("Invalid model state");
    }

  }
} 
