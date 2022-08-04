using FitnessApp.ApplicationLayer.Services.Abstractions;
using FitnessApp.InterfaceLayer.Dtos.Classes.Walk;
using Microsoft.AspNetCore.Mvc;

namespace FitnessApp.Api.Controllers;

[ApiController]
[Route("api/walks")]
public class WalkController : ControllerBase
{
    private readonly ILogger<WalkController> _logger;
    private readonly IWalkService _service;

    public WalkController(ILogger<WalkController> logger, IWalkService service)
    {
        _logger = logger;
        _service = service;
    }

    [ProducesResponseType(typeof(CreatedResult), 201)]
    [ProducesResponseType(400)]
    [HttpPost]
    public IActionResult CreateWalk([FromBody] SimpleWalkDto dto)
    {
        int ret = -1;
        var tmp = dto;
        
        try
        {
            ret = _service.CreateWalk(dto);
        }
        catch (Exception e)
        {
            _logger.LogInformation(e.Message);
            return BadRequest();
        }
        
        return Created(ret.ToString(), tmp);
    }
    
    [ProducesResponseType(typeof(Int32), 200)]
    [ProducesResponseType(404)]
    [HttpGet]
    public IActionResult GetWaksRealatedTo([FromRoute] Int32 id_user)
    {
        return Ok();
    }
}