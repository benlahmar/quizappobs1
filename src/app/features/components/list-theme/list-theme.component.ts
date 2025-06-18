import { Component, OnInit } from '@angular/core';
import { themes } from '../../../core/datatheme';
import { ThemeComponent } from "../theme/theme.component";
import { PaginationComponent } from "../../../share/components/pagination/pagination.component";
import { TestService } from '../../../share/services/test.service';
import { SharedDataService } from '../../../share/services/shared-data.service';
import {  CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-theme',
  imports: [ThemeComponent, PaginationComponent, CommonModule],
  templateUrl: './list-theme.component.html',
  styleUrl: './list-theme.component.css'
})
export class ListThemeComponent implements  OnInit{

   themedata=themes;
  nb:number = 0;
  abc:string;
  v:string;
  constructor(private service:TestService, public shared:SharedDataService){
    
    this.abc=service.getData();
    console.log("bbbb");
  }
  ngOnInit(): void {
    
    this.v=this.shared.getcurrentMessage();
  }
 

  recuperer(x:number) {
    this.nb = x;
  }
}
