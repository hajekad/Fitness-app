namespace FitnessApp.InterfaceLayer.Dtos.Classes.Walk;

public class SimpleWalkDto
{
    public int _user_id { get; set; }
    public DateTime _date { get; set; }
    public int _distance { get; set; }

    public int _startLat { get; set; }
    public int _startLong { get; set; }
    
    public int _endLat { get; set; }
    public int _endLong { get; set; }
}