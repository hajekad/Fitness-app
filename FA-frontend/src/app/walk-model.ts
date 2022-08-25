export class WalkModel
{
    private _user_id: number;
    public get user_id(): number {
        return this._user_id;
    }
    public set user_id(value: number) {
        this._user_id = value;
    }
    private _distance: number;
    public get distance(): number {
        return this._distance;
    }
    public set distance(value: number) {
        this._distance = value;
    }
    private _startLat: number;
    public get startLat(): number {
        return this._startLat;
    }
    public set startLat(value: number) {
        this._startLat = value;
    }
    private _startLong: number;
    public get startLong(): number {
        return this._startLong;
    }
    public set startLong(value: number) {
        this._startLong = value;
    }
    private _endLat: number;
    public get endLat(): number {
        return this._endLat;
    }
    public set endLat(value: number) {
        this._endLat = value;
    }
    private _endLong: number;
    public get endLong(): number {
        return this._endLong;
    }
    public set endLong(value: number) {
        this._endLong = value;
    }

    

    constructor()
    {
        this._user_id = -1;
        this._distance = 0;
        this._startLat = 0;
        this._startLong = 0;
        this._endLat = 0;
        this._endLong = 0;
    }
}
