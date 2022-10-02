import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendApiService } from '../services/backend-api.service';
import { WalkModel } from '../walk-model';
import { WalkModelList } from '../walk-model-list';
import { WalkDisplayComponent } from './walk-display/walk-display.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  public walkList:WalkModelList;
  public dates:Array<string>;
  public distances:Array<number>;

  constructor(private router:Router, private backendService:BackendApiService)
  {
    this.walkList = new WalkModelList;
    this.distances = [];
    this.dates = [];
  }

  ngOnInit()
  {
    let walkStr = this.backendService.getWalks();
    let tmp = walkStr.split('\n');

    console.log(tmp[3]);

    tmp.forEach(element => {
      if(element.length > 2)
      {
        let jsonObject: any = JSON.parse(element);
        this.distances.push(jsonObject._distance);
        this.dates.push(jsonObject._date);
      }
    });
  }

  popDistance(): number
  {
    var ret = this.distances.pop();
    return Number(ret);
  }

  popDate(): string
  {
    var ret = this.dates.pop();
    return String(ret);
  }
}
