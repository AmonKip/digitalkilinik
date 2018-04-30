//using ePatientCare.Models.BindingTargets;
using ePatientCare.Models.BindingTargets;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Models.Repositories
{
    public interface ILogEntry
    {
      IEnumerable<LogEntryData> Logs { get; }
      void Add(LogEntryData logEntry);
    }
}
