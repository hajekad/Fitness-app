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

export interface CreateUserInt {
    _sex: Sex;
    _edu: Education;
    _birthYear: number;
    _athlete: boolean;
    _smoker: boolean;
}
