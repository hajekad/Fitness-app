using AutoMapper;
using FitnessApp.DomainLayer.Models;
using FitnessApp.InterfaceLayer.Dtos.Classes.User;
using FitnessApp.InterfaceLayer.Dtos.Classes.Walk;

namespace FitnessApp.InterfaceLayer.Mapping;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        //users
        CreateMap<CreateUserDto, User>();
        
        //walks
        CreateMap<SimpleWalkDto, Walk>().ReverseMap();
        CreateMap<List<Walk>, SimpleWalkDtoList>().ForMember(dest => dest._repo, (expression => expression.MapFrom(m => m)));
    } 
}