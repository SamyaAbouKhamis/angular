import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-validation',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css'
})
export class ValidationComponent {
 @ViewChild('registrationForm')
  form!: NgForm;

// genders = [
//   {id:'Check-male',value:'male' , display:'Male'},
//   {id:'Check-female',value:'female' , display:'Female'},
//   {id:'Check-other',value:'other' , display:'prefer not to say'},
// ]

OnFormSubmitted(){
 console.log(this.form);
 console.log(this.form.controls['name'].value);
 console.log(this.form.value.email);
 console.log(this.form.value.password);
}

 
}
