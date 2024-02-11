import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TemlateComponent} from '../../temlate/temlate.component'



const routes: Routes = [{
  path:'',
  component:TemlateComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule {

 }

