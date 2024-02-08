import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';

import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemlateComponent } from './temlate/temlate.component';
import { ValidationComponent } from './validation/validation.component';


export const routes: Routes = [
   {'path':'', component:HomeComponent},
   {'path':'admin', component:AdminComponent},
   {'path':'contactus', component:ContactusComponent},
   {'path':'reactive', component:ReactiveComponent},
   {'path':'template', component:TemlateComponent},
   {'path':'validation', component:ValidationComponent},
   {'path':'navbar', component:NavbarComponent}
   
];
