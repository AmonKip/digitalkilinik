using ePatientCare.Data;
using ePatientCare.Models.Security;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Models
{
    public class SeedData
    {
      
    public async static void SeedDatabase(ApplicationDbContext context, UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager)
      {
        
        context.Database.Migrate();
        if(context.UserDetails.Count() == 0)
        {
        string username1 = "kosgei";
        string password1 = "Secret123$";
        string roleName = "Admin";

        var user1 = new AppUser { Email = "kiprotich87@yahoo.com", PhoneNumber = "4102519310", UserName = username1 };

        var userdetails1 = new UserDetails
        {
          FirstName = "Amon",
          LastName = "Kosgei",
          Username = username1,
          Gender = "Male",
          Biography = "testing",
          ImageUrl = "",
          Title = "Mr.",
          IDNumber = "1234567",
          AppUser = user1,
          PhoneNumber = "4102519310",
          Reason = "Developer, Administrator, Tester",
          Email = "kiprotich87@yahoo.com",
          Enabled = 1,
          IsRequest = 0
        };

        // new user
        var resultUser1 = await userManager.CreateAsync(user1, password1);

        // new role
        var resultRole1 = roleManager.CreateAsync(new IdentityRole(roleName));

        if (resultUser1 != null && resultRole1 != null){

            context.Add(userdetails1);
            context.SaveChanges();

          // add user to role
          await userManager.AddToRoleAsync(user1, roleName);
        }

        context.Patients.AddRange(
          new Patient
          {
            FirstName = "Milly",
            LastName = "Chepkirui",
            Gender = "Female",
            DOB = DateTime.Parse("10/10/2007"),
            Email = "",
            MiddleName = "Chepchumba",
            IDNumber = "0000000",
            Phone = "0723232323",
            PlaceOfBirth = "Nandi",
            Sublocation = "Kiptenden",
            Visits = new List<Visit>
            {
              new Visit{Complain ="Malaria", Diagnosis="Complex disease name", Medications = "Malaratab, Aspirin", Date = DateTime.Parse("10/11/2016"), UserDetails = userdetails1},
              new Visit{Complain ="Diahorrea", Diagnosis="Complex disease name", Medications = "tetracoxycedeyll", Date = DateTime.Parse("9/24/2017"), UserDetails = userdetails1}
            }

          },
          new Patient
          {
            FirstName = "Peter",
            LastName = "Matui",
            Gender = "Male",
            DOB = DateTime.Parse("12/12/1987"),
            Email = "",
            MiddleName = "Kiptum",
            IDNumber = "0000000",
            Phone = "0723232323",
            PlaceOfBirth = "Nandi",
            Sublocation = "Kiptenden",
            Visits = new List<Visit>{
              new Visit{Complain ="Malaria", Diagnosis="Complex disease name", Medications = "Malaratab, Aspirin", Date = DateTime.Parse("9/21/2017"), UserDetails = userdetails1},
              new Visit{Complain ="Chest pains", Diagnosis="Complex disease name", Medications = "Panadol, tetracoxycedeyll", Date = DateTime.Parse("9/27/2017"), UserDetails = userdetails1}
            }

            },

            new Patient
            {
              FirstName = "Gibert",
              LastName = "Kibet",
              Gender = "Male",
              DOB = DateTime.Parse("10/12/1985"),
              Email = "kibet@gmail.com",
              MiddleName = "",
              IDNumber = "0000001",
              Phone = "0723232312",
              PlaceOfBirth = "Nandi",
              Sublocation = "Tulon",
              Visits = new List<Visit>{
                new Visit{Complain ="Stomach pain", Diagnosis="Complex disease name", Medications = "Aspirin", Date = DateTime.Parse("9/12/2017"), UserDetails = userdetails1},
                new Visit{Complain ="Knee pain", Diagnosis="Complex disease name", Medications = "tetracoxycedeyll", Date = DateTime.Parse("9/15/2017"), UserDetails = userdetails1 },
                new Visit{Complain ="Chest pains", Diagnosis="Complex disease name", Medications = "Panadol", Date = DateTime.Parse("7/27/2017"), UserDetails = userdetails1}
            }

           },

            new Patient
            {
              FirstName = "Keneth",
              LastName = "Kimutai",
              Gender = "Male",
              DOB = DateTime.Parse("12/01/1996"),
              Email = "",
              MiddleName = "",
              IDNumber = "00000100",
              Phone = "0723232323",
              PlaceOfBirth = "Nandi",
              Sublocation = "Tulon",
              Visits = new List<Visit>{
               new Visit{Complain ="Lack of sleep", Diagnosis="Complex disease name", Medications = "Aspirin", Date = DateTime.Parse("9/25/2017"), UserDetails = userdetails1}
            }

           },

            new Patient
            {
              FirstName = "Nancy",
              LastName = "Bitok",
              Gender = "Female",
              DOB = DateTime.Parse("12/12/1991"),
              Email = "nancychepkok@yahoo.com",
              MiddleName = "chepkinyor",
              IDNumber = "0000000",
              Phone = "0733400300",
              PlaceOfBirth = "Nandi",
              Sublocation = "Kiptenden",
              Visits = new List<Visit>{
                new Visit{Complain ="Allucinations", Diagnosis="Complex disease name", Medications = "Anticydexolyn", Date = DateTime.Parse("4/21/2017"), UserDetails = userdetails1},
                new Visit{Complain ="Prenatal check up", Diagnosis="Complex disease name", Medications = "None", Date = DateTime.Parse("9/27/2017"), UserDetails = userdetails1}
            }

         });
        context.SaveChanges();
      }
      }
    }
}
