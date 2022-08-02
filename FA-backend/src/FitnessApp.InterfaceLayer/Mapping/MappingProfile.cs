using AutoMapper;
using FitnessApp.DomainLayer.Models;
using FitnessApp.InterfaceLayer.Dtos.Classes.User;

namespace FitnessApp.InterfaceLayer.Mapping;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<CreateUserDto, User>();
    } 
}