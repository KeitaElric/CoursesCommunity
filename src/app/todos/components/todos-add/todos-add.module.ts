import { NgModule } from '@angular/core';
import {MaterialModule} from '@angular/material';

import { TodosAddRoutingModule } from './todos-add.routing';
import { TodosAddComponent }   from './todos-add.component';

@NgModule({
  imports: [
    TodosAddRoutingModule,
    MaterialModule.forRoot()
  ],
  exports: [],
  declarations: [TodosAddComponent],
  providers: [],
})
export class TodosAddModule { }
