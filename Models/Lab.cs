using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Models
{
    public class Lab : OrderType
    {
      public string Blood{ get; set; }
      public string Stool { get; set; }
      public string Urianalysis{ get; set; }

    }
}
