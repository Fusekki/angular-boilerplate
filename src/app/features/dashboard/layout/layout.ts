import { Component, signal } from '@angular/core';
import { DiceAccumulator } from '../../components/dice-accumulator/dice-accumulator';
import { Header } from '../header/header';

@Component({
  selector: 'app-layout',
  imports: [Header],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  standalone: true
})
export class Layout {

}
