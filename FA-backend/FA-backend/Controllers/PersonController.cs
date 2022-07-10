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


    [HttpGet("{name} {password}")]
    public ActionResult<PersonBase> GetPersonByUser([FromRoute] string name, [FromRoute] string password)
    {
        var person = personService.GetPersonByUser(name, password);

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
        if (ret < 5)
            return false;
        
        return true;
    }
}