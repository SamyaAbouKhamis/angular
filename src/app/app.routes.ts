import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';


export const routes: Routes = [
   {'path':'', component:HomeComponent},
   {'path':'about', component:AboutComponent},
   {'path':'contactus', component:ContactusComponent},
   {'path':'navbar', component:NavbarComponent}
];
