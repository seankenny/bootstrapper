using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Bootstrapper.Web.Services
{
    public class AuthRepository : IAuthRepository
    {
        private readonly UserManager<IdentityUser> _userManager;

        public AuthRepository(DbContext dbContext)
        {
            _userManager = new UserManager<IdentityUser>(new UserStore<IdentityUser>(dbContext));
        }

        public async Task<IdentityResult> RegisterUser(string userName, string password)
        {
            var user = new IdentityUser
                           {
                               UserName = userName
                           };

            var result = await _userManager.CreateAsync(user, password);

            return result;
        }

        public async Task<IdentityUser> FindUser(string userName, string password)
        {
            var user = await _userManager.FindAsync(userName, password);

            return user;
        }

        public List<IdentityUser> GetAllUsers()
        {
            return _userManager.Users.ToList();
        }

        public void Dispose()
        {
            _userManager.Dispose();
        }
    }
}