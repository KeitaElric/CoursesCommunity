import { NgModule } from '@angular/core';

import { TodosListRoutingModule } from './todos-list.routing';
import { TodosListComponent }   from './todos-list.component';

@NgModule({
  imports: [
    TodosListRoutingModule,
  ],
  exports: [],
  declarations: [TodosListComponent],
  providers: [],
})
export class TodosListModule { }
