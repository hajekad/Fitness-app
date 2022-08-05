using FitnessApp.InterfaceLayer.Dtos.Classes.Walk;

namespace FitnessApp.ApplicationLayer.Services.Abstractions;

public interface IWalkService
{
    Int32 CreateWalk(SimpleWalkDto dto);

    SimpleWalkDtoList GetWalksRelatedTo(int idUser);
}