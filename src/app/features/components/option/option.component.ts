import { Component, Input } from '@angular/core';
import { Option } from '../../../core/models/option';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-option',
  imports: [FormsModule],
  templateUrl: './option.component.html',
  styleUrl: './option.component.css'
})
export class OptionComponent {

  @Input()
  doption:Option;

  @Input()
  mode:string;

  go()
  {
    console.log(this.doption)
  }
}
