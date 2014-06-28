using System.ComponentModel.DataAnnotations;

namespace Bootstrapper.Web.DataModels
{
    public class RegistrationDataModel
    {
        [Required, EmailAddress]
        public string EmailAddress { get; set; }
        
        [Required]
        public string Password { get; set; }

        [Required, Display(Name = "Confirm Password"), Compare("Password")]
        public string ConfirmPassword { get; set; }
    }
}