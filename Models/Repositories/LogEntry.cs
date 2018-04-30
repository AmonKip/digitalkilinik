using ePatientCare.Data;
using ePatientCare.Models.BindingTargets;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Models.Repositories
{
  public class LogEntry : ILogEntry
  {
    private ApplicationDbContext context;

    public LogEntry(ApplicationDbContext ctx)
    {
      context = ctx;
    }

    public IEnumerable<LogEntryData> Logs => throw new NotImplementedException();

    public void Add(LogEntryData logEntry)
    {
      throw new NotImplementedException();
    }
  }
}
