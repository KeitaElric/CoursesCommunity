import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HomeModule } from './home/home.module';
// import { ListModule } from './list/list.module';
import { NotFoundModule } from './notfound/notfound.module';
import { AddModule } from './addCourse/add.module';
import { LoginModule } from './login/login.module';
import { SearchModule } from './search/search.module';
import { ItemModule } from './item/item.module';

import { DesModule } from './module/des/des.module';
import { ItsModule } from './module/its/its.module';
import { DevModule } from './module/dev/dev.module';


import { PeopleService } from './app.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        AppRoutingModule,
        HomeModule,
        // ListModule,
        LoginModule,
        RouterModule,
        NotFoundModule,
        AddModule,
        SearchModule,
        ItemModule,
        MaterialModule.forRoot(),
        DesModule,
        ItsModule,
        DevModule,
    ],
    declarations: [AppComponent, LoginComponent],
    providers: [ {provide: APP_BASE_HREF, useValue : '/' }, PeopleService ],
    bootstrap: [AppComponent],
})
export class AppModule { }