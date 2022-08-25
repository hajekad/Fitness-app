using FitnessApp.ApplicationLayer.Services.Abstractions;
using FitnessApp.InterfaceLayer.Dtos.Classes.User;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace FitnessApp.Api.Controllers;

[ApiController]
[EnableCors("AllowMyOrigin")]
public class UserController : ControllerBase
{
    private readonly ILogger<UserController> _logger;
    private readonly IUserService _service;

    public UserController(ILogger<UserController> logger, IUserService service)
    {
        _logger = logger;
        _service = service;
    }

    [ProducesResponseType(typeof(CreatedResult), 201)]
    [ProducesResponseType(400)]
    [HttpPost("api/users/post")]
    public IActionResult Post([FromBody] CreateUserDto dto)
    {
        int ret = -1;
        var tmp = dto;
        
        try
        {
            ret = _service.CreateUser(dto);
        }
        catch (Exception e)
        {
            _logger.LogInformation(e.Message);
            return BadRequest();
        }
            
        return Created(ret.ToString(), dto);
    }
}