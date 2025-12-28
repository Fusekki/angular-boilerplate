import { Component, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { LucideAngularModule, LogOut, User, ShoppingCart } from 'lucide-angular';
import { Observable } from 'rxjs';
import { AppState } from '../../../states/app.state';
import { selectDiceTotal } from '../../../states/dice-total/dice-total.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule, AsyncPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly icons = { LogOut, User, ShoppingCart };
  protected readonly title = signal('Dice Accumulator');
  total$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.total$ = this.store.select(selectDiceTotal);
  }

  logout() {
    console.log('logout clicked');
  }
}



