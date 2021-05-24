import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {ContactNamePipe} from './pipes/contact-name.pipe';
import { ScopetestComponent } from './scopetest/scopetest.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContactNamePipe,
    ScopetestComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
