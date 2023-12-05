import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavigationBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
