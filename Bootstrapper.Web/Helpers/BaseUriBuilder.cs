using System;
using System.Web;

namespace Bootstrapper.Web.Helpers
{
    public static class BaseUriBuilder
    {
        public static string Build(Uri url)
        {
            // we want to set the base href.  we also want to ensure it is set to the same case as what the user entered.
            var applicationPath = HttpContext.Current.Request.ApplicationPath;
            if (applicationPath != null)
            {
                var path = HttpContext.Current.Request.Path.Substring(0, applicationPath.Length);

                if (string.Compare(applicationPath, path, StringComparison.InvariantCultureIgnoreCase) == 0)
                {
                    applicationPath = path;
                    if (!applicationPath.EndsWith("/"))
                    {
                        applicationPath += "/";
                    }
                }
            }

            return HttpContext.Current.Request.Url.GetLeftPart(UriPartial.Authority) + applicationPath;
        }
    }
}