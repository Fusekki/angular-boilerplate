import { Component, effect } from '@angular/core';
import { AppState } from '../../shared/states/app.state';
import { Observable } from 'rxjs';
import { selectDiceTotal, selectRandomNumber } from '../../shared/states/dice-total/dice-total.selector';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { d100, d12, d20, d4, d6, d8, reset } from '../../shared/states/dice-total/dice-total.actions'
import { ActionService } from '../../shared/services/action.service';

@Component({
  selector: 'app-dice-accumulator',
  imports: [AsyncPipe],
  templateUrl: './dice-accumulator.html',
  styleUrl: './dice-accumulator.scss',
})
export class DiceAccumulator {
  total$: Observable<number>;
  lastRoll$: Observable<number | null>;

  constructor(private store: Store<AppState>, private actionSvc: ActionService) {
    this.total$ = this.store.select(selectDiceTotal)
    this.lastRoll$ = this.store.select(selectRandomNumber)
  }

  ngOnInit() {
    queueMicrotask(() => {
      this.actionSvc.triggerTitleAction('NgrxStore - Dice Accumulator');
    });
  }

  d100() {
    this.store.dispatch(d100());
  }

  d20() {
    this.store.dispatch(d20());
  }

  d12() {
    this.store.dispatch(d12());
  }

  d8() {
    this.store.dispatch(d8());
  }

  d6() {
    this.store.dispatch(d6());
  }

  d4() {
    this.store.dispatch(d4());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
