using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Models.VisitViewModels
{
    public class OrderViewModel
    {
     [Required]
     public string Notes { get; set; }

     [Required]
     public string Type { get; set; }

     [Required]
     public long patientId { get; set; }
    }
}
