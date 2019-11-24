import { TestBed } from '@angular/core/testing';

import { GridBuilderService } from './grid-builder.service';

describe('GridBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GridBuilderService = TestBed.get(GridBuilderService);
    expect(service).toBeTruthy();
  });
});
