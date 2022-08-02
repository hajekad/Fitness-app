using FitnessApp.ApplicationLayer.Services.Abstractions;
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
}