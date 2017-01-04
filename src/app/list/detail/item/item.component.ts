import { Component } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './item.component.html',
  styles: [require('./item.component.scss')],
})
export class ItemComponent {
  starsCount: number;
  fakeData = [1,2,3,4,5,6,7,8];
}