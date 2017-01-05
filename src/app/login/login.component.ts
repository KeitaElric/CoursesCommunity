import {Component, OnInit} from '@angular/core';
import { PeopleService } from './login.service';

declare const FB:any;

@Component({
    selector: 'social-login',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    constructor(peopleService: PeopleService) {

    }

    getOpen() {
        window.open('http://onlinecoursecommunity.apphb.com/api/Account/ExternalLogin?provider=Facebook', 'Login Facebook', 'height=300,width=600');
    }
    // constructor() {
    //     FB.init({
    //         appId      : '1258858804171988',
    //         cookie     : false,  // enable cookies to allow the server to access
    //         // the session
    //         xfbml      : true,  // parse social plugins on this page
    //         version    : 'v2.5' // use graph api version 2.5
    //     });
    // }
    //
    // onFacebookLoginClick() {
    //     FB.login(function(response: any) {
    //         if (response.authResponse) {
    //             console.log('Welcome!  Fetching your information.... ');
    //             FB.api('/me', function(response: any) {
    //                 console.log('Good to see you, ' + response.name + '.');
    //             });
    //         } else {
    //             console.log('User cancelled login or did not fully authorize.');
    //         }
    //     });
    // }
    //
    // statusChangeCallback(resp: any) {
    //
    // };
    // ngOnInit() {
    //     FB.getLoginStatus((response: any) => {
    //         if (response.status === 'connected') {
    //             // the user is logged in and has authenticated your
    //             // app, and response.authResponse supplies
    //             // the user's ID, a valid access token, a signed
    //             // request, and the time the access token
    //             // and signed request each expire
    //             var uid = response.authResponse.userID;
    //             var accessToken = response.authResponse.accessToken;
    //             console.log(accessToken);
    //
    //         } else {
    //             // FB.logout(function(response: any) {
    //             //     // user is now logged out
    //             // });
    //             // the user isn't logged in to Facebook.
    //         }
    //     });
    // }
}