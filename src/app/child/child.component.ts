import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  
  sum: number = 0;

  @Input('number1') num1: number | undefined;
  @Input('number2') num2: number | undefined;

  ngOnInit() {
    // this.sum = this.num1 + this.num2; // this will not work, as it considers num1 and num2 as strings
    this.sum = Number(this.num1)+Number(this.num2); //Use Number.. to convert 15 to number
  }

}
