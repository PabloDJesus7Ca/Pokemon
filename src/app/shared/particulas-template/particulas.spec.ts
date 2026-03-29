import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Particulas } from './particulas';

describe('Particulas', () => {
  let component: Particulas;
  let fixture: ComponentFixture<Particulas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Particulas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Particulas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
