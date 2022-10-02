using System.Web.Helpers;
using FitnessApp.ApplicationLayer.Services.Abstractions;
using FitnessApp.InterfaceLayer.Dtos.Classes.Walk;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace FitnessApp.Api.Controllers;

[EnableCors("AllowMyOrigin")]
[ApiController]
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
    public async Task<IActionResult> PostWalk(CreateWalkDto dto)
    {
        int ret = -1;

        var tmp = dto;
        
        Console.WriteLine(dto);        
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
    public async Task<IActionResult> GetWalks(int idUser)
    {
        _logger.LogInformation("connected");
        
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