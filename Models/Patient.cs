using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Models
{
    public class Patient
    {
        public long PatientID { get; set; }

        //[Required(ErrorMessage = "Please enter patient's first name")]
        public string FirstName { get; set; }

        //[Required(ErrorMessage = "Please enter patient's last name")]
        public string LastName { get; set; }

        public string MiddleName { get; set; }

        public string Gender { get; set; }

       //[Required(ErrorMessage = "Please enter patient's date of birth")]
        public DateTime DOB { get; set; }

        public string PlaceOfBirth { get; set; }

        //[Required(ErrorMessage = "Please enter patient's sublocation")]
        public string Sublocation { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        public string IDNumber { get; set; }

        public int Current { get; set; }

        //public List<Visit> Visits { get; set; }
  }
}
