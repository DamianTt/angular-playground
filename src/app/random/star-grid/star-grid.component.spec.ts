import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarGridComponent } from './star-grid.component';

describe('StarGridComponent', () => {
  let component: StarGridComponent;
  let fixture: ComponentFixture<StarGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
