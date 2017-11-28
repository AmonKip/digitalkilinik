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
      if (context.UserDetails.Count() == 0)
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

        if (resultUser1 != null && resultRole1 != null)
        {

          context.Add(userdetails1);
          context.SaveChanges();

          // add user to role
          await userManager.AddToRoleAsync(user1, roleName);
        }

        var patient1 = new Patient
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
        };

        var patient2 = new Patient
        {
          FirstName = "Gilbert",
          LastName = "Kibet",
          Gender = "Male",
          DOB = DateTime.Parse("10/12/1985"),
          Email = "kibet@gmail.com",
          MiddleName = "",
          IDNumber = "0000001",
          Phone = "0723232312",
          PlaceOfBirth = "Nandi",
          Sublocation = "Tulon"
        };

        var patient3 = new Patient
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
          Sublocation = "Kiptenden"

        };

        var patient4 = new Patient
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
          Sublocation = "Tulon"
        };

        var patient5 = new Patient
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
          Sublocation = "Kiptenden"
        };
        context.AddRange(patient1, patient2, patient3, patient4, patient5);
        context.SaveChanges();

        // Visit table
        var visit1 = new Visit
        {
          Background = "Felt headache for the last 2 days",
          Complaint = "Headache",
          PatientID = context.Patients.Where(f => f.FirstName == "Milly").FirstOrDefault().PatientID,
          Date = DateTime.Parse("11/10/2017"),
        };

        var visit2 = new Visit
        {
          Background = "Shortness of breath last night",
          Complaint = "Headache, dizyness",
          PatientID = context.Patients.Where(f => f.FirstName == "Milly").FirstOrDefault().PatientID,
          Date = DateTime.Parse("11/12/2017"),
        };

        var visit3 = new Visit
        {
          Background = "Cough and high fever last night",
          Complaint = "Headache, cough",
          PatientID = context.Patients.Where(f => f.FirstName == "Gilbert").FirstOrDefault().PatientID,
          Date = DateTime.Parse("11/11/2017"),
        };

        var visit4 = new Visit
        {
          Background = "Stomache and luck of appetite for the last 7 days",
          Complaint = "Stomache",
          PatientID = context.Patients.Where(f => f.FirstName == "Peter").FirstOrDefault().PatientID,
          Date = DateTime.Parse("11/15/2017"),
        };

        var visit5 = new Visit
        {
          Background = "Prenatal check up",
          Complaint = "Regular checkup",
          PatientID = context.Patients.Where(f => f.FirstName == "Nancy").FirstOrDefault().PatientID,
          Date = DateTime.Parse("11/10/2017"),
        };
        context.Visits.AddRange(visit1, visit2, visit3, visit4, visit5);
        context.SaveChanges();

        var vitalSigns1 = new VitalSigns
        {
          BloodPressure = "126/89",
          OxygenSaturation = "98",
          Pulse = "64",
          Respiration = "15/minute",
          Temperature = "36.8",
          Date = DateTime.Now.Date,
          VisitId = 1,
          UserDetailsID = context.UserDetails.FirstOrDefault().UserDetailsID,
        };

        var vitalSigns2 = new VitalSigns
        {
          BloodPressure = "120/80",
          OxygenSaturation = "98",
          Pulse = "60",
          Respiration = "17/minute",
          Temperature = "37.8",
          Date = DateTime.Parse("11/12/2017"),
          VisitId = 2,
          UserDetailsID = context.UserDetails.FirstOrDefault().UserDetailsID,
        };
        var vitalSigns3 = new VitalSigns
        {
          BloodPressure = "110/85",
          OxygenSaturation = "94",
          Pulse = "50",
          Respiration = "15/minute",
          Temperature = "35.2",
          Date = DateTime.Now.Date,
          VisitId = 3,
          UserDetailsID = context.UserDetails.FirstOrDefault().UserDetailsID,
        };
        var vitalSigns4 = new VitalSigns
        {
          BloodPressure = "127/89",
          OxygenSaturation = "97",
          Pulse = "60",
          Respiration = "16/minute",
          Temperature = "37.2",
          Date = DateTime.Now.Date,
          VisitId = 4,
          UserDetailsID = context.UserDetails.FirstOrDefault().UserDetailsID,
        };
        var vitalSigns5 = new VitalSigns
        {
          BloodPressure = "128/86",
          OxygenSaturation = "98",
          Pulse = "60",
          Respiration = "16/minute",
          Temperature = "37.2",
          Date = DateTime.Now.Date,
          VisitId = 5,
          UserDetailsID = context.UserDetails.FirstOrDefault().UserDetailsID,
        };

        // Vitalsigns table
        context.AddRange(vitalSigns1, vitalSigns2, vitalSigns3, vitalSigns4, vitalSigns5);
        context.SaveChanges();

        var assessment1 = new Assessment
        {
          Notes = "Administer 2 panadols daily for 1 week for pain. If pain persists return back to clinic",
          Date = DateTime.Parse("11/10/2017"),
          VisitId = 1,
          UserDetailsID = context.UserDetails.FirstOrDefault().UserDetailsID,
        };

        var assessment2 = new Assessment
        {
          Notes = "Order labwork for further examination",
          Date = DateTime.Parse("11/12/2017"),
          VisitId = 2,
          UserDetailsID = context.UserDetails.FirstOrDefault().UserDetailsID,
        };

        var assessment3 = new Assessment
        {
          Notes = "Ordered labwork and imaging. Administer 500mg of drug sjfjjjfiyyye twice a day for 3 days",
          Date = DateTime.Parse("11/10/2017"),
          VisitId = 3,
          UserDetailsID = context.UserDetails.FirstOrDefault().UserDetailsID,
        };

        var assessment4 = new Assessment
        {
          Notes = "Administer 2 panadols twice a day for 4 days",
          Date = DateTime.Parse("11/10/2017"),
          VisitId = 4,
          UserDetailsID = context.UserDetails.FirstOrDefault().UserDetailsID,
        };

        var assessment5 = new Assessment
        {
          Notes = "Ordered labwork and adminstered 450mg of ctstesnns to be taken twice a day for 2 days",
          Date = DateTime.Parse("11/10/2017"),
          VisitId = 5,
          UserDetailsID = context.UserDetails.FirstOrDefault().UserDetailsID,
        };
        context.AddRange(assessment1, assessment2, assessment3, assessment4, assessment5);
        context.SaveChanges();


        // Orders Table
        var order1 = new Order
        {
          Date = DateTime.Parse("11/10/2017"),
          VisitId = 2,
          Notes = "Perform labwork of stool, blood and urinalysis",
          OrderType = "Lab"
        };
        var order2 = new Order
        {
          Date = DateTime.Parse("11/10/2017"),
          VisitId = 3,
          Notes = "Perform labwork of stool, blood and urinalysis",
          OrderType = "Lab"
        };
        var order3 = new Order
        {
          Date = DateTime.Parse("11/10/2017"),
          VisitId = 3,
          Notes = "Perform chest x-ray",
          OrderType = "Imaging"
        };
        var order4 = new Order
        {
          Date = DateTime.Parse("11/10/2017"),
          VisitId = 4,
          Notes = "Perform / complete blood analysis",
          OrderType = "Lab"
        };
        var order5 = new Order
        {
          Date = DateTime.Parse("11/10/2017"),
          VisitId = 1,
          Notes = "Administer 14 300mg of  to be taken by mouth twice a day for 7 days",
          OrderType = "Pharmacy"
        };
        var order6 = new Order
        {
          Date = DateTime.Parse("11/10/2017"),
          VisitId = 5,
          Notes = "Order for 4 450mg of ctstesnns to be taken twice a day for 2 days",
          OrderType = "Pharmacy"
        };
        var order7 = new Order
        {
          Date = DateTime.Parse("11/10/2017"),
          VisitId = 3,
          Notes = "Order for 6 500mg of drug sjfjjjfiyyye twice a day for 3 days",
          OrderType = "Pharmacy"
        };
        var order8 = new Order
        {
            Date = DateTime.Parse("11/10/2017"),
            VisitId = 4,
            Notes = "Order for 8 500mg of panadols to be taken morning and noon for daily for 4 days",
            OrderType = "Pharmacy"
        };
        context.Orders.AddRange(order1, order2, order3, order4, order5, order6, order7, order8);
        context.SaveChanges();

      }
    }
  }
}
       // context.Patients.AddRange(
          //new Patient
          //{
          //  FirstName = "Milly",
          //  LastName = "Chepkirui",
          //  Gender = "Female",
          //  DOB = DateTime.Parse("10/10/2007"),
          //  Email = "",
          //  MiddleName = "Chepchumba",
          //  IDNumber = "0000000",
          //  Phone = "0723232323",
          //  PlaceOfBirth = "Nandi",
          //  Sublocation = "Kiptenden",
          //  Visits = new List<Visit>
          //  {
          //    new Visit{Complaint ="Malaria", Background ="Complex disease name", Date = DateTime.Parse("10/11/2016"),  = userdetails1.UserDetailsID},
          //    new Visit{Complain ="Diahorrea", Diagnosis="Complex disease name", Medications = "tetracoxycedeyll", Date = DateTime.Parse("9/24/2017"), UserDetails = userdetails1}
          //  }

          //},
         /* new Patient
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
              new Visit{Complaint ="Malaria", Diagnosis="Complex disease name", Medications = "Malaratab, Aspirin", Date = DateTime.Parse("9/21/2017"), UserDetails = userdetails1},
              new Visit{Complaint ="Chest pains", Diagnosis="Complex disease name", Medications = "Panadol, tetracoxycedeyll", Date = DateTime.Parse("9/27/2017"), UserDetails = userdetails1}
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
                new Visit{Complaint ="Stomach pain", Diagnosis="Complex disease name", Medications = "Aspirin", Date = DateTime.Parse("9/12/2017"), UserDetails = userdetails1},
                new Visit{Complaint ="Knee pain", Diagnosis="Complex disease name", Medications = "tetracoxycedeyll", Date = DateTime.Parse("9/15/2017"), UserDetails = userdetails1 },
                new Visit{Complaint ="Chest pains", Diagnosis="Complex disease name", Medications = "Panadol", Date = DateTime.Parse("7/27/2017"), UserDetails = userdetails1}
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
               new Visit{Complaint ="Lack of sleep", Diagnosis="Complex disease name", Medications = "Aspirin", Date = DateTime.Parse("9/25/2017"), UserDetails = userdetails1}
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
                new Visit{Complaint ="Allucinations", Diagnosis="Complex disease name", Medications = "Anticydexolyn", Date = DateTime.Parse("4/21/2017"), UserDetails = userdetails1},
                new Visit{Complaint ="Prenatal check up", Diagnosis="Complex disease name", Medications = "None", Date = DateTime.Parse("9/27/2017"), UserDetails = userdetails1}
            }

            });
        context.SaveChanges();
      }
    }
  }
}
*/