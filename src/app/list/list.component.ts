import { Component } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styles: [require('./list.component.scss')],
})
export class ListComponent {
  starsCount: number = 4;
  fakeData = [1,2,3,4,5];
}