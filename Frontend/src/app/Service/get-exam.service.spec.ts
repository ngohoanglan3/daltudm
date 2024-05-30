import { TestBed } from '@angular/core/testing';

import { GetExamService } from './get-exam.service';

describe('GetExamService', () => {
  let service: GetExamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
