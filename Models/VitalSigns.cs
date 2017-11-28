using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Models
{
    public class VitalSigns
    {
      public long VitalSignsId{ get; set; }
      public string Temperature { get; set; }
      public string Pulse { get; set; }
      public string Respiration { get; set; }
      public string BloodPressure { get; set; }
      public string OxygenSaturation { get; set; }
      public long VisitId { get; set; }
      public long UserDetailsID { get; set; }
      public DateTime Date { get; set; }

    }
}
