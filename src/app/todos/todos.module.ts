import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { TodosRoutingModule } from './todos.routing';
import { TodosComponent } from './todos.component';

import { TodosAddComponent } from './components/todos-add/todos-add.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {MdCardModule} from '@angular2-material/card';
import {MdIconModule} from '@angular2-material/icon';
import {MdButtonModule} from '@angular2-material/button';
import {MdIconRegistry} from '@angular2-material/icon';
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdInputModule} from '@angular2-material/input';
import {MdCheckboxModule} from '@angular2-material/checkbox';
import {MdListModule} from '@angular2-material/list';

const MATERIAL_MODULES = [
MdButtonModule,
//MdButtonToggleModule,
MdCardModule,
MdCheckboxModule,
//MdGridListModule,
MdIconModule,
MdInputModule,
MdListModule,
//MdMenuModule,
//MdProgressBarModule,
//MdProgressCircleModule,
//MdRadioModule,
//MdRippleModule,
//MdSidenavModule,
//MdSliderModule,
//MdSlideToggleModule,
//MdTabsModule,
MdToolbarModule,
//MdTooltipModule,
//OverlayModule,
//PortalModule,
//RtlModule,
];

export class AppModule { }
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        TodosRoutingModule,
        MATERIAL_MODULES
        // MaterialModule.forRoot()
    ],
    exports: [],
    declarations: [
        TodosComponent,
        TodosAddComponent,
        TodosListComponent,
        //    TodosAddModule,
        //    TodosListModule
    ],
    providers: [],
    bootstrap: [TodosComponent]
})
export class TodosModule { }
