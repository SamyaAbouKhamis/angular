import { Component,AfterContentInit,AfterContentChecked } from '@angular/core';

@Component({
  selector: 'after-content',
  standalone: true,
  imports: [],
  templateUrl: './after-content.component.html',
  styleUrl: './after-content.component.css'
})
export class AfterContentComponent  implements AfterContentInit, AfterContentChecked

{


  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked")
  }
}
