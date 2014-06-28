using System.ComponentModel.DataAnnotations;

namespace Bootstrapper.Web.DataModels
{
    public class UserSignInDataModel
    {
        [Required]
        public string EmailAddress { get; set; }
        
        [Required]
        public string Password { get; set; }

        public bool KeepMeSignedIn { get; set; }
    }
}