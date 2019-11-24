import { GridConfig } from './grid-config';

export class Grid<TModel> {
  dataRows: Array<TModel>;

  constructor(private config: GridConfig) {}

  setData(rows: Array<TModel> = []): void {
    this.dataRows = rows;
  }
}
