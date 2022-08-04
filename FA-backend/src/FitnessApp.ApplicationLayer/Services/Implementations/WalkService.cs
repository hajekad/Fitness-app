using AutoMapper;
using FitnessApp.ApplicationLayer.Services.Abstractions;
using FitnessApp.DomainLayer.Models;
using FitnessApp.InfrastructureLayer.Storage.Abstractions;
using FitnessApp.InterfaceLayer.Dtos.Classes.Walk;
using Microsoft.Extensions.Logging;

namespace FitnessApp.ApplicationLayer.Services.Implementations;

public class WalkService : IWalkService
{
    private readonly IWalkStorage _walkRepository;
    private readonly ILogger <IWalkService> _logger;
    private readonly IMapper _mapper;

    public WalkService(ILogger<IWalkService> logger, IMapper mapper, IWalkStorage walkRepository)
    {
        _logger = logger;
        _mapper = mapper;
        _walkRepository = walkRepository;
    }
    
    public int CreateWalk(SimpleWalkDto dto)
    {
        var model = _mapper.Map<Walk>(dto);
        
        int ret = _walkRepository.CreateWalk(model);
        
        _logger.LogInformation($"Walk with id {ret} was created for user {dto._user_id}.");

        return ret;
    }

    public SimpleWalkDtoList GetWalksRelatedTo(Int32 idUser)
    {
        SimpleWalkDtoList ret;
        
        try
        {
            List<Walk> models = _walkRepository.GetWalksRelatedTo(idUser);
            
            ret = _mapper.Map<SimpleWalkDtoList>(models); 
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw e;
        }

        return ret;
    }
}