import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './todos.component';
import { TodosAddComponent } from './components/todos-add/todos-add.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'add', component: TodosAddComponent },
  { path: 'list', component: TodosListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule { }