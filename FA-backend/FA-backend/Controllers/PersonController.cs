using Hajekad.FA_backend.ApplicationLayer;
using Hajekad.FA_backend.ApplicationLayer.Models;
using Hajekad.FA_backend.ApplicationLayer.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace HajekAd.FitnessApp.Api.Controllers;
[EnableCors("CorsApi")]
[Route("api/persons")]
[ApiController]
public class PersonController : ControllerBase
{
    private readonly IPersonService personService;
    
    public PersonController(IPersonService personService)
    {
        this.personService = personService;
        
    }


    [HttpGet("{credential} {password}")]
    public ActionResult<PersonBase> GetPersonByUser([FromRoute] string credential, [FromRoute] string password)
    {
        PersonBase person = null;
        bool email = false;
        int i = 0;
        
        for(;i < (credential.Length - 1); i++ )
            if (credential[i] == '@')
                break;
                
        if(credential[i] == '@')
            person = personService.GetPersonByEmail(credential, password);
        else
            person = personService.GetPersonByUser(credential, password);

        if (person == null)
            return BadRequest("credentials not present!");
        
        return person;
    }

    [HttpPost("{name} {email} {pass} {birth} {height} {gender}")]
    public ActionResult<PersonBase> CreateNewPerson([FromRoute] string name, [FromRoute] string email,
                                                    [FromRoute] string pass, [FromRoute] string birth,
                                                    [FromRoute] string height, [FromRoute] string gender)
    {
        var person = new PersonBase(null, name, email, pass, birth, height, gender);
        int ret = personService.Createperson(person);

        return personService.GetPersonByEmail(email, pass);
    }

    [HttpDelete("{person}")]
    public ActionResult<bool> DeletePerson([FromRoute] PersonBase person)
    {
        personService.DeletePerson(person);
        
        return true;
    }
}