export interface GridConfig {
  columns: GridColumn[];
}

export interface GridColumn {
  id?: string;
  headerName: string;
  cellRenderer?: any;
}
