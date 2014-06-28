using System.Web.Http;

using Bootstrapper.Web.Filters;

using Newtonsoft.Json.Serialization;

namespace Bootstrapper.Web
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Use camel case for JSON data.
            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            config.MapHttpAttributeRoutes();

            config.Filters.Add(new ModelStateValidationAttribute());
            config.Filters.Add(new ExceptionAttribute());
        }
    }
}