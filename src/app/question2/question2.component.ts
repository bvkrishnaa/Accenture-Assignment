import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {
  private unique=['hello world','hello world',"krishna"];
  private final=[];
  constructor() { 
    this.arryElementsCount();
  }
  
  ngOnInit() {
  }
  
  arryElementsCount(){
    for(let i in this.unique){
       var ll = this.unique[i].split('');
    
      for(let i=0;i<ll.length;i++){
      if(this.final[ll[i]]==undefined){
      this.final[ll[i]]=1;
      }
      else{
      this.final[ll[i]]++;
      }
      }
  }
  console.log(this.final);
}
}
