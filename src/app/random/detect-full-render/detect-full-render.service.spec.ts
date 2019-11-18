import { TestBed } from '@angular/core/testing';

import { DetectFullRenderService } from './detect-full-render.service';

describe('DetectFullRenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetectFullRenderService = TestBed.get(DetectFullRenderService);
    expect(service).toBeTruthy();
  });
});
