import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { cantBackGuard } from './cant-back.guard';

describe('cantBackGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => cantBackGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
