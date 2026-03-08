import { Component, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { LucideAngularModule, LogOut, User, ShoppingCart } from 'lucide-angular';
import { Observable } from 'rxjs';
import { AppState } from '../../../shared/states/app.state';
import { selectDiceTotal } from '../../../shared/states/dice-total/dice-total.selector';
import { AsyncPipe } from '@angular/common';
import { reset } from '../../../shared/states/user/user.actions';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActionService } from '../../../shared/services/action.service';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule, AsyncPipe, MatIconModule, MatButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly icons = { LogOut, User, ShoppingCart };
  protected readonly title = signal('Dice Accumulator');
  total$: Observable<number>;

  constructor(private store: Store<AppState>, private router: Router, private actionSvc: ActionService) {
    this.total$ = this.store.select(selectDiceTotal);
    this.actionSvc.createBehaviorSubject();
  }

  userLogout() {
    // Clear NgRx user slice, localStorage, etc.
    this.store.dispatch(reset());
    const w = window as any;
    if (w.google?.accounts?.id) {
      w.google.accounts.id.disableAutoSelect();
    }
    this.router.navigate(['']);
  }

  menuClick() {
    const currentMenuAction = this.actionSvc.currentMenuAction();
    console.log('currentMenuAction', currentMenuAction);
    this.actionSvc.triggerMenuAction(!currentMenuAction)
    this.actionSvc.behaviorSubjectA$.next(2);
  }
}
