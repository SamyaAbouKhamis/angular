import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamPipe } from '../pipes/age.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'admin',
  standalone: true,
  imports: [CommonModule,FamPipe,FilterPipe,FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

filterText :any;

users:any[]=[

 {id: 1,name:'John Smith',gender:'Male',dob:new Date('1-6-1998')},
 {id: 2,name:'Sarah Smith',gender:'Female',dob:new Date('1-5-1964')},
 {id: 3,name:'Steven Smith',gender:'Male',dob:new Date('1-1-1998')},
 {id: 4,name:'Mark Smith',gender:'Male',dob:new Date('1-11-1988')},
 {id: 5,name:'John Smith',gender:'Male',dob:new Date('1-12-1977')},


];
}
