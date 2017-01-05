import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'add', loadChildren: './addCourse/add.module#AddModule' },
  { path: 'search', loadChildren: './search/search.module#SearchModule' },
  { path: 'des', loadChildren: './module/des/des.module#DesModule' },
  { path: 'dev', loadChildren: './module/dev/dev.module#DevModule' },
  { path: 'its', loadChildren: './module/its/its.module#ItsModule' },
  { path: ':id', loadChildren: './item/item.module#ItemModule' },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
