using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Models.VisitViewModels
{
    public class AssessmentViewModel
    {
      [Required]
      public string Notes{ get; set; }

      [Required]
      public long PatientID { get; set; }
    }
}
