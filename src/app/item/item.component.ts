import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'list',
  templateUrl: './item.component.html',
  styles: [require('./item.component.scss')],
})
export class ItemComponent {
  starsCount: number = 4;
  fakeData = [1,2,3,4,5,6,7,8];

  constructor(private router: Router) {
  }

  search() {
    this.router.navigate(['/search']);
  }
}