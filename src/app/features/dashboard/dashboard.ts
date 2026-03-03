import { Component } from '@angular/core';
import { Layout } from './layout/layout';
import { DiceAccumulator } from '../components/dice-accumulator/dice-accumulator';

@Component({
  selector: 'app-dashboard',
  imports: [Layout, DiceAccumulator],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  userLogout() {
    console.log(1)
  }
}
