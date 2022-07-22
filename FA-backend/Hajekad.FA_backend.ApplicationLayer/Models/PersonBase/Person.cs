using Hajekad.FA_backend.ApplicationLayer.Models.Activity;
using Hajekad.FA_backend.ApplicationLayer.Services.UserService;

namespace Hajekad.FA_backend.ApplicationLayer.Models;

/**
 * Class PersonBase imitates the person entity from used database
 * Probably is bad practice for utilization
 */
public class PersonBase : IPersonBase
{
    public string IdUser { get; set; }
    public string name { get; set; }
    public string email { get; set; }
    public string password { get; set; }
    public string birth_date { get; set; }
    public string height { get; set; }
    public string gender { get; set; }
    
    public IUserService ActivityHistory { get; set; }

    public PersonBase(string? IdUser, string name, string email, string password, string birth_date, string height, string gender)
    {
        this.IdUser = IdUser;
        this.name = name;
        this.email = email;
        this.password = password;
        this.birth_date = birth_date;
        this.height = height;
        this.gender = gender;

        ActivityHistory = new UserService();
    }

    public PersonBase()
    {
    }
}