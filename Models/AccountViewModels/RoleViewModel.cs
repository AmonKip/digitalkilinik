using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Models.AccountViewModels
{
    public class RoleViewModel
    {
      [Required(ErrorMessage = "Must enter role name")]
      public string Name { get; set; }
  }
}
