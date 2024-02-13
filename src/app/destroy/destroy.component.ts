import { Component , OnInit,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-destroy',
  standalone: true,
  imports: [],
  templateUrl: './destroy.component.html',
  styleUrl: './destroy.component.css'
})
export class DestroyComponent implements OnInit ,OnDestroy{



ngOnInit():void{}

ngOnDestroy() {
  localStorage.removeItem('store')
}

addstorage(){
  localStorage.setItem('store',JSON.stringify('OnDestroy'))
}
}