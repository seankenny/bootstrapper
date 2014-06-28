using System;
using System.ComponentModel.DataAnnotations;

namespace Bootstrapper.Web.DataModels
{
    public class UserApplicationDataModel
    {
        [Required]
        public Guid UserId { get; set; }
        
        [Required]
        public Guid ApiKey { get; set; }
    }
}