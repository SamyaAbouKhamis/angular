import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { SearchComponent } from './search/search.component';
import {Observable,of} from 'rxjs';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs/rxjs.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,PostComponent,HomeComponent,SearchComponent,CommonModule,RxjsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';

  data :any[]=[];




 
  
//obervable
  myObservable = new Observable((observer)=>{
    
   setTimeout(()=>{observer.next(1)},1000);
   setTimeout(()=>{observer.next(2)},2000);
   setTimeout(()=>{observer.next(3)},3000);
   //setTimeout(()=>{observer.error(new Error('Somthing went wrong . please try again later '))},3000);
   setTimeout(()=>{observer.next(4)},4000);
   setTimeout(()=>{observer.next(5)},5000);
   setTimeout(()=>{observer.complete()},6000);
  });

  //observer
  GetAsyncData(){
    this.myObservable.subscribe((val : any)=>{
      this.data.push(val);
    },
    (err)=>{
      alert(err.message)
    },
    ()=>{
      alert('All the data is streamed')
    }
    );
  }
}
