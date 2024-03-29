import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

enum result
{
  
}

class ageCategory
{  
  public high:number;
  public low:number;

  constructor(high:number, low:number)
  {
    this.high = high;
    this.low = low;
  }
}

@Component({
  selector: 'app-after-walk',
  templateUrl: './after-walk.component.html',
  styleUrls: ['./after-walk.component.css']
})
export class AfterWalkComponent implements OnChanges {
  private readonly green:string = "Normální výsledek";  
  private readonly yellow:string = "Středně snížené hodnoty";
  private readonly red:string = "Výrazně zhoršené hodnoty";
  
  @Input() birthYear?:number;
  @Input() distance?:number;
  @Input() toShow?:boolean;

  private age?:number;
  public state?:string;

  constructor( private router:Router, private route:ActivatedRoute )
  {
  }
  
  ngOnChanges(): void {
    this.state = this.decideResults();
    this.age = (new Date()).getFullYear() - Number(this.birthYear);
    console.log("age: " + this.age);
    console.log("distance: " + this.distance);
  }

  history()
  {
    this.router.navigate(['results']);
  }

  continue()
  {
    this.toShow = false;
  }

  lowerAge(): ageCategory
  {
    if(this.age == null)
      return new ageCategory(700, 400);

    if(this.age < 20)
      return new ageCategory(700, 400);

    if(this.age < 30)
      return new ageCategory(600, 350);

    if(this.age < 40)
      return new ageCategory(600, 300);

    if(this.age < 50)
      return new ageCategory(550, 300);
    
    if(this.age < 60)
      return new ageCategory(500, 250);

    if(this.age < 70)
      return new ageCategory(450, 250);

    if(this.age < 80)
      return new ageCategory(400, 200);
    
    return new ageCategory(400, 200);
  }

  decideResults(): string
  {
    if(this.distance == null)
      return 'null';

    let ageCategory = this.lowerAge();

    if(this.distance > ageCategory.high)
      return this.green;

    if(this.distance < ageCategory.low)
      return this.red;

    return this.yellow;
  }

}
