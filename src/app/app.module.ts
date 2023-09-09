import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { HttpClientModule } from '@angular/common/http';
import {NewsapiService} from './service/newsapi.service';
import { TechComponent } from './tech/tech.component';
import { BussinessComponent } from './bussiness/bussiness.component';
import { DomesticComponent } from './domestic/domestic.component';
@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent,
    TechComponent,
    BussinessComponent,
    DomesticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
