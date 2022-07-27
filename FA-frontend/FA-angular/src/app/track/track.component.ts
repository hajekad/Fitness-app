import { Component, NgModule, OnChanges, OnInit, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { LocationService } from '../services/location.service';

function countdownConfigFactory(): CountdownConfig {
  return { format: `mm:ss` };
}

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  changeDetection: ChangeDetectionStrategy.Default,

  host: {
    '[class.card]': `false`,
    '[class.text-center]': `false`,
  }
})
export class TrackComponent implements AfterViewInit{  
  // loading circle variables
  public outerStroke:string = "#FF0000";
  public outerStrokeGradientStop:string = "#000000";
  public innerStroke:string = "#FFFFFF";
  public tit:string = '';

  public currDist:number;
  public percentLeft:number;
  
  private lat:number;
  private long:number;
  private activator:number;

  status = 'start';
  @ViewChild('countdown')
  counter!: CountdownComponent;

  constructor( private router:Router, private locationService:LocationService ) { 
    this.percentLeft = 100;
    this.activator = 0;
    this.lat = 0;
    this.long = 0;
    this.currDist = 0;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const inter = setInterval(()=>{
      this.percentLeft = this.getPercent();

      if(this.activator % 5 == 0)
      {
        this.activator = 0;
        this.locationService.getPosition().then(pos=>
        {
           console.log(`Positon: ${pos.lng} ${pos.lat}`);
           this.currDist += this.getDistance(pos.lng, pos.lat);
        });
      }
      
      this.activator++;

      if(this.percentLeft == 0)
      {
        console.log(`Distance traveled: ${this.currDist}`);
        clearInterval(inter);
      }
    }, 1000)

  }

  getPercent():number{
    if(this.counter == null)
      return 100;

    return Math.floor(this.counter.left / 3600);
  }

  getDistance(long:number, lat:number):number
  {
    if(this.lat === 0 && this.long === 0)
    {
      this.lat = lat;
      this.long = long;

      return 0;
    }

    const R = 6371e3; // metres
    const φ1 = this.lat * Math.PI/180; // φ, λ in radians
    const φ2 = lat * Math.PI/180;
    const Δφ = (lat-this.lat) * Math.PI/180;
    const Δλ = (long-this.long) * Math.PI/180;
      
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    this.lat = lat;
    this.long = long;
      
    return R * c; // in metres
  }

  onStart(src: CountdownComponent):void{
    this.counter = src;
    src.begin();
    
  }

  resetTimer(){
    this.counter.restart();
  }

  onClick():void{
    this.router.navigate(['main']);
  }
}
