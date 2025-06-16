import { Component, OnInit } from '@angular/core';
import { ColorDirective } from '../../directives/color.directive';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-clock',
  imports: [DatePipe, ColorDirective],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent implements OnInit {

    date:Date

  ngOnInit(): void {
    setInterval(() => {
       this.date=new Date();
    }, 1000);
  }


}
