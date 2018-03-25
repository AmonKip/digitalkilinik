using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Models.VisitViewModels
{
    public class VitalSignsViewModel
    {
      [Required]
      public string Temperature { get; set; }

      [Required]
      public string Pulse { get; set; }

      [Required]
      public string Respiration { get; set; }

      [Required]
      public string BloodPressure { get; set; }

      [Required]
      public string OxygenSaturation { get; set; }

      public DateTime Date { get; set; }
      public long UserDetailsID { get; set; }
      public long PatientID { get; set; }
      public long VisitId { get; set; }
    }
}
