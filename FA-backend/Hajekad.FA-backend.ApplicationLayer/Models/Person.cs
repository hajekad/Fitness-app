namespace Hajekad.FA_backend.ApplicationLayer.Models;

/**
 * Class PersonBase imitates the person entity from used database
 * Probably is bad practice for utilization
 */
public class PersonBase
{
    public string IdUser;
    public string name;
    public string email;
    public string password;
    public string birth_date;
    public string height;
    public string gender;

    public PersonBase(string? id, string na, string em, string pass, string birth, string height, string gender)
    {
        IdUser = id;
        name = na;
        email = em;
        password = pass;
        birth_date = birth;
        this.height = height;
        this.gender = gender;
    }

    public PersonBase()
    {
    }
}