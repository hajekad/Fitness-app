using FitnessApp.DomainLayer.Enums;
using FitnessApp.DomainLayer.Models.Abstractions;

namespace FitnessApp.DomainLayer.Models;

public class User : BaseIdModel
{
    public UserSex _sex { get; set; }
    public EduAttainment _edu { get; set; }
    public DateTime _birth { get; set; }
    
    public bool? _athlete { get; set; }
    public bool? _smoker { get; set; }
    public string? _anamneza { get; set; }

    public void Validate()
    {
        if (_birth > DateTime.Now)
            throw new Exception($"Birth date {_birth.ToString()} is invalid.");
    }
}