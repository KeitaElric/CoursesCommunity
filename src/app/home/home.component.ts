import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: [require('./home.component.scss')],
  // styleUrls: [String('./home.component.scss')],
})
export class HomeComponent {
  starsCount: number;
  fakeData = [1,2,3,4,5];
}