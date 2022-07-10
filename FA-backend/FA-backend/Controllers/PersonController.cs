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


    [HttpGet("{id}")]
    public ActionResult<string> GetPersonById([FromRoute] int id)
    {
        var person = personService.GetPersonById(id);

        if (person == null)
            return BadRequest("id not present!");
        
        return $"{person.Name} {person.Surname} {person.SkinColour}";
    }

    [HttpPost("{n} {s} {c}")]
    public ActionResult<bool> CreateNewPerson(string n, string s, string c)
    {
        bool ret = personService.Createperson(new PersonBase(n,s,c));
        return ret;
    }
}