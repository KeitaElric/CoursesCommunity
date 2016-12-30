import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HomeModule } from './home/home.module';
import { TodosModule } from './todos/todos.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        HomeModule,
        TodosModule,
        MaterialModule.forRoot()
    ],
    declarations: [AppComponent, LoginComponent],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }