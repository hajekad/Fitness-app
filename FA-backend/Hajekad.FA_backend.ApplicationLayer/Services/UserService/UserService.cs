using Hajekad.FA_backend.ApplicationLayer.Models;
using Hajekad.FA_backend.ApplicationLayer.Models.Activity;

namespace Hajekad.FA_backend.ApplicationLayer.Services.UserService;

public class UserService : IUserService
{
    public List<KeyValuePair<DateTime, IActivity>> ActivityHistory { get; set; } 

    public UserService()
    {
        ActivityHistory = new List<KeyValuePair<DateTime, IActivity>>();
    }

    public List<IActivity> GetAllActivities()
    {
        throw new NotImplementedException();
    }

    public IPersonBase AddActivity(IActivity NewActivity)
    {
        throw new NotImplementedException();
    }

    public IPersonBase UpdateActivity(IActivity Destination, IActivity Source)
    {
        throw new NotImplementedException();
    }

    public IPersonBase DeleteActivity(IActivity Target)
    {
        throw new NotImplementedException();
    }
}