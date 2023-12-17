import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ColorChromeModule} from 'ngx-color/chrome'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GeneratorComponent } from './generator/generator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorChromeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
