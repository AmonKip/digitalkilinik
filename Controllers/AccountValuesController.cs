using ePatientCare.Data;
using ePatientCare.Models;
using ePatientCare.Models.AccountViewModels;
using ePatientCare.Models.BindingTargets;
using ePatientCare.Models.Security;
using ePatientCare.Services;
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
    private readonly IEmailSender emailSender;
    //private readonly ISmsSender _smsSender;
    //private readonly ILogger _logger;

    public AccountValuesController(UserManager<AppUser> usrMgr, ApplicationDbContext ctx,
                                      SignInManager<AppUser> signInMgr, IEmailSender eSender)
    {
      userManager = usrMgr;
      context = ctx;
      signInManager = signInMgr;
      emailSender = eSender;
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
    public async Task<IActionResult> UpdateUser(long id, [FromBody] AppUserData userData)
    {
      if (ModelState.IsValid)
      {
        UserDetails userInfo = userData.User;
        userInfo.UserDetailsID = id;
        userInfo.LastUpdatedDate = DateTime.UtcNow;
        context.Update(userInfo);
        context.SaveChanges();
        await emailSender.SendEmailAsync("kiprotich87@yahoo.com", "User Account Updated", "User account has been updated in <a href='http://localhost:5000'>digital kilinik</a>");
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
        userInfo.Reason = model.Reason;
        userInfo.Enabled = 0;
        userInfo.CreatedDate = DateTime.UtcNow;
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

    // POST: /Account/ForgotPassword

    //[AllowAnonymous]
    //[ValidateAntiForgeryToken]
    [HttpPost("/api/account/forgotpassword")]
    public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordViewModel model)
    {
      if (ModelState.IsValid)
      {
        var user = await userManager.FindByEmailAsync(model.Email);
        if (user == null)
        {
          // Don't reveal that the user does not exist or is not confirmed
          return BadRequest();
        }

        // For more information on how to enable account confirmation and password reset please visit https://go.microsoft.com/fwlink/?LinkID=532713
        // Send an email with this link
        var code = await userManager.GeneratePasswordResetTokenAsync(user);
        //var callbackUrl = Url.Action(nameof(ResetPassword), "Account", new { userId = user.Id, code = code }, protocol: HttpContext.Request.Scheme);
        var protocol = HttpContext.Request.Scheme;
     
        var callbackUrl = protocol + "://localhost:5000/resetpassword/?userid=" + user.Id + "&code=" + code;
        await emailSender.SendEmailAsync(model.Email, "Reset Password",
           $"Please reset your password by clicking <a href='{callbackUrl}'>here</a>");
        return Ok();
      }

      // If we got this far, something failed, redisplay form
      return View(model);
    }

    // POST: /Account/ResetPassword
    //[AllowAnonymous]
    //[ValidateAntiForgeryToken]
    [HttpPost("/api/account/resetpassword")]
    public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordViewModel model)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }
      var user = await userManager.FindByEmailAsync(model.Email);
      if (user == null)
      {

        // return RedirectToAction(nameof(AccountController.ResetPasswordConfirmation), "Account");
        return BadRequest();
      }
      var result = await userManager.ResetPasswordAsync(user, model.Code, model.Password);
      if (result.Succeeded)
      {
        //return RedirectToAction(nameof(AccountController.ResetPasswordConfirmation), "Account");
        return Ok();
      }
      AddErrors(result);
      return BadRequest(ModelState);
    }

    // enables a user account if disabled and vice versa
    [HttpPost("/api/account/toggle/{id}")]
    public async Task<IActionResult> ToggleUserAccount(long id)
    {
      var user = await context.UserDetails.FindAsync(id);

      if(user == null){
        return BadRequest();
      }
      if (user.Enabled == 1)
      {
        user.Enabled = 0;
      }
      else
      {
        user.Enabled = 1;
      }
      context.Update(user);
      context.SaveChanges();
      System.Threading.Thread.Sleep(5000);
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
