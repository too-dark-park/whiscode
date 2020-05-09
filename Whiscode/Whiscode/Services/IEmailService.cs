using System.Threading.Tasks;

namespace Whiscode.Services
{
    public interface IMessageService
    {
        Task<bool> SendAsync(string to, string subject, string messageBody);
    }
}