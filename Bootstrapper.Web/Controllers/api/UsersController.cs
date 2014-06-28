using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

using Bootstrapper.Web.Services;

namespace Bootstrapper.Web.Controllers.api
{
    [RoutePrefix("api/users")]
    [Authorize]
    public class UsersController : ApiController
    {
        private readonly IAuthRepository authRepository;

        public UsersController(IAuthRepository authRepository)
        {
            this.authRepository = authRepository;
        }

        [HttpGet, Route("")]
        public HttpResponseMessage Get()
        {
            var userNames = authRepository.GetAllUsers().Select(s => s.UserName);

            return Request.CreateResponse(HttpStatusCode.OK, userNames);
        }
        
    }
}
