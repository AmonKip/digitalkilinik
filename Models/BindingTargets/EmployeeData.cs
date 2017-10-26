using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ePatientCare.Models.BindingTargets
{
    public class EmployeeData
    {
        public string Title { get; set; }

        [Required(ErrorMessage = "Please enter first name")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Please enter last name")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Please enter ID number")]
        public string IDNumber { get; set; }

        public string Email { get; set; }

        [Required(ErrorMessage = "Please enter username")]
        //[StringLengt(4, MinimumLength = 4, ErrorMessage ="username must be at least 4 character long")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Please enter phone number")]
        public string Phone { get; set; }

        public string Biography { get; set; }

        public string ImageUrl { get; set; }

        public Employee Employee => new Employee
        {
            Title = Title,
            FirstName = FirstName,
            LastName = LastName,
            IDNumber = IDNumber,
            Email = Email,
            Username = Username,
            Biography = Biography,
            Phone = Phone,
            ImageUrl = ImageUrl
        };
    }
}
