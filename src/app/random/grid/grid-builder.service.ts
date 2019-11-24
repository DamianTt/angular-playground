import { Injectable } from "@angular/core";
import { GridConfig } from './grid-config';
import { Grid } from './grid';
import { DefaultRendererComponent } from './renderers/default-renderer/default-renderer.component';

export class GridConfiguration<TModel> {
  private gridConfig: GridConfig = {
    columns: []
  }
  constructor() {}

  column(
    id: Extract<keyof TModel, string>,
    headerName: string
  ): GridConfiguration<TModel> {
    this.gridConfig.columns.push({
      id: id,
      headerName: headerName,
      cellRenderer: DefaultRendererComponent
    })
    return this;
  }

  build(): Grid<TModel> {
    return new Grid<TModel>(this.gridConfig);
  }
}

@Injectable({
  providedIn: "root"
})
export class GridBuilder {
  for<TModel>(): GridConfiguration<TModel> {
    const result = new GridConfiguration<TModel>();
    return result;
  }
}
