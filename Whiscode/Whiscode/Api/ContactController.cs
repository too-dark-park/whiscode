using StackExchange.Profiling.Internal;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using Umbraco.Web.WebApi;
using Whiscode.Api.Models;
using Whiscode.Services;
using Whiscode.Validators;

namespace Whiscode.Api
{
    [RoutePrefix("api")]
    public class ContactController : UmbracoApiController
    {
        private IMessageService _emailService;

        public ContactController(IMessageService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost]
        public async Task<IHttpActionResult> Send(ContactFormRequest form)
        {
            if (!EmailValidator.IsValidEmail(form.EmailAddress) || form.Message.IsNullOrWhiteSpace())
            {
                return BadRequest();
            }

            var message = new StringBuilder();
            message.AppendLine($"Email: {form.EmailAddress}<br /><br />");
            message.AppendLine($"Name: {form.Name}<br /><br />");
            message.AppendLine(form.Message);

            // TODO replace with whiscode domain email once transfer has completed
            if (await _emailService.SendAsync("whiscodeltd@gmail.com", "Website Enquiry", message.ToString()))
            {
                return Ok();
            }

            return InternalServerError();
        }
    }
}