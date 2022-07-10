using Hajekad.FA_backend.ApplicationLayer;
using Hajekad.FA_backend.ApplicationLayer.Models;
using Hajekad.FA_backend.ApplicationLayer.Services;
using Microsoft.AspNetCore.Mvc;

namespace HajekAd.FitnessApp.Api.Controllers;

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

    [HttpPost("{n} {e} {p} {b} {h} {g}")]
    public ActionResult<bool> CreateNewPerson(string n, string e, string p, string b, string h, string g)
    {
        var person = new PersonBase(null, n, e, p, b, h, g);
        int ret = personService.Createperson(person);

        //unimportant check, can be safely removed
        if (ret < 3)
            return false;
        
        return true;
    }
}