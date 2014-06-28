using System.Web.Mvc;
using System.Web.Routing;

namespace Bootstrapper.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "html5",
                url: "{*catchall}",
                defaults: new { controller = "Home", action = "Index" },
                constraints: new { catchall = "^(?!api).*$" });
        }
    }
}
