import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent }   from './home.component';

import {RatingModule} from "ng2-rating";

@NgModule({
  imports: [
    HomeRoutingModule,
    RatingModule,
    FormsModule,
    CommonModule
  ],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule { }
