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

    public Walk(IDataRecord src)
    {
        _user_id = Int32.Parse(src.GetValue(_user_id).ToString());
        
        //_date = new DateTime(src.GetValue(_user_id).ToString());
        
        _distance = Int32.Parse(src.GetValue(_distance).ToString());
        
        _startLat = Int32.Parse(src.GetValue(_startLat).ToString());
        _startLong = Int32.Parse(src.GetValue(_startLong).ToString());
        
        _endLat = Int32.Parse(src.GetValue(_endLat).ToString());
        _endLong = Int32.Parse(src.GetValue(_endLong).ToString());
    }
}