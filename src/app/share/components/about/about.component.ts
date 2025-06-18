import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../../services/test.service';
import { Store } from '@ngrx/store';
import { decrementer, incrementer, setcounter } from '../../../core/state/actions';
import { selectorallowreviewvalue, selectorcountervalue } from '../../../core/state/selector';
import { AppState } from '../../../core/state/appstate';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
param:any;
s:any;
counter:number=1
ar:boolean
constructor(private store:Store<{counter:AppState}>, private route: ActivatedRoute, private service:TestService) {

  store.select(selectorcountervalue).subscribe(x=>{
this.counter=x;
  })

   
    
    


}

ngOnInit() {
  // Assuming 'route' is an instance of ActivatedRoute or similar
  this.route.queryParams.subscribe(params => {
    this.param = params['q'];
  });

  this.s=this.service.getData();

}

incr()
{
  console.log('hhhh')
  this.store.dispatch(()=>incrementer)
}
decr()
{
  this.store.dispatch(()=>decrementer)
}
set()
{
  this.store.dispatch(()=>setcounter({value:4}))
}
}
