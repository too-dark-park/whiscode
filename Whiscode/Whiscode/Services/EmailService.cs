using System;
using System.Configuration;
using System.Net.Configuration;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Whiscode.Services
{
    public class EmailService : IMessageService
    {
        public async Task<bool> SendAsync(string to, string subject, string messageBody)
        {
            try
            {
                var smtpSection = (SmtpSection)ConfigurationManager.GetSection("system.net/mailSettings/smtp");
                string fromEmail = smtpSection.From;

                var message = new MailMessage();
                message.From = new MailAddress(fromEmail);
                message.To.Add(new MailAddress(to));
                message.Subject = subject;
                message.Body = messageBody;
                message.IsBodyHtml = true;
                message.IsBodyHtml = true;

                using (var smtpClient = new SmtpClient())
                {
                    await smtpClient.SendMailAsync(message);
                    return true;
                }
            }
            catch (Exception e)
            {
                // TODO log error
                return false;
            }
        }
    }
}
