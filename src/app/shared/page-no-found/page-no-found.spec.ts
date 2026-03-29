import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoFound } from './page-no-found';

describe('PageNoFound', () => {
  let component: PageNoFound;
  let fixture: ComponentFixture<PageNoFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNoFound]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNoFound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
