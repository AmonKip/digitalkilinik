using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Models
{
    public class Employee
    {
        public long EmployeeID { get; set; }

        public string Title { get; set; }

        //[Required(ErrorMessage = "Please enter employee first name")]
        public string FirstName { get; set; }

       // [Required(ErrorMessage = "Please enter employees last name")]
        public string LastName { get; set; }

        //[Required(ErrorMessage = "Please enter ID number")]
        public string IDNumber { get; set; }

        public string Email { get; set; }

       // [Required(ErrorMessage = "Please enter employee's username")]
        public string Username { get; set; }

       // [Required(ErrorMessage = "Please enter employee's phone number")]
        public string Phone { get; set; }

        public string Biography { get; set; }

        public string ImageUrl { get; set; }

        public IEnumerable<Visit> Visits { get; set; }
  }
}
