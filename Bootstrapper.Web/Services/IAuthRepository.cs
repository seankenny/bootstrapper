using System.Collections.Generic;
using System.Threading.Tasks;

using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Bootstrapper.Web.Services
{
    public interface IAuthRepository
    {
        Task<IdentityResult> RegisterUser(string userName, string password);

        Task<IdentityUser> FindUser(string userName, string password);

        List<IdentityUser> GetAllUsers();
    }
}