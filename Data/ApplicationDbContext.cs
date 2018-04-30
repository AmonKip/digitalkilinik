using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ePatientCare.Models;
using ePatientCare.Models.Security;
using System.ComponentModel.DataAnnotations;

namespace ePatientCare.Data
{
    public class ApplicationDbContext : IdentityDbContext<AppUser>
    {
       
     public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
           //Customize the ASP.NET Identity model and override the defaults if needed.
           //For example, you can rename the ASP.NET Identity table names and more.
           //Add your customizations after calling base.OnModelCreating(builder);
      
        }

        public DbSet<Patient> Patients { get; set; }
       // public DbSet<Employee> Employees { get; set; }
        public DbSet<Visit> Visits { get; set; }
        public DbSet<UserDetails> UserDetails { get; set; }
        public DbSet<VitalSigns> VitalSigns { get; set; }
        public DbSet<Assessment> Assessments { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Lab> LabWorks { get; set; }
        public DbSet <Pharmacy> Pharmacy { get; set; }
        public DbSet<Imaging> Imaging { get; set; }
        public DbSet<LogEntry> LogEntry { get; set; }
        public DbSet<LogLevel> LogLevel { get; set; }
  }
}
