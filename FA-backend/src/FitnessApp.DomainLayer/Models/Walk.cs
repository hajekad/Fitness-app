using System.Data;

namespace FitnessApp.DomainLayer.Models;

public class Walk
{
    public int _user_id { get; set; }
    public DateTime _date { get; set; }
    public int _distance { get; set; }
    
    public int _startLat { get; set; }
    public int _startLong { get; set; }
    
    public int _endLat { get; set; }
    public int _endLong { get; set; }

    public Walk()
    {
        
    }

    public Walk(int idUser, int distance, int startLat, int startLong, int endLat, int endLong)
    {
        _user_id = idUser;
        _distance = distance;
        _startLat = startLat;
        _startLong = startLong;
        _endLat = endLat;
        _endLong = endLong;
    }
}