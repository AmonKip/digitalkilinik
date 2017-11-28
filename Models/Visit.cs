using ePatientCare.Models.Security;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Models
{
    public class Visit
    {
    [Key]
    [ForeignKey("VitalSigns, Assessment")]
    public long VisitId { get; set; }
    public DateTime Date { get; set; }
    public string Complaint { get; set; }
    public string Background{ get; set; }
    public int Current { get; set; }
   //foreign keys
    public long PatientID { get; set; }

        // vital signs
        // public long VitalSignsId{ get; set; }
        //public string Temperature{ get; set; }
        // public string Pulse{ get; set; }
        //public string Respiration { get; set; }
        //public string BloodPressure{ get; set; }
        //public string OxygenSaturation{ get; set; }
        // public string Medications { get; set; }
        // public string Diagnosis { get; set; }


        // public long UserDetailsID{ get; set; }
        //public List<Order> Orders { get; set; }

        //Navigation properties
        // public Patient Patient { get; set; }
        //public virtual UserDetails UserDetails{ get; set; }
        //public virtual Order Orders { get; set; }

    }
}
