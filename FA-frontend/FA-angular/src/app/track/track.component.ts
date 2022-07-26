import { Component, NgModule, OnChanges, OnInit, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';

function countdownConfigFactory(): CountdownConfig {
  return { format: `mm:ss` };
}

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.card]': `false`,
    '[class.text-center]': `false`,
  }
})
export class TrackComponent {

  constructor( private router:Router ) { 
    this.LogoPath = 'logoBIG.png';
  }

  ngOnInit(): void {
  }

  getPercent():number{
    if(this.counter == null)
      return 100;

    return this.counter.left / 3600;
  }
  
  LogoPath: string;

  status = 'start';
  @ViewChild('countdown')
  counter!: CountdownComponent;

  onStart(src: CountdownComponent):void{
    this.counter = src;
    src.begin();
    this.counter.begin();    
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
}
