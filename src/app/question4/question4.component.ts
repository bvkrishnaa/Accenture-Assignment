import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css']
})
export class Question4Component implements OnInit {
  private textArray: [];
  private mode:boolean=true;
  constructor() {}

  ngOnInit() {
  }
  textChange(text){
    this.textArray=[];
    if(text){
    this.textArray=text.split(',');
    for(let i=0;i<this.textArray.length;i++){
      this.resData='';
      var res=this.getSplitreverseData(this.textArray[i]);
      console.log(res);
    }
  }
  }
  resData:string='';
  getSplitreverseData(splittext){
    for(var i=splittext.length-1;i>=0;i--){
      this.resData+=splittext[i];
    }
    return this.resData;
  }
  res:string='' ;
  textChange1(text){
    this.res='';
    if(text){
      for(let i=text.length-1;i>=0;i--){
        this.res +=text[i];
      }
      console.log(this.res);
    }
  }
}
