import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectFullRenderComponent } from './detect-full-render.component';

describe('DetectFullRenderComponent', () => {
  let component: DetectFullRenderComponent;
  let fixture: ComponentFixture<DetectFullRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectFullRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectFullRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
