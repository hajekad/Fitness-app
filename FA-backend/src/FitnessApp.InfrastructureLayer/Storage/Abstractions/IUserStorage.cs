using FitnessApp.DomainLayer.Models;

namespace FitnessApp.InfrastructureLayer.Storage.Abstractions;

public interface IUserStorage
{
    Int32 CreateUser(User userModel);
}