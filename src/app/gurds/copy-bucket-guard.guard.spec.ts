import { TestBed } from '@angular/core/testing';

import { CopyBucketGuardGuard } from './copy-bucket-guard.guard';

describe('CopyBucketGuardGuard', () => {
  let guard: CopyBucketGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CopyBucketGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
