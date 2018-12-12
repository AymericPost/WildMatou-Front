import { TestBed } from '@angular/core/testing';

import { MatouFetchService } from './matou-fetch.service';

describe('MatouFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatouFetchService = TestBed.get(MatouFetchService);
    expect(service).toBeTruthy();
  });
});
