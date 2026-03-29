import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kind } from './kind';

describe('Kind', () => {
  let component: Kind;
  let fixture: ComponentFixture<Kind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kind]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kind);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
