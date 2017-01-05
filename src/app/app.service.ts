import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {
    constructor(private http: Http) {

    }

    public getMenu() {
        return this.http.request('http://localhost:8080/src/app/resources/menu.json')
            .map(res => res.json());
    }

    public getPeople() {
        return this.http.get('http://onlinecoursecommunity.apphb.com/api/Account/ExternalLogin');
    }
}