export class WalkModel
{
    public _user_id: number;
    public _distance: number;
    public _startLat: number;
    public _startLong: number;
    public _endLat: number;
    public _endLong: number;

    constructor(_user_id: number)
    {
        this._user_id = _user_id;
        this._distance = 0;
        this._startLat = 0;
        this._startLong = 0;
        this._endLat = 0;
        this._endLong = 0;
    }
}
