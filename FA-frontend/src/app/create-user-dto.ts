enum Sex{
    undefined,
    male,
    female,
}

enum Education{
    undefined,
    ZS,
    SS,
    VS,
}

export class CreateUserDto {
    public _sex: Sex;
    public _edu: Education;
    public _birthYear: number;
    public _athlete: boolean;
    public _smoker: boolean;

    constructor() {
        this._sex = Sex.undefined;
        this._edu = Education.undefined;
        this._birthYear = -1;
        this._athlete = false;
        this._smoker = false;
    }
}
