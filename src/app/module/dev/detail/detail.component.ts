import { Component } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './detail.component.html',
  styles: [require('./detail.component.scss')],
})
export class DetailComponent {
  starsCount: number;
  fakeData = [1,2,3,4,5,6,7,8];
}