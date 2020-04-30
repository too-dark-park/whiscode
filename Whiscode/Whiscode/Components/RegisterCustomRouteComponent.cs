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
            // Custom route to MyProductController which will use a node with a specific ID as the
            // IPublishedContent for the current rendering page

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