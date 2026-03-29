import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonSearching } from './skeleton-searching';

describe('SkeletonSearching', () => {
  let component: SkeletonSearching;
  let fixture: ComponentFixture<SkeletonSearching>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonSearching]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonSearching);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
