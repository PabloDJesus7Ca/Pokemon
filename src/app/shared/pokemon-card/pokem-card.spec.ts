import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemCard } from './pokem-card';

describe('PokemCard', () => {
  let component: PokemCard;
  let fixture: ComponentFixture<PokemCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
