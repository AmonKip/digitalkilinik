using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Models.BindingTargets
{
  public class LogEntryData
  {
    public DateTime EntryDate { get; set; }
    public string Message { get; set; }
    public Level level { get; set; }

    public Boolean LogWithDate { get; set; }

    //public LogEntry LogEntry => new LogEntry
    //{
    //  EntryDate = EntryDate,
    //  Message = Message,
    //  Level = (Models.LogEntry) level,
    //};

  }
  public enum Level
  {
    All = 0,
    Debug = 1,
    Info = 2,
    Warn = 3,
    Error = 4,
    Fatal = 5,
    Off = 6
  }
}
