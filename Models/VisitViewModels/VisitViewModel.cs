using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ePatientCare.Models.VisitViewModels
{
    public class VisitViewModel
    { 
      [Required]
      public string Complaint { get; set; }

      [Required]
      public string Background { get; set; }

      [Required]
      public long PatientID { get; set; }
    }
}
