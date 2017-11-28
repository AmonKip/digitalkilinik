using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Models
{
    public abstract class Diagnosis
    {

       public long ID { get; set; }
       public int Fulfilled{ get; set; }
       public DateTime FulfillmentDate { get; set; }
       public long PatientID { get; set; }
       public long UserDetailsID { get; set; }
       public long OrderId{ get; set; }

    }
}
