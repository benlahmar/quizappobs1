import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
param:any;
s:any;
constructor(private route: ActivatedRoute, private service:TestService) {}

ngOnInit() {
  // Assuming 'route' is an instance of ActivatedRoute or similar
  this.route.queryParams.subscribe(params => {
    this.param = params['q'];
  });

  this.s=this.service.getData();

}
}
