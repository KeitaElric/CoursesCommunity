import { Component } from '@angular/core';

@Component({
  selector: 'des',
  templateUrl: './des.component.html',
  styles: [require('./des.component.scss')],
})
export class ListComponent {
  starsCount: number = 4;
  fakeData = [1,2,3,4,5];
}