import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  p:number=0;
  @Output()
  notif:EventEmitter<any>=new EventEmitter<any>()

  @Input()
  total:number;
  //ajouter nb element by page
  @Input()
  elebypage:number

  @Input()
  backdisplay:boolean;

  send(x:any)
  {
    this.p=x;
    this.notif.emit(this.p)
  }
}
