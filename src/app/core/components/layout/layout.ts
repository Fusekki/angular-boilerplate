import { Component, signal } from '@angular/core';
import { DiceAccumulator } from '../../../dice-accumulator/dice-accumulator';

@Component({
  selector: 'app-layout',
  imports: [DiceAccumulator],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
