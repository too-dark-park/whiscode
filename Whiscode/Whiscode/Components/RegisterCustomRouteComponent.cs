using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;
using Umbraco.Core.Composing;

namespace Whiscode.Components
{
    public class RegisterCustomRouteComposer : ComponentComposer<RegisterCustomRouteComponent>
    { }

    public class RegisterCustomRouteComponent : IComponent
    {
        public void Initialize()
        {
            RouteTable.Routes.MapHttpRoute(
                    "DefaultApi",
                    "api/{controller}/{action}");

            RouteTable.Routes.MapRoute(
                    "Default", // Route name
                    "{*catchall}", // URL with parameters
                    new { controller = "Home", action = "Index" });
        }

        public void Terminate()
        {
            // Nothing to terminate
        }
    }
}