using ePatientCare.Models.Security;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Models
{
  public class UserDetails
  {

    public long UserDetailsID { get; set; }

    public string Title { get; set; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public string IDNumber { get; set; }

    public string Username { get; set; }

    public string Email { get; set; }

    public string PhoneNumber { get; set; }

    public int Gender { get; set; }

    public string Biography { get; set; }

    public string Reason { get; set; }

    public string ImageUrl { get; set; }

    public int Enabled { get; set; }

    public IEnumerable<Visit> Visits { get; set; }
    public AppUser AppUser { get; set; }
  }

}
