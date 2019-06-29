import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component implements OnInit {
  private keys = [];
  private object1 = { a: 5, b: { c: { d: 10 } } } ;
  private textdata:string='';
  
  constructor() { 
    this.check(this.object1);
    this.textdata="[" + this.keys+"]";
  }

  check(object1) {
    for (let i in object1) {
      if (typeof (object1[i]) === 'object') {
        this.keys.push(i);
        this.check(object1[i])
      }
      else {
        this.keys.push(i);
      }
    }
  }
  ngOnInit() {
  }
}
