import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CreateUserDto } from '../create-user-dto';
import { GoogleSheetServiceService } from '../services/google-sheet-service.service';

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

/**
 * Login screen component, verificates and redirects the user to main
 * @param auth authetification service
 * @param router angular router
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public model : CreateUserDto;
  private posted : boolean;

  constructor(private router:Router, private googleSheetsService:GoogleSheetServiceService)
  {
    this.posted = false;
    this.model = new CreateUserDto();
  }

  ngOnInit(){
  }

  male()
  {
    this.model._sex = Sex.male;
  }

  female()
  {
    this.model._sex = Sex.female;
  }

  async save()
  {
    var e = <HTMLInputElement> document.getElementById('edu');
    var y = <HTMLInputElement> document.getElementById('yyyy');
    
    this.model._education = Number(e.value);
    var str = y.value;
    var newarr = str.split("-");

    this.model._birthYear = Number(newarr[0]);

    if(this.model._birthYear != -1 && this.model._education != Education.undefined && this.model._sex != Sex.undefined) {
      try {
        let newId = await this.googleSheetsService.getUserMaxId();

        console.log(`Max: ${newId}`)

        localStorage.setItem('walkList', '')
        try {
          this.googleSheetsService.createUser (
                                              newId.toString(),
                                              this.model._sex.toString(),
                                              this.model._education.toString(),
                                              this.model._birthYear.toString(),
                                              this.model._athlete.toString(),
                                              this.model._smoker.toString()
                                            ).subscribe(response => {
                                              console.log(response);
                                            });
        } catch (error) {
          throw error;
        }

        localStorage.setItem('userId', `${newId}`);      
        this.router.navigate(['track']);
      } catch (error) {
        console.log("Try again when you have internet connection!");
      }
    } else {
      console.log(`sex: ${this.model._sex}`);
      console.log(`year: ${y}`);
      console.log(`edu: ${e}`);
    }
  }
}