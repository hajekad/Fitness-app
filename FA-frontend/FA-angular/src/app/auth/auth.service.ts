// import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

/**
 * Authentification service, handles logging in and out and controls the cookie service for the purposes of keeping the user logged in
 * @param cookies cookie service, which handles all cookies and local storage
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor( private cookies:CookieService  ){}

  /**
   * Confirms the presence of a keepLogged cookie
   * @returns true if the user is logged in, false otherwise
   */
  isLoggedIn():boolean{
    // TODO once i have API access
    // for now just checks for the cookie but returns true either way

    if( this.cookies.get('keepLogged') == 'true' ){
      this.cookies.delete('keepLogged');
      return true;
    }
    else{
      return true;
    }
  }

  /**
   * Logs the user in and if keepLogged is true also creates a cookie which keeps the user logged in later
   * @param keepLogged bool from the log in form checkbox
   * @returns true on success, false otherwise
   */
  logIn( keepLogged:boolean ):boolean{
    // TODO once i have API access

    if( keepLogged ){
      this.cookies.set( 'keepLogged', 'true' );
    }

    return true;
  }

  /**
   * removes the keepLogged cookie
   */
  logOut():void{
    this.cookies.delete('keepLogged');
  }

}