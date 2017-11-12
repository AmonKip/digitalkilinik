using ePatientCare.Data;
using ePatientCare.Models;
using ePatientCare.Models.AccountViewModels;
using ePatientCare.Models.Security;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Controllers
{
  [Authorize(Roles = "Admin")]
  [ValidateAntiForgeryToken]
  public class RolesValuesController : Controller
  {
    private readonly ApplicationDbContext context;
    private readonly RoleManager<IdentityRole> roleManager;
    //private readonly SignInManager<AppUser> _signInManager;
    //private readonly IEmailSender _emailSender;
    //private readonly ISmsSender _smsSender;
    //private readonly ILogger _logger;


    public RolesValuesController(ApplicationDbContext ctx, RoleManager<IdentityRole> roleMgr)
    {
      context = ctx;
      roleManager = roleMgr;
    }

    [HttpGet]
    [Route("api/roles")]
    public IEnumerable<IdentityRole> GetRoles() 
    { 
       System.Threading.Thread.Sleep(5000);
      return roleManager.Roles;
    }

    // POST: /Account/Register

    [Route("api/addrole")]
    public async Task<IActionResult> CreateRole([FromBody] RoleViewModel model)
    {
      System.Threading.Thread.Sleep(5000);
      if (ModelState.IsValid)
      {
        IdentityResult result = await roleManager.CreateAsync(new IdentityRole(model.Name));

        if (result.Succeeded)
        {
          return Ok();
        }
        AddErrors(result);
      }
      return BadRequest(ModelState);
    }

    #region Helpers

    private void AddErrors(IdentityResult result)
    {
      foreach (var error in result.Errors)
      {
        ModelState.AddModelError(string.Empty, error.Description);
      }
    }
    #endregion
  }
}
