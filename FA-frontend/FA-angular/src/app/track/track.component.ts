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

  constructor( private router:Router, private locationService:LocationService ) { 
    this.percentLeft = 100;
    this.activator = 0;
  }

  ngOnInit(): void {
  }

  public percentLeft:number;
  private activator:number;

  ngAfterViewInit(){
    const inter = setInterval(()=>{
      this.percentLeft = this.getPercent();

      if(this.activator % 5 == 0)
      {
        this.activator = 0;
        this.locationService.getPosition().then(pos=>
        {
           console.log(`Positon: ${pos.lng} ${pos.lat}`);
        });
      }
      
      this.activator++;

      if(this.percentLeft == 0)
        clearInterval(inter);
    }, 1000)

  }

  getPercent():number{
    if(this.counter == null)
      return 100;

    return Math.floor(this.counter.left / 3600);
  }
  
  // loading circle variables
  public outerStroke:string = "#FF0000";
  public outerStrokeGradientStop:string = "#000000";
  public innerStroke:string = "#FFFFFF";
  public tit:string = '';

  status = 'start';
  @ViewChild('countdown')
  counter!: CountdownComponent;

  onStart(src: CountdownComponent):void{
    this.counter = src;
    src.begin();
    
  }

  resetTimer(){
    this.counter.restart();
  }

  finishTest() {
    console.log("count down", this.counter);
    this.status = 'finished';
    this.counter.restart();
  }

  onClick():void{
    this.router.navigate(['main']);
  }

  ngOnChanges(changes: SimpleChanges) {
    var x = document.getElementById("percent");

    if(x != null)
      x.innerHTML = ("{{this.getPercent}}");
  }
}
