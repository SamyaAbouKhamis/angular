import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temlate',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './temlate.component.html',
  styleUrl: './temlate.component.css'
})
export class TemlateComponent {
  name : any;
  email:any;

  submiForm(){
  alert(`${this.name} ${this.email}`)
  }

}
