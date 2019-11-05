import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollFunComponent } from './infinite-scroll-fun.component';

describe('InfiniteScrollFunComponent', () => {
  let component: InfiniteScrollFunComponent;
  let fixture: ComponentFixture<InfiniteScrollFunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniteScrollFunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteScrollFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
