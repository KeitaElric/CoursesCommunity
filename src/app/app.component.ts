import {Component} from '@angular/core';
import {Router} from "@angular/router";

import {PeopleService} from './app.service';


import {Menu} from './menu.class';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [require('./app.component.scss')]
})
export class AppComponent {
    menu: Array<any>;
    searchText: string;

    constructor(private router: Router,_peopleService: PeopleService) {
        _peopleService.getMenu().subscribe(
            data => {
                this.menu = data;
            }
        );
    }

    public search() {
        console.log(this.searchText);
        this.searchText = '';
        this.router.navigate(['/search', this.searchText]);
    }
}
