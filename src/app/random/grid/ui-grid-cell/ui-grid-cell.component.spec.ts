import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiGridCellComponent } from './ui-grid-cell.component';

describe('UiGridCellComponent', () => {
  let component: UiGridCellComponent;
  let fixture: ComponentFixture<UiGridCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiGridCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiGridCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
