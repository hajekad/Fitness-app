using Hajekad.FA_backend.ApplicationLayer.Models;

namespace Hajekad.FA_backend.ApplicationLayer.Services;


public interface IPersonService
{
    PersonBase GetPersonById(int id);
    
    List<PersonBase> GetPersons();
    
    bool Createperson(PersonBase person);
    
    bool DeletePerson(int id);
}