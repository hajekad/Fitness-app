using Hajekad.FA_backend.ApplicationLayer.Models;
using Hajekad.FA_backend.ApplicationLayer.Models.Activity;

namespace Hajekad.FA_backend.ApplicationLayer.Services.UserService;

public interface IUserService
{
    public List<IActivity> GetAllActivities();
    public IPersonBase AddActivity(IActivity NewActivity);
    public IPersonBase UpdateActivity(IActivity Destination, IActivity Source);
    public IPersonBase DeleteActivity(IActivity Target);
}