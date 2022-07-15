# 5 minut pro zdravi

## Main features:

- running / jogging app
- distance ran (if possible use GPS else relies on user input)
- time of each run
- calories burnt
- each user can access their database with records of each run history

## Realization:
### Data structures;
#### User:
| ID_USER | Name |                Email |     Password | BirthDate | Height | Gender | ActivityHistory  |
|:--------|:----:|---------------------:|-------------:|:----------|:------:|-------:|:----------------:|
 | 1| Jeffrey|    epstein@gmail.com |   iLoveLivin | 20-1-1953 |  190   |   male | 1|
|2|Andrew| bmwEnjoyer@gmail.com | AndrewIsAGod |1-1-1993|150|betaCuck|2|

Activity history will be somethin like List<IActivity>


#### Activity:
    run:
| From   | To  | inTime(minutes) | Length(km) | HeightDiff |              PersonalRating              |
|:-------|:---:|----------------:|-----------:|:----------:|:----------------------------------------:|
| Bed    |Fridge|8|0|10| Fucking loved the feel of accomplishment |
| Seoul |HoChiMingh|65423|700|0|    rice in Seoul > rice in HoChiMinh     |
    liftin:
~TBA~