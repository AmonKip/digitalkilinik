using ePatientCare.Models.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Models
{
    public class Visit
    {
    public long VisitId { get; set; }
    public DateTime Date { get; set; }
    public string Complain { get; set; }
    public string Medications { get; set; }
    public string Diagnosis { get; set; }
    public Patient Patient { get; set; }

    public virtual UserDetails UserDetails{ get; set; }
  }
}
