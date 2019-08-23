import { TestBed } from '@angular/core/testing';

import { AsideCallbackService } from './aside-callback.service';

describe('AsideCallbackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsideCallbackService = TestBed.get(AsideCallbackService);
    expect(service).toBeTruthy();
  });
});
