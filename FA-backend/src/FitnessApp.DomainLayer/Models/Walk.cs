namespace FitnessApp.DomainLayer.Models;

public class Walk
{
    public Int32 _user_id { get; set; }
    public DateTime _date { get; set; }
    public Int32 _distance { get; set; }
    
    public Int32 _startLat { get; set; }
    public Int32 _startLong { get; set; }
    
    public Int32 _endLat { get; set; }
    public Int32 _endLong { get; set; }
}