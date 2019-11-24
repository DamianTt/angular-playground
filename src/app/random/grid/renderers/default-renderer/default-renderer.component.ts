import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GridCellRendererBase } from '../grid-cell-renderer';

@Component({
  selector: 'app-default-renderer',
  templateUrl: './default-renderer.component.html',
  styleUrls: ['./default-renderer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultRendererComponent extends GridCellRendererBase<string> implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
