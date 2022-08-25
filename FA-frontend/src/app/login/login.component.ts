import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  public sex : Sex;
  public year : number;
  public education : Education;

  constructor(private http: HttpClient, private router:Router)
  {
    this.sex = Sex.undefined;
    this.year = -1;
    this.education = Education.undefined;
  }

  ngOnInit(): void {
  }

  male()
  {
    this.sex = Sex.male;
  }

  female()
  {
    this.sex = Sex.female;
  }

  save()
  {
    var e = (<HTMLInputElement>document.getElementById('edu'));
    this.education = Number(e.value);

    var y = (<HTMLInputElement>document.getElementById('yyyy'));
    var str = y.value;
    var newarr = str.split("-");

    this.year = Number(newarr[0]);

    console.log("Save:\n{\tyear: " + this.year + "\n\teducation: " + this.education + "\n\tsex:" + this.sex + "\n}")

    if(!(this.year == -1 || this.education == Education.undefined || this.sex == Sex.undefined))
    {
      const wait = this.http.post('../assets/userinfo.json', JSON.stringify(this));
      
      this.router.navigate(['track']);
    }
  }
}