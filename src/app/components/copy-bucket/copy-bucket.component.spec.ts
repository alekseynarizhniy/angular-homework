import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyBucketComponent } from './copy-bucket.component';

describe('CopyBucketComponent', () => {
  let component: CopyBucketComponent;
  let fixture: ComponentFixture<CopyBucketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyBucketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
