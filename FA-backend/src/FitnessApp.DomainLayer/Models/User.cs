using FitnessApp.DomainLayer.Enums;
using FitnessApp.DomainLayer.Models.Abstractions;

namespace FitnessApp.DomainLayer.Models;

public class User
{
    public UserSex _sex { get; set; }
    public EduAttainment _edu { get; set; }
    public int _birthYear { get; set; }
    
    public bool? _athlete { get; set; }
    public bool? _smoker { get; set; }
    public string? _anamneza { get; set; }

    public void Validate()
    {
        if (_birthYear > DateTime.Now.Year)
            throw new Exception($"Birth date {_birthYear} is invalid.");
    }
}