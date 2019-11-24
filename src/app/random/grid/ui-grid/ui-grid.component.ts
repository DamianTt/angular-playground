import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Grid } from '../grid';
import { GridColumn } from '../grid-config';

@Component({
  selector: 'app-ui-grid',
  templateUrl: './ui-grid.component.html',
  styleUrls: ['./ui-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiGridComponent<TModel> implements OnInit {
  @Input()
  grid: Grid<TModel>;

  constructor() {}

  ngOnInit() {}

  getCellData(row: TModel, column: GridColumn) {
    return row[column.id];
  }
}
