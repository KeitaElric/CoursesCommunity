import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail.routing';
import { DetailComponent }   from './detail.component';

import {RatingModule} from "ng2-rating";

@NgModule({
  imports: [
    DetailRoutingModule,
    RatingModule,
    FormsModule,
    CommonModule
  ],
  exports: [],
  declarations: [DetailComponent],
  providers: [],
})
export class DetailModule { }
