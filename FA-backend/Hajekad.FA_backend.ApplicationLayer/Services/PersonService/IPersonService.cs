using Hajekad.FA_backend.ApplicationLayer.Models;

namespace Hajekad.FA_backend.ApplicationLayer.Services;


public interface IPersonService
{
    PersonBase? GetPersonByUser(string username, string password);
    
    PersonBase? GetPersonByEmail(string email, string password);

    int Createperson(PersonBase person);
    
    bool DeletePerson(PersonBase person);
}