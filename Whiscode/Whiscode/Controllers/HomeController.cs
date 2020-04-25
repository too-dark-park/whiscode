using System.Web.Mvc;
using Umbraco.Web.Mvc;

namespace Whiscode.Controllers
{
    public class HomeController : RenderMvcController
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}