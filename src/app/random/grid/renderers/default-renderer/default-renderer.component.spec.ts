import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultRendererComponent } from './default-renderer.component';

describe('DefaultRendererComponent', () => {
  let component: DefaultRendererComponent;
  let fixture: ComponentFixture<DefaultRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
