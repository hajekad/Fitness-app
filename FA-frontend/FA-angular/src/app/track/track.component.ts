import { Component, NgModule, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountdownConfig } from 'ngx-countdown';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  constructor( private router:Router ) { 
    this.navText = 'Piss is stored in balls';
    this.random = ['1','2','no'];
  }

  ngOnInit(): void {
  }
  navText:string;
  random:string[];

  onClick():void{
    this.router.navigate(['main']);
  }
}
