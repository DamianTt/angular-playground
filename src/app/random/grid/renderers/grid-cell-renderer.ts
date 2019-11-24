import { Input } from '@angular/core';

export class GridCellRendererBase<T> {
  @Input() data: T;
}
