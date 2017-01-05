import { Component } from '@angular/core';

@Component({
  selector: 'des',
  templateUrl: './its.component.html',
  styles: [require('./its.component.scss')],
})
export class ListComponent {
  starsCount: number = 4;
  fakeData = [1,2,3,4,5];
}