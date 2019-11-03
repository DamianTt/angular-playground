import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssEncComponent } from './css-enc.component';

describe('CssEncComponent', () => {
  let component: CssEncComponent;
  let fixture: ComponentFixture<CssEncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssEncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssEncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
