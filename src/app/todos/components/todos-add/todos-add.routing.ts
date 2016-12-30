import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosAddComponent } from './todos-add.component';

const routes: Routes = [
  { path: '', component: TodosAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosAddRoutingModule { }