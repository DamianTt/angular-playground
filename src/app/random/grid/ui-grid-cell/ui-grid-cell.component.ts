import {
  Component,
  OnInit,
  Input,
  ComponentFactoryResolver,
  Injector,
  ChangeDetectionStrategy,
  ComponentRef,
  ViewContainerRef
} from '@angular/core';
import { GridCellRendererBase } from '../renderers/grid-cell-renderer';

@Component({
  selector: 'app-ui-grid-cell',
  templateUrl: './ui-grid-cell.component.html',
  styleUrls: ['./ui-grid-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiGridCellComponent implements OnInit {
  @Input()
  cellRenderer?: any;

  @Input()
  cellData: any;

  componentRef?: ComponentRef<any>;

  constructor(private vcr: ViewContainerRef, private cfr: ComponentFactoryResolver, private injector: Injector) {}

  ngOnInit() {
    if (this.cellRenderer) {
      const compFactory = this.cfr.resolveComponentFactory<GridCellRendererBase<any>>(this.cellRenderer);
      this.componentRef = this.vcr.createComponent<GridCellRendererBase<any>>(compFactory);
      this.componentRef.instance.inputData = this.cellData;
      this.componentRef.hostView.detectChanges();
    }
  }
}
