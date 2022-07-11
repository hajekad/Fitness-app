namespace Hajekad.FA_backend.ApplicationLayer.Models;

/**
 * Class PersonBase imitates the person entity from used database
 * Probably is bad practice for utilization
 */
public class PersonBase
{
    public string IdUser { get; set; }
    public string name { get; set; }
    public string email { get; set; }
    public string password { get; set; }
    public string birth_date { get; set; }
    public string height { get; set; }
    public string gender { get; set; }

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