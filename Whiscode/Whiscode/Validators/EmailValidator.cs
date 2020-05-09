using System;
using System.Net.Mail;

namespace Whiscode.Validators
{
    public static class EmailValidator
    {
        public static bool IsValidEmail(string email)
        {
            try
            {
                var mailAddress = new MailAddress(email);
            }
            catch(Exception e)
            {
                return false;
            }

            return true;
        }
    }
}
