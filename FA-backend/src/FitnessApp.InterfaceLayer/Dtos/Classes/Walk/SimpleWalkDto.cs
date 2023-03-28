namespace FitnessApp.InterfaceLayer.Dtos.Classes.Walk;

public class SimpleWalkDto
{
    public int _user_id { get; set; }
    //public DateTime _date { get; set; }
    public int _distance { get; set; }

    public float _startLat { get; set; }
    public float _startLong { get; set; }
    
    public float _endLat { get; set; }
    public float _endLong { get; set; }
}