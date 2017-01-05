import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
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
import { AddModule } from './addCourse/add.module';
import { LoginModule } from './login/login.module';

import { PeopleService } from './app.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        AppRoutingModule,
        HomeModule,
        ListModule,
        LoginModule,
        RouterModule,
        TodosModule,
        NotFoundModule,
        AddModule,
        MaterialModule.forRoot()
    ],
    declarations: [AppComponent, LoginComponent],
    providers: [ PeopleService ],
    bootstrap: [AppComponent],
})
export class AppModule { }