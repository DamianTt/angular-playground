import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssEncChild1Component } from './css-enc-child1.component';

describe('CssEncChild1Component', () => {
  let component: CssEncChild1Component;
  let fixture: ComponentFixture<CssEncChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssEncChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssEncChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
