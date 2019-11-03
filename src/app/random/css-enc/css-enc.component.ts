import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-css-enc',
  templateUrl: './css-enc.component.html',
  styleUrls: ['./css-enc.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CssEncComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
