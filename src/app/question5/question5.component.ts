import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.css']
})
export class Question5Component implements OnInit {
   private names=['India','pk','uk','pk','usa'];
   private output:string='';
  constructor() {
    this.getUniqueArray(this.names);
  }
  
  getUniqueArray(data){
    let x=(data)=>data.filter((v,i)=>data.indexOf(v)===i);
    this.output=x(data);
  }

  ngOnInit() {
  } 
}
