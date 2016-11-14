import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RailInfoModule } from './rail-info/rail-info.module';

@NgModule({
  imports:      [ BrowserModule, RailInfoModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
