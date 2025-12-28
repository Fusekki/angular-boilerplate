import { AsyncPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiceAccumulator } from "./dice-accumulator/dice-accumulator";
import { Store } from '@ngrx/store';
import { AppState } from './states/app.state';
import { selectDiceTotal } from './states/dice-total/dice-total.selector';
import { Observable } from 'rxjs';
import { Layout } from "./core/components/layout/layout";
import { Header } from './core/components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Dice Accumulator');
}
