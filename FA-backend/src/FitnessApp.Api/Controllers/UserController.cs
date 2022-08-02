using FitnessApp.ApplicationLayer.Services.Abstractions;
using FitnessApp.InterfaceLayer.Dtos.Classes.User;
using Microsoft.AspNetCore.Mvc;

namespace FitnessApp.Api.Controllers;

[ApiController]
[Route("api/users")]
public class UserController : ControllerBase
{
    private readonly ILogger<UserController> _logger;
    private readonly IUserService _service;

    public UserController(ILogger<UserController> logger, IUserService service)
    {
        _logger = logger;
        _service = service;
    }

    [ProducesResponseType(typeof(Guid), 200)]
    [ProducesResponseType(400)]
    [HttpPost]
    public ActionResult<Guid> CreateUser([FromBody] CreateUserDto dto)
    {
        Guid? ret = null;
        try
        {
            ret = _service.CreateUser(dto);
        }
        catch (Exception e)
        {
            _logger.LogInformation(e.Message);
            return BadRequest();
        }
            
        return Ok(ret);
    }
}