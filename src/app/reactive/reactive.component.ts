import { Component } from '@angular/core';
import { FormControl, FormGroup  } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'reactive',
  standalone: true,
  imports:[FormsModule,CommonModule,ReactiveFormsModule ],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
  nameControl = new FormControl('');
  emailControl = new FormControl('');


   form = new FormGroup({
    name : this.nameControl,
    email : this.emailControl
  });

submitForm(){
  alert(`${this.nameControl.value} ${this.emailControl.value}` )
}
}
