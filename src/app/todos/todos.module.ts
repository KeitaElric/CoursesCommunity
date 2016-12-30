import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { TodosRoutingModule } from './todos.routing';
import { TodosComponent } from './todos.component';

import { TodosAddComponent } from './components/todos-add/todos-add.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

export class AppModule { }
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        TodosRoutingModule,
        MaterialModule.forRoot()
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
