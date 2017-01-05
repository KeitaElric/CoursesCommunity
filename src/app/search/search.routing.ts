import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DetailComponent} from './detail.component';

const routes: Routes = [
    { path: '', component: DetailComponent },
    { path: ':id', loadChildren: './item/item.module#ItemModule' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DetailRoutingModule {
}
