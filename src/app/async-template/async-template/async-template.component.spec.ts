import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncTemplateComponent } from './async-template.component';

describe('AsyncTemplateComponent', () => {
  let component: AsyncTemplateComponent;
  let fixture: ComponentFixture<AsyncTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
