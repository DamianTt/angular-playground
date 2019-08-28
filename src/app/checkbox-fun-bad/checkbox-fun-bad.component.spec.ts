import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxFunBadComponent } from './checkbox-fun-bad.component';

describe('CheckboxFunBadComponent', () => {
  let component: CheckboxFunBadComponent;
  let fixture: ComponentFixture<CheckboxFunBadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxFunBadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxFunBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
