import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  public walkList:string;

  constructor(private router:Router, private backendService:BackendApiService)
  {
    this.walkList = backendService.getWalks();
  }

  ngOnInit(): void {
  }

}
