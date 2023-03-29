import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-screen',
  templateUrl: './info-screen.component.html',
  styleUrls: ['./info-screen.component.css']
})
export class InfoScreenComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  acknowledge() {
    this.router.navigate(['login']);
  }

}
