import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-custom',
  templateUrl: './navbar-custom.component.html',
  styleUrls: ['./navbar-custom.component.css']
})
export class NavbarCustomComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  home(){
    this.router.navigate(['track']);
  }

  results()
  {
    this.router.navigate(['results']);
  }
}
