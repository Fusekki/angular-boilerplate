import { Component, effect, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogOut, User, ShoppingCart } from 'lucide-angular';
import { Observable } from 'rxjs';
import { AppState } from '../../../shared/states/app.state';
import { selectDiceTotal } from '../../../shared/states/dice-total/dice-total.selector';
import { reset } from '../../../shared/states/user/user.actions';
import { Router } from '@angular/router';
import { ActionService } from '../../../shared/services/action.service';
import { MaterialModule } from '../../../shared/material.module';

@Component({
  selector: 'app-header',
  imports: [MaterialModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly title = signal('Dice Accumulator');
  total$: Observable<number>;
  currentTitleAction: string = '';

  constructor(private store: Store<AppState>, private router: Router, private actionSvc: ActionService) {
    this.total$ = this.store.select(selectDiceTotal);
    this.actionSvc.createBehaviorSubject();
    effect(() => {
      this.currentTitleAction = this.actionSvc.currentTitleAction();
      console.log('currentTitleAction', this.currentTitleAction);
    })
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
