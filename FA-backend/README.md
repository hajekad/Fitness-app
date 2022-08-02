# Fitness App backend
## Application
### User manipulation
+ add new user bound to app by GUID
### Walk manipulation
+ add new walk bound to user by user id
+ delete walk from database
+ get all walks with a common user id
+ get walks where age of users is in range date1 - date 2
## Objects
### Walk
    guid: id
    User: user
    date: date fo walk
    number: distance
    Coordinates: start
    Coordinates: end
### User
#### non-nullable:
    guid: id
    enum: sex: Male / Female
    date: birth date: YYYY-MM-DD
    enum: educational attainment: ZS, SS, VS 
#### nullable:
    bool: athlete
    bool: smoker
    guid: anamneza
### Coordinates
    number: latitude
    number: longitude