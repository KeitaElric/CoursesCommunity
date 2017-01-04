import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NotFoundComponent }   from './notfound.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [],
  declarations: [NotFoundComponent],
  providers: [],
})
export class NotFoundModule { }
