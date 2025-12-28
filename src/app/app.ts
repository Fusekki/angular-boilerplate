import { AsyncPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiceAccumulator } from "./dice-accumulator/dice-accumulator";
import { Store } from '@ngrx/store';
import { AppState } from './states/app.state';
import { selectDiceTotal } from './states/dice-total/dice-total.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [DiceAccumulator, RouterOutlet, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Boilerplate');
  total$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.total$ = this.store.select(selectDiceTotal);
  }
}
