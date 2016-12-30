import { Component, OnInit } from '@angular/core';
// import './home.component.scss';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: [require('./home.component.scss')]
  // styleUrls: [String('./home.component.scss')]
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}