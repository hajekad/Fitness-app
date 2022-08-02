using FitnessApp.InterfaceLayer.Dtos.Classes.User;

namespace FitnessApp.ApplicationLayer.Services.Abstractions;

public interface IUserService
{
    Guid? CreateUser(CreateUserDto dto);
}