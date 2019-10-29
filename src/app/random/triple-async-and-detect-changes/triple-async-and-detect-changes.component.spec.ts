import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripleAsyncAndDetectChangesComponent } from './triple-async-and-detect-changes.component';

describe('TripleAsyncAndDetectChangesComponent', () => {
  let component: TripleAsyncAndDetectChangesComponent;
  let fixture: ComponentFixture<TripleAsyncAndDetectChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripleAsyncAndDetectChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripleAsyncAndDetectChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
