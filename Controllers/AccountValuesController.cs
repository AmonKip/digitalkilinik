using ePatientCare.Data;
using ePatientCare.Models;
using ePatientCare.Models.AccountViewModels;
using ePatientCare.Models.BindingTargets;
using ePatientCare.Models.Security;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ePatientCare.Controllers
{
  
  public class AccountValuesController : Controller
  {
    private readonly UserManager<AppUser> userManager;
    private readonly ApplicationDbContext context;
    private readonly SignInManager<AppUser> signInManager;
    //private readonly IEmailSender _emailSender;
    //private readonly ISmsSender _smsSender;
    //private readonly ILogger _logger;

    public AccountValuesController(UserManager<AppUser> usrMgr, ApplicationDbContext ctx, SignInManager<AppUser> signInMgr)
    {
      userManager = usrMgr;
      context = ctx;
      signInManager = signInMgr;
    }

    [HttpGet]
    [Route("api/users/{id}")]
    public UserDetails GetUser(long id) => context.UserDetails.Find(id);

    [HttpGet]
    [Route("api/users")]
    public IEnumerable<UserDetails> GetUsers() => context.UserDetails;

    [HttpGet]
    [Route("api/getrequests")]
    public IEnumerable<UserDetails> GetRequests() => context.UserDetails.Where(u => u.Enabled == 0);

    [HttpPut]
    [Route("api/edituser/{id}")]
    public IActionResult UpdateUser(long id, [FromBody] AppUserData userData)
    {
      if (ModelState.IsValid)
      {
        UserDetails userInfo = userData.User;
        userInfo.UserDetailsID = id;
        context.Update(userInfo);
        context.SaveChanges();
        return Ok();
      }
      else
      {
        return BadRequest(ModelState);
      }
    }

    [HttpPost]
    // [AllowAnonymous]
    //[ValidateAntiForgeryToken]
    [Route("api/addrequest")]
    public IActionResult Register([FromBody] RegisterViewModel model)
    {
      //ViewData["ReturnUrl"] = returnUrl;
      if (ModelState.IsValid)
      {
      
          var userdetails = context.UserDetails;
          UserDetails userInfo = new UserDetails();
          userInfo.FirstName = model.FirstName;
          userInfo.LastName = model.LastName;
          userInfo.Title = model.Title;
          userInfo.Gender = model.Gender;
          userInfo.IDNumber = model.IDNumber;
          userInfo.ImageUrl = model.ImageUrl;
          userInfo.Username = model.Username;
          userInfo.Biography = model.Biography;
          userInfo.Email = model.Email;
          userInfo.PhoneNumber = model.PhoneNumber;
          userInfo.Enabled = 0;
          //userInfo.AppUser = user;

          userdetails.Add(userInfo);
          context.SaveChanges();

          return Ok(userInfo.UserDetailsID);
      }

      return BadRequest(ModelState);
    }
    [HttpPost("/api/account/login")]
    public async Task<IActionResult> Login([FromBody] LoginViewModel creds)
    {
      if (ModelState.IsValid && await DoLogin(creds))
      {
        return Ok();
      }
      return BadRequest();
    }

    [HttpPost("/api/account/logout")]
    public async Task<IActionResult> Logout()
    {
      await signInManager.SignOutAsync();
      return Ok();
    }

    private async Task<bool> DoLogin(LoginViewModel creds)
    {
      AppUser user = await userManager.FindByNameAsync(creds.Name);
      if (user != null)
      {
        await signInManager.SignOutAsync();
        Microsoft.AspNetCore.Identity.SignInResult result =
            await signInManager.PasswordSignInAsync(user, creds.Password,
                false, false);
        return result.Succeeded;
      }
      return false;
    }

    public class LoginViewModel
    {
      [Required]
      public string Name { get; set; }
      [Required]
      public string Password { get; set; }
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
