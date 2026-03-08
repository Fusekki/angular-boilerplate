import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceAccumulator } from './dice-accumulator';

describe('DiceAccumulator', () => {
  let component: DiceAccumulator;
  let fixture: ComponentFixture<DiceAccumulator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiceAccumulator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiceAccumulator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
