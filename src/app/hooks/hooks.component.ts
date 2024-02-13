import { Component , Input,OnInit,SimpleChange,OnChanges} from '@angular/core';

@Component({
  selector: 'hooks',
  standalone: true,
  imports: [],
  templateUrl: './hooks.component.html',
  styleUrl: './hooks.component.css'
})
export class HooksComponent implements OnInit{



  constructor(){

  }


  @Input() MyInput:any;


  ngOnInit(): void {
    console.log("I am ngOnInit");
     }

  ngOnChanges(changes:SimpleChange){
console.log(changes);
  }

 
 
}
