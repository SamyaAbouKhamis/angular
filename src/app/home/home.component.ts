import { HttpClient } from '@angular/common/http';
import { Component ,OnInit,inject} from '@angular/core';

@Component({
  selector: 'home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {
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
}
