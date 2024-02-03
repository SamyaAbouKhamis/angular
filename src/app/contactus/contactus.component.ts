import { Component } from '@angular/core';
import { OnInit,inject} from '@angular/core';
import { SubscribeService } from '../Services/subscribr.service';

@Component({
  selector: 'contactus',
  standalone: true,
  imports: [],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css',
  providers:[SubscribeService]

})
export class ContactusComponent  {

  //HOW TO PROVIDE DEPENDANCY
  constructor(private subService : SubscribeService){

  }

  OnSubscribe(){
 
 
    this.subService.OnSubscribeClicked('quaterly');
  }
 
}
