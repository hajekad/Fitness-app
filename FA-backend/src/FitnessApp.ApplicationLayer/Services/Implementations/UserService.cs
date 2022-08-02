using AutoMapper;
using FitnessApp.ApplicationLayer.Services.Abstractions;
using FitnessApp.DomainLayer.Models;
using FitnessApp.InfrastructureLayer.Storage.Abstractions;
using FitnessApp.InterfaceLayer.Dtos.Classes.User;
using Microsoft.Extensions.Logging;

namespace FitnessApp.ApplicationLayer.Services.Implementations;

public class UserService : IUserService
{
    private readonly IUserStorage _userRepository;
    private readonly ILogger <IUserService> _logger;
    private readonly IMapper _mapper;

    public UserService(ILogger<IUserService> logger, IMapper mapper)
    {
        _logger = logger;
        _mapper = mapper;
    }
    
    public Guid? CreateUser(CreateUserDto dto)
    {
        var model = _mapper.Map<User>(dto);
        model._id = Guid.NewGuid();

        try
        {
            model.Validate();
        }
        catch (Exception e)
        {
            _logger.LogInformation($"{e.Message}");
            throw e;
        }

        _userRepository.CreateUser(model);
        _logger.LogInformation($"User with number {model._id} was created.");
        
        return model._id;
    }
}