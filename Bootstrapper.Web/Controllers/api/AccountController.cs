using System.Threading.Tasks;
using System.Web.Http;

using Bootstrapper.Web.DataModels;
using Bootstrapper.Web.Services;

namespace Bootstrapper.Web.Controllers.api
{
    
    [RoutePrefix("api/account")]
    public class AccountController : ApiController
    {
        private readonly IAuthRepository authRepository;

        public AccountController(IAuthRepository authRepository)
        {
            this.authRepository = authRepository;
        }

        [HttpPost, Route("register")]
        public async Task<IHttpActionResult> Register(RegistrationDataModel requestData)
        {
            await authRepository.RegisterUser(requestData.EmailAddress, requestData.Password);

            return Ok();
        }
        
    }
}
