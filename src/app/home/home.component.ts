import { HttpClient } from '@angular/common/http';
import { Component ,OnInit,inject} from '@angular/core';
import { SubscribeService } from '../Services/subscribr.service';

@Component({
  selector: 'home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[SubscribeService]
})
export class HomeComponent implements OnInit  {
   

  //HOW TO PROVIDE DEPENDANCY
  constructor(private subService : SubscribeService){

  }

  http= inject(HttpClient);

  posts: any=[]; 

ngOnInit(): void{
this.fetchPosts();
}
fetchPosts(){
  this.http.get('https://jsonplaceholder.typicode.com/posts')
  .subscribe((posts:any)=>{
    console.log(posts);
  })
}
OnSubscribe(){
 
  
  this.subService.OnSubscribeClicked('yearly');
}

}
