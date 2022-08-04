import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor( private auth: AuthService, private router:Router) {}


  keepLogged:boolean=false;

  ngOnInit(): void {
  }

  /**
   * Checks whether the user may log in and redirects if yes
   * @param logInForm NgForm sent by angular from html
   */
  onSubmit(logInForm : NgForm){
    
    if( this.auth.logIn( this.keepLogged ) ){
      this.router.navigate(['main']) 
    }
  }
}