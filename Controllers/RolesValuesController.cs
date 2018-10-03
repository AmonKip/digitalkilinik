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
  [Authorize(Roles = "Admin", ActiveAuthenticationSchemes ="Bearer")]
  public class RolesValuesController : Controller
  {
    private readonly ApplicationDbContext context;
    private readonly RoleManager<IdentityRole> roleManager;
    private readonly UserManager<AppUser> userManager;

        //private readonly SignInManager<AppUser> _signInManager;
        //private readonly IEmailSender _emailSender;
        //private readonly ISmsSender _smsSender;
        //private readonly ILogger _logger;


    public RolesValuesController(ApplicationDbContext ctx, RoleManager<IdentityRole> roleMgr, UserManager<AppUser> usrManager)
    {
      context = ctx;
      roleManager = roleMgr;
      userManager = usrManager;
    }

        // get all roles from roles table
        [HttpGet]
        [Route("api/roles")]
        [Authorize(ActiveAuthenticationSchemes = "Bearer")]
        public IQueryable<Object> GetRoles()
        {
           var query = from r in roleManager.Roles
            select new { Id = r.Id, Name = r.Name };

            return query;
    }

    // add a new role to roles table
    [Route("api/addrole")]
    public async Task<IActionResult> CreateRole([FromBody] RoleViewModel model)
    {
     // System.Threading.Thread.Sleep(5000);
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
    // add user by user id to role
    [Route("api/addtorole/{id}")]
    public async Task<IActionResult> AddToRole(string rolename, long id)
    {

      var appuser = await userManager.FindByEmailAsync(context.UserDetails.Find(id).Email);

      if(appuser !=null)
      {
        var result = await userManager.AddToRoleAsync(appuser, rolename);
        return Ok();
      }
      return BadRequest();
    }

    // remove user from role
    [Route("api/removefromrole/{id}")]
    public async Task<IActionResult> RemoveFromRole(string rolename, long id)
    {
      var appuser = await userManager.FindByEmailAsync(context.UserDetails.Find(id).Email);

      if (appuser != null)
      {
        var result = await userManager.RemoveFromRoleAsync(appuser, rolename);
        return Ok();
      }
      return BadRequest();
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
