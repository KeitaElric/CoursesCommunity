import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search.routing';
import { SearchComponent }   from './search.component';

import {RatingModule} from "ng2-rating";

@NgModule({
  imports: [
    SearchRoutingModule,
    RatingModule,
    FormsModule,
    CommonModule,
  ],
  exports: [],
  declarations: [SearchComponent],
  providers: [],
})
export class SearchModule { }
