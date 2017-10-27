using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ePatientCare.Models.BindingTargets
{
    public class PatientData
    {
        [Required(ErrorMessage = "Please enter patient's first name")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Please enter patient's last name")]
        public string LastName { get; set; }

        public string MiddleName { get; set; }

        [Required(ErrorMessage = "Please enter patient's date of birth")]
        public DateTime DOB { get; set; }

        [Required(ErrorMessage = "Please enter patient's place of birth")]
        public string PlaceOfBirth { get; set; }

        [Required(ErrorMessage = "Please enter patient's sublocation")]
        public string Sublocation { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        public string IDNumber { get; set; }

        public string Gender { get; set; }

        public Patient Patient => new Patient
        {
            FirstName = FirstName,
            LastName = LastName,
            MiddleName = MiddleName,
            DOB = DOB,
            PlaceOfBirth = PlaceOfBirth,
            Sublocation = Sublocation,
            Phone = Phone,
            Email = Email,
            IDNumber = IDNumber,
            Gender = Gender
        };
    }
}
