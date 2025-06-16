import { Component } from '@angular/core';
import { themes } from '../../../core/datatheme';
import { ThemeComponent } from "../theme/theme.component";
import { PaginationComponent } from "../../../share/components/pagination/pagination.component";
import { TestService } from '../../../share/services/test.service';

@Component({
  selector: 'app-list-theme',
  imports: [ThemeComponent, PaginationComponent],
  templateUrl: './list-theme.component.html',
  styleUrl: './list-theme.component.css'
})
export class ListThemeComponent {

   themedata=themes;
  nb:number = 0;
  abc:string;
  constructor(private service:TestService){
    
    this.abc=service.getData();
    console.log("bbbb");
  }
 

  recuperer(x:number) {
    this.nb = x;
  }
}
