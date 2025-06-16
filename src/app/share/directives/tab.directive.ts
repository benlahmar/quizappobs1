import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTab]'
})
export class TabDirective {

  @Input()
  cols:number;
  @Input()
  rows:number;
  constructor(private ele:ElementRef, private rendu:Renderer2) {

    console.log("directive tab "+this.rows+" ----- "+this.cols);
   
   }

  ngOnInit(): void {
  console.log("in ngonInit directive tab "+this.rows+" ----- "+this.cols);
  
 let t=this.rendu.createElement('table');
    this.rendu.setStyle(t,'border','1px solid black');
    this.rendu.setStyle(t, 'width', '100%');
    this.rendu.setStyle(t,'backgroundColor','lightgray');
    for(let i=0;i<this.rows;i++){
      let tr=this.rendu.createElement('tr');
      for(let j=0;j<this.cols;j++){
        let td=this.rendu.createElement('td');
        let input=this.rendu.createElement('input');
        input.type='button';
        input.value=`${i+1}-${j+1}`;
        this.rendu.setAttribute(input,'class','btn btn-primary');
        this.rendu.appendChild(td,input);
        this.rendu.appendChild(tr,td);
      }
      this.rendu.appendChild(t,tr);
    }

    this.rendu.appendChild(this.ele.nativeElement,t);
}
}