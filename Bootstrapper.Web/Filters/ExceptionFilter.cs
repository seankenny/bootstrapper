using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http.Filters;

namespace Bootstrapper.Web.Filters
{
    public class ExceptionAttribute : ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext actionExecutedContext)
        {
            var response = new List<string> { "unknown exception has occurred" };
            //make debug life easier by returning full exception
#if DEBUG
            response.Clear();
            response.Add(actionExecutedContext.Exception.ToString());
#endif

            actionExecutedContext.Response = actionExecutedContext.Request.CreateResponse(HttpStatusCode.InternalServerError, response);

            // log exception to store
        }
    }
}