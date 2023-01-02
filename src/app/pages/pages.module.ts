import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeMobileComponent } from './home/home-mobile/home-mobile.component';
import {RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    HomeComponent,
    HomeMobileComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    MatIconModule,
    SharedModule
  ]
})
export class PagesModule { }
