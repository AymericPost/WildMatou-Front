import { TestBed } from '@angular/core/testing';

import { MatouRoarService } from './matou-roar.service';

describe('MatouRoarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatouRoarService = TestBed.get(MatouRoarService);
    expect(service).toBeTruthy();
  });
});
