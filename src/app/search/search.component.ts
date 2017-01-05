import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'list',
  templateUrl: './search.component.html',
  styles: [require('./search.component.scss')],
})
export class SearchComponent implements OnInit, OnDestroy {
  searchText: string;
  private sub: any;
  starsCount: number;
  fakeData = [1,2,3,4,5,6,7,8];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.searchText = params['id'];
      console.log(this.searchText);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}