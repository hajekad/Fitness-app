using FitnessApp.InterfaceLayer.Dtos.Enums;

namespace FitnessApp.InterfaceLayer.Dtos.Classes.User;

public class CreateUserDto
{
    public UserSexEnum _sex { get; set; }
    public EduAttainmentEnum _edu { get; set; }
    public int _birthYear { get; set; }
    
    public bool? _athlete { get; set; }
    public bool? _smoker { get; set; }
}