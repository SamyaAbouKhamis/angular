import { Component } from '@angular/core';

@Component({
  selector: 'search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchText: string = "ggg";

  updateSearchText(event : any){
    this.searchText = event.target.value;
  }
}
