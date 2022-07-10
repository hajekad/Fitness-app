using Hajekad.FA_backend.ApplicationLayer.Models;

namespace Hajekad.FA_backend.ApplicationLayer.Services;


public interface IPersonService
{
    PersonBase GetPersonByUser(string username, string password);
    
    List<PersonBase> GetPersons();
    
    int Createperson(PersonBase person);
    
    bool DeletePerson(int id);
}