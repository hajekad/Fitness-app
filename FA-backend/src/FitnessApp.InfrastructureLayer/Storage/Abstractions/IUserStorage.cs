using FitnessApp.DomainLayer.Models;

namespace FitnessApp.InfrastructureLayer.Storage.Abstractions;

public interface IUserStorage
{
    void CreateUser(User userModel);
}