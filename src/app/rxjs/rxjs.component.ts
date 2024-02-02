import { Component } from '@angular/core';
import {Observable,of,from} from 'rxjs';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'rxjs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent {

  data :any[]=[];


  arry1 = [6,7,8,9,10];
arry2 = ['A','B','C','D'];

myObservable = of(this.arry1 , this.arry2 , 20 , 30 ,'hello')


// promiseData = new Promise((resolve,reject)=>{
//   resolve([20,30,40,50])
// })


//myObservable = from(this.arry1 );

GetAsyncData(){
 this.myObservable.subscribe({
  next:(val:any)=>{
    this.data.push(val);
    console.log(val);
  },
 error(err){
  alert(err.message);
 },
 complete(){
  alert('All the data is streamed')
 }
 })
}

}
