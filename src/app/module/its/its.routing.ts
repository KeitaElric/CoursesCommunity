import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './its.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: ':id', loadChildren: './detail/detail.module#DetailModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRoutingModule { }
