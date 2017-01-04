import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item.routing';
import { ItemComponent }   from './item.component';

import {RatingModule} from "ng2-rating";

@NgModule({
  imports: [
    ItemRoutingModule,
    RatingModule,
    FormsModule,
    CommonModule
  ],
  exports: [],
  declarations: [ItemComponent],
  providers: [],
})
export class ItemModule { }
