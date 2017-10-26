using ePatientCare.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Data
{
    public class AppDataContext : DbContext
    {

      public AppDataContext(DbContextOptions<AppDataContext> opts)
        : base(opts) { }

      public DbSet<Patient> Patients { get; set; }
      public DbSet<Employee> Employees { get; set; }
      public DbSet<Visit> Visits { get; set; }
    }
}
