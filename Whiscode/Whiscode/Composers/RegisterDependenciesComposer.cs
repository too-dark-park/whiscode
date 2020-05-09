using Umbraco.Core;
using Umbraco.Core.Composing;
using Whiscode.Services;

namespace Whiscode.Composers
{
    public class RegisterDependenciesComposer
    {
        public class Composer : IUserComposer
        {
            public void Compose(Composition composition)
            {
                composition.Register<IMessageService, EmailService>();
            }
        }
    }
}
