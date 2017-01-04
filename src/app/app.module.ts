import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HomeModule } from './home/home.module';
import { ListModule } from './list/list.module';
import { TodosModule } from './todos/todos.module';
import { NotFoundModule } from './notfound/notfound.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        HomeModule,
        ListModule,
        RouterModule,
        TodosModule,
        NotFoundModule,
        MaterialModule.forRoot()
    ],
    declarations: [AppComponent, LoginComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }