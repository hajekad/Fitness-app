using FitnessApp.ApplicationLayer.Services.Abstractions;
using FitnessApp.InterfaceLayer.Dtos.Classes.Walk;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace FitnessApp.Api.Controllers;

[ApiController]
[EnableCors("AllowMyOrigin")]
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
    [HttpPost("api/walks/post")]
    public IActionResult Post([FromBody] CreateWalkDto dto)
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
    
    [ProducesResponseType(200)]
    [ProducesResponseType(404)]
    [HttpGet("api/walks/get/{idUser}")]
    public IActionResult Get(int idUser)
    {
        Console.WriteLine("i ve been summoned");
        SimpleWalkDtoList ret;
        
        try
        {
            ret = _service.GetWalksRelatedTo(idUser);
        }
        catch (Exception e)
        {
            return NotFound(e.Message);
        }
        
        return Ok(ret);
    }
}