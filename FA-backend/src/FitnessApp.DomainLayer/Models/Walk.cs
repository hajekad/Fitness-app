using System.Data;

namespace FitnessApp.DomainLayer.Models;

public class Walk
{
    public int _user_id { get; set; }
    public DateTime _date { get; set; }
    public int _distance { get; set; }
    
    public float _startLat { get; set; }
    public float _startLong { get; set; }
    
    public float _endLat { get; set; }
    public float _endLong { get; set; }

    public Walk()
    {
        
    }

    public Walk(int idUser, int distance, float startLat, float startLong, float endLat, float endLong)
    {
        _user_id = idUser;
        _distance = distance;
        _startLat = startLat;
        _startLong = startLong;
        _endLat = endLat;
        _endLong = endLong;
    }

    public Walk print()
    {
        Console.WriteLine($"User {_user_id}\n{{\n\t_distance: {_distance}\n\tstartLat: {_startLat}\n\tstartLong: {_startLong}\n\tendLat: {_endLat}\n\tendLong: {_endLong}\n}}");

        return this;
    }
}