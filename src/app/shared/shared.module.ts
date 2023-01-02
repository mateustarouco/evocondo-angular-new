import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderHomeComponent} from "./header-home/header-home.component";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    HeaderHomeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    HeaderHomeComponent
  ]
})
export class SharedModule { }
