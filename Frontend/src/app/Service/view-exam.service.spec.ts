import { TestBed } from '@angular/core/testing';

import { ViewExamService } from './view-exam.service';

describe('ViewExamService', () => {
  let service: ViewExamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
