import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';

import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { AdminComponent } from './admin/admin.component';


export const routes: Routes = [
   {'path':'', component:HomeComponent},
   {'path':'admin', component:AdminComponent},
   {'path':'contactus', component:ContactusComponent},
   {'path':'navbar', component:NavbarComponent}
   
];
