import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @Input()
  appColor:string;
  constructor(private ele:ElementRef,private render:Renderer2) { 

    render.setStyle(ele.nativeElement,"color",this.appColor)
    //render.addClass(ele.nativeElement, "abc")
    
  }
  @HostListener('mouseenter',['$event'])
  mouseentrer(event:Event)
  {
      this.render.setStyle(this.ele.nativeElement, "color",'blue')
  }

 @HostListener('mouseleave',['$event'])
  mousesortir(event:Event)
  {
      this.render.setStyle(this.ele.nativeElement, "color",this.appColor)
  }
}
