import { TestBed } from '@angular/core/testing';

import { AngularDropDownSearchService } from './angular-drop-down-search.service';

describe('AngularDropDownSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularDropDownSearchService = TestBed.get(AngularDropDownSearchService);
    expect(service).toBeTruthy();
  });
});
