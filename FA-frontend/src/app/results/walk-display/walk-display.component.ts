import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-walk-display',
  templateUrl: './walk-display.component.html',
  styleUrls: ['./walk-display.component.css']
})
export class WalkDisplayComponent implements OnInit {

  @Input() distance?: number;
  @Input() date?: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
