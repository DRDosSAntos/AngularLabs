import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ContactNamePipe} from './pipes/contact-name.pipe';
import { ScopetestComponent } from './scopetest/scopetest.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactNamePipe,
    ScopetestComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
