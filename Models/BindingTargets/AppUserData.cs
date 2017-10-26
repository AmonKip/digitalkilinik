using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Models.BindingTargets
{
  public class AppUserData
  {
    public string Title { get; set; }

    [Required(ErrorMessage = "Please enter first name")]
    public string FirstName { get; set; }

    [Required(ErrorMessage = "Please enter last name")]
    public string LastName { get; set; }

    [Required(ErrorMessage = "Please enter ID Number")]
    public string IDNumber { get; set; }

    [Required(ErrorMessage = "Please enter email")]
    public string Email { get; set; }

    [Required(ErrorMessage = "Please enter first username")]
    public string Username { get; set; }

    [Required(ErrorMessage = "Please select gender")]
    public int Gender { get; set; }

    [Required(ErrorMessage = "Please enter phone")]
    public string PhoneNumber { get; set; }

    [Required(ErrorMessage = "Please enter phone")]
    public string Reason { get; set; }

    public string Biography { get; set; }

    public string ImageUrl { get; set; }

    public int Enabled { get; set; }

    public UserDetails User => new UserDetails
    {
      Title = Title,
      FirstName = FirstName,
      LastName = LastName,
      IDNumber = IDNumber,
      Email = Email,
      Username = Username,
      Enabled  = Enabled,
      Gender = Gender,
      Reason = Reason,
      Biography = Biography,
      PhoneNumber = PhoneNumber,
      ImageUrl = ImageUrl
    };
  }
}
