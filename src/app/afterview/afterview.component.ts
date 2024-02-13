import { Component,AfterViewInit,AfterViewChecked } from '@angular/core';

@Component({
  selector: 'afterview',
  standalone: true,
  imports: [],
  templateUrl: './afterview.component.html',
  styleUrl: './afterview.component.css'
})
export class AfterviewComponent implements AfterViewInit,AfterViewChecked {


  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
}
