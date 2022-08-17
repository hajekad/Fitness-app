import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private backend: BackendApiService) { }

  ngOnInit(): void {
  }

  getWalks()
  {
    let id: number = 1;

    this.backend.getWalks(id);
  }

}
