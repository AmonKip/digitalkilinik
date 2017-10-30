using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NETCore.MailKit;
using ePatientCare.Configurations;
using Microsoft.Extensions.Options;
using MailKit.Security;
using System.Net;
using MailKit.Net.Smtp;
using MimeKit;
using MimeKit.Text;

namespace ePatientCare.Services
{
  public interface IEmailSender
  {
    Task SendEmailAsync(string email, string subject, string message);
  }
  public class EmailSender : IEmailSender
  {
    private readonly EmailConfig ec;

    public EmailSender(IOptions<EmailConfig> emailConfig)
    {
      this.ec = emailConfig.Value;
    }

    public async Task SendEmailAsync(String email, String subject, String message)
    {
      try
      {
        var emailMessage = new MimeMessage();

        emailMessage.From.Add(new MailboxAddress(ec.FromName, ec.FromAddress));
        emailMessage.To.Add(new MailboxAddress("", email));
        emailMessage.Subject = subject;
        emailMessage.Body = new TextPart(TextFormat.Html) { Text = message };

        using (var client = new SmtpClient())
        {
          //client.LocalDomain = ec.LocalDomain;

          await client.ConnectAsync(ec.MailServerAddress, Convert.ToInt32(ec.MailServerPort), SecureSocketOptions.Auto).ConfigureAwait(false);
          await client.AuthenticateAsync(new NetworkCredential(ec.UserId, ec.UserPassword));
          await client.SendAsync(emailMessage).ConfigureAwait(false);
          await client.DisconnectAsync(true).ConfigureAwait(false);
        }
      }
      catch (Exception ex)
      {
        Console.WriteLine(ex.Message);
      }
    }
  }
}
