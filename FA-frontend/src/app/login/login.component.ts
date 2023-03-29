import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUserDto } from '../create-user-dto';
import { BackendApiService } from '../services/backend-api.service';
import { GoogleSheetServiceService } from '../services/google-sheet-service.service';
import { GoogleAuth } from 'google-auth-library';

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

  constructor(private http: HttpClient, private router:Router, private googleSheetsService:GoogleSheetServiceService)
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

  save()
  {
    var e = <HTMLInputElement> document.getElementById('edu');
    var y = <HTMLInputElement> document.getElementById('yyyy');
    
    this.model._edu = Number(e.value);
    var str = y.value;
    var newarr = str.split("-");

    this.model._birthYear = Number(newarr[0]);

    if(!(this.model._birthYear == -1 || this.model._edu == Education.undefined || this.model._sex == Sex.undefined))
    {
      this.googleSheetsService.listUser().subscribe(response => {
        console.log(response);
      });

      this.googleSheetsService.listWalk().subscribe(response => {
        console.log(response);
      });

      // localStorage.setItem('walkList', '')
      // this.backendService.postUser(this.model);
      // localStorage.setItem('userId', '1');      
      // this.router.navigate(['track']);
    }
  }
}