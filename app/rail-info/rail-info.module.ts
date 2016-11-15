import { NgModule } from '@angular/core';
import { RailInfoComponent } from './rail-info.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
  exports: [ RailInfoComponent ],
  declarations: [ RailInfoComponent ]
})
export class RailInfoModule { }
