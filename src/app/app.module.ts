import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MAT_DATE_LOCALE} from "@angular/material/core";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginModule} from "./core/auth/login/login.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AmplifyService} from "aws-amplify-angular";
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";
import {PagesModule} from "./pages/pages.module";
import { HeaderHomeComponent } from './shared/header-home/header-home.component';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginModule,
    PagesModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    AmplifyService,
    MatDialogModule,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
