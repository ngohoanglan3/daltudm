import { TestBed } from '@angular/core/testing';

import { ViewScoreService } from './view-score.service';

describe('ViewScoreService', () => {
  let service: ViewScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
