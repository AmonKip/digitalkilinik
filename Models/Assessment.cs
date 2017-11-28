using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Models
{
    public class Assessment
    {
      [Key]
      [ForeignKey("Order")]
      public int AssessmentId{ get; set; }
      public string Notes { get; set; }
      public long VisitId { get; set; }
      public long UserDetailsID { get; set; }
      public DateTime Date{ get; set; }
      //public List<Order> Orders { get; set; }

    }
}
