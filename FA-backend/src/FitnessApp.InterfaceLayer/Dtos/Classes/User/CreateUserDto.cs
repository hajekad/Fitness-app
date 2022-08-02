using FitnessApp.InterfaceLayer.Dtos.Enums;

namespace FitnessApp.InterfaceLayer.Dtos.Classes.User;

public class CreateUserDto
{
    public UserSexEnum _sex { get; set; }
    public EduAttainmentEnum _edu { get; set; }
    public DateTime _birth { get; set; }
    
    public bool? _athlete { get; set; }
    public bool? _smoker { get; set; }
}