import { Component,DoCheck } from '@angular/core';

@Component({
  selector: 'do-check',
  standalone: true,
  imports: [],
  templateUrl: './do-check.component.html',
  styleUrl: './do-check.component.css'
})
export class DoCheckComponent implements DoCheck {

arry:any=[10];
myFun(){
  this.arry.push(12);
  console.log(this.arry);
}


  ngDoCheck() {
   console.log("ngDoCheck")
  }
}
