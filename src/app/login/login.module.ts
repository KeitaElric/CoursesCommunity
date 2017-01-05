import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';


import { PeopleService } from './login.service';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        HttpModule,
        JsonpModule
    ],
    exports: [],
    declarations: [],
    providers: [PeopleService],
})
export class LoginModule { }
