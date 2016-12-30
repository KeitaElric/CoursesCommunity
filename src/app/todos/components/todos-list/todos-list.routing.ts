import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosListComponent } from './todos-list.component';

const routes: Routes = [
  { path: '', component: TodosListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosListRoutingModule { }