import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DetailModule } from './detail/detail.module';

import { ListRoutingModule } from './dev.routing';
import { ListComponent }   from './dev.component';

import {RatingModule} from "ng2-rating";

@NgModule({
  imports: [
    ListRoutingModule,
    RatingModule,
    FormsModule,
    CommonModule,
    DetailModule,
  ],
  exports: [],
  declarations: [ListComponent],
  providers: [],
})
export class DevModule { }
