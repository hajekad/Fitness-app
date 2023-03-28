using FitnessApp.DomainLayer.Models;

namespace FitnessApp.InfrastructureLayer.Storage.Abstractions;

public interface IWalkStorage
{
    int CreateWalk(Walk walkModel);
    List<Walk> GetWalksRelatedTo(int idUser);
}