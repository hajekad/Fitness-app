namespace Hajekad.FA_backend.ApplicationLayer.Models;

/**
 * Class PersonBase imitates the person entity from used database
 * Probably is bad practice for utilization
 */
public class PersonBase
{
    public string Name;
    public string SkinColour;
    public string Surname;

    public PersonBase(string _n, string _s, string _c)
    {
        Name = _n;
        Surname = _s;
        SkinColour = _c;
    }

    public PersonBase()
    {
    }
}