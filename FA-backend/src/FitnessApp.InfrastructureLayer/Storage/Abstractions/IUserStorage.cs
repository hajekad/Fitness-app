using FitnessApp.DomainLayer.Models;

namespace FitnessApp.InfrastructureLayer.Storage.Abstractions;

public interface IUserStorage
{
    int CreateUser(User userModel);
}