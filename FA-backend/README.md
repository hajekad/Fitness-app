# Restful Hotel
## Application
easy data manipulation for the hotel reception when managing reservations
## Hotel guest bedrooms
Rooms can differ in sizes, each has a different per day rent fee that is added to the guests expenses:
  + family
    + 4 beds
    + 35$ / day
  + paired
    + 2 beds
    + 40$ / day
  + bussiness
    + single
    + 20$ / day

Each guestroom is further described with its:
  + floor
  + room number

## Guest
+ title
+ name
+ surname
+ birth date
+ address
+ nullable phone number
+ identification:
  + id
  + passport
  + drivers licence
  + responsible person's identification
+ conto
  + goes negative if guest owes, positive when guest overcharges the hotel credit
+ note

## Reservation
+ List of rooms to reserve
+ date range
  + check in
  + check out
+ booker (Guest)
  + for themselves
  + for someone else
+ names of other guests
+ note

## Hotel services
+ fitness
  + 2$ per person per hour
+ wellness
  + 5$ per person per hour
+ minibar
  + The Yamazaki single malt 0.08l ( 25$ )
+ lobby bar
  + tea ( 1$ )
+ restaurant
  + meal
    + pork ( 15$ )
    + beef ( 20$ )
  + drink
    + water ( 0.5$ )
    + beer ( 1$ )
 
# Future possible features
## API CALLS
+ users can login using their password and concatencated name and surname

Based on their security clearance (SC) provides the Employees with:
+ SC-1
  + update guests
  + get list of guests by their attribute
  + get any attribute of any guest
+ SC-2 (and all of the above)
  + get any sub-list of all people in the hotel
  + create guests
+ SC-3 (and all of the above)
  + delete guests
  + employ new employees
  + delete employees
  + update employees

Guest:
  + get the price of their current stay (counted 100$/day)
  + number of their room

## guest information storage
+ PostgresSQL implementation
  + uses psql to store data
+ from file implementation
  + load and unload from / into a user accessible text file
+ hardcoded testing implementation

## Stored Values
### PersonBase:
| ID  |  Name   | Surname  | SkinColour |
|-----|:-------:|:--------:|-----------:|
| 0   | Andrew  | Smoljak  |      white |
| 1   | Jeffrey | Eppstein |      black |
| 2   |   Big   | Lebowski |      olive |
| 4   |  Elton  |   John   |      black |
| 3   |   Bob   |   Ross   |      white |
| 5   |  Franc  |  Newman  |      asian |

### guest:
| PersonBase |  Check-In  | room |
|------------|:----------:|-----:|
| 0          |  3-3-2022  |    1 |
| 1          | 11-9-2021  |    4 |
| 2          | 12-12-2022 |    3 |

### employee
| PersonBase | DateOfEmployment | SecurityClearance | Wage |
|------------|:----------------:|:-----------------:|------|
| 3          |     3-3-2022     |         3         | 800  |
| 4          |    11-9-2021     |         2         | 500  |
| 5          |    12-12-2022    |         1         | 600  |
