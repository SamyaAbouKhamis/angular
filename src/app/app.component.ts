import { Component , OnInit,DoCheck} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { SearchComponent } from './search/search.component';
import {Observable,of} from 'rxjs';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AdminComponent } from './admin/admin.component';
import { FamPipe } from './pipes/age.pipe';
import { ReactiveComponent } from './reactive/reactive.component';
import { MessageService } from './Services/message.service';
import { HttpClient } from '@angular/common/http';
import { HooksComponent } from './hooks/hooks.component';
import { DestroyComponent } from './destroy/destroy.component';
import { DoCheckComponent } from './do-check/do-check.component';
import { AfterContentComponent } from './after-content/after-content.component';
import { AfterviewComponent } from './afterview/afterview.component';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,PostComponent,HomeComponent,SearchComponent,CommonModule,
    RxjsComponent,AdminComponent,FamPipe,HooksComponent,DestroyComponent,DoCheckComponent,AfterContentComponent,AfterviewComponent,
  ReactiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[MessageService ]
})
export class AppComponent implements OnInit {
  title = 'Angular';

  data :any[]=[];

  message :string[]=[];
  posts :any[]=[];

 

 
constructor(private messageServices:MessageService){
  this.message= messageServices.getMessage();
}


ngOnInit(){
this.messageServices.getPosts().subscribe({
next:  (response)=>{this.posts=response},
error:(error)=>{console.error(error)}

});
}
 
  
//obervable
myObservable = new Observable((observer)=>{
    
   setTimeout(()=>{observer.next(1)},1000);
   setTimeout(()=>{observer.next(2)},2000);
   setTimeout(()=>{observer.next(3)},3000);
   setTimeout(()=>{observer.error(new Error('Somthing went wrong . please try again later '))},3000);
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

  //hooks ngonchange
child:any="sending data from parent to child";

 myFunc(val:any){
this.child = val;
 }
//ng aftercontent
 content: string='Box 1';


  Func(){
this.content="I am Box 1";
  }
//ng afterview
demo:string="Hello";

view(){
  this.demo="I am clicked";
}
}
