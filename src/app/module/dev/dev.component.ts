import { Component } from '@angular/core';

@Component({
  selector: 'dev',
  templateUrl: './dev.component.html',
  styles: [require('./dev.component.scss')],
})
export class ListComponent {
  starsCount: number = 4;
  fakeData = [1,2,3,4,5];
}