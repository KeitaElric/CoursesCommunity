import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail.routing';
import { DetailComponent }   from './detail.component';

import { ItemModule } from './item/item.module';

import {RatingModule} from "ng2-rating";

@NgModule({
  imports: [
    DetailRoutingModule,
    RatingModule,
    FormsModule,
    CommonModule,
    ItemModule,
  ],
  exports: [],
  declarations: [DetailComponent],
  providers: [],
})
export class DetailModule { }
