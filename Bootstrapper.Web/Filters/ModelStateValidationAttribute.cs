using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace Bootstrapper.Web.Filters
{
    public class ModelStateValidationAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            var response = new List<string>();

            var modelState = actionContext.ModelState;

            if (!modelState.IsValid)
            {
                foreach (var message in modelState.Values)
                {
                    response.AddRange(message.Errors.Select(error => error.ErrorMessage));
                }
                actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.BadRequest, response);
            }
        }
    }
}