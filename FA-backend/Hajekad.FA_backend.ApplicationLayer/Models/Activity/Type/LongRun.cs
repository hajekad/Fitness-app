namespace Hajekad.FA_backend.ApplicationLayer.Models.Activity.Type;

public class LongRun : IActivity
{
    public string From { get; set; }
    public string To { get; set; }
    public DateTime inTime { get; set; }
    public int Length { get; set; }
    public int HeightDiff { get; set; }
    public string PersonalRating { get; set; }
}