import { Component } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/state/appstate';
import { selectorallowreviewvalue, selectorcountervalue } from '../../../core/state/selector';

@Component({
  selector: 'app-barnav',
  imports: [CommonModule],
  templateUrl: './barnav.component.html',
  styleUrl: './barnav.component.css'
})
export class BarnavComponent {
vv:number;
ar:boolean;
  constructor(public shared:SharedDataService,private store:Store<{counter:AppState}>){
    store.select(selectorcountervalue).subscribe(x=>{
      this.vv=x
    })
      store.select(selectorallowreviewvalue).subscribe(x=>{
      this.ar=x;
        })
  }
  change()
  {
    this.shared.updateMessage("un autre changement")
  }
}
