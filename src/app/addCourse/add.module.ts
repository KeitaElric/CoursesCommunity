import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AddRoutingModule } from './add.routing';
import { AddComponent }   from './add.component';

import {RatingModule} from "ng2-rating";

@NgModule({
  imports: [
    AddRoutingModule,
    RatingModule,
    FormsModule,
    CommonModule
  ],
  exports: [],
  declarations: [AddComponent],
  providers: [],
})
export class AddModule { }
