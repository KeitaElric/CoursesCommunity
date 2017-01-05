import { Component } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './add.component.html',
  styles: [require('./add.component.scss')],
})
export class AddComponent {
  starsCount: number = 4;
  fakeData = [1,2,3,4,5,6,7,8];
}