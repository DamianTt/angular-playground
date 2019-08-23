import { TestBed } from '@angular/core/testing';

import { AsideObservableService } from './aside-observable.service';

describe('AsideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsideObservableService = TestBed.get(AsideObservableService);
    expect(service).toBeTruthy();
  });
});
