using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Models
{
    public class LogEntry
    {
      public int ID { get; set; }
      public DateTime EntryDate { get; set; }
      public string Message { get; set; }
      public int Level { get; set; }

    }

    public class LogLevel
    {
     public int ID{ get; set; }
     public int Level { get; set; }
     public string Description { get; set; }

    }
}
