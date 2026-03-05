import { Injectable, signal } from '@angular/core';
import { Observable, of, map, Subject, from, BehaviorSubject, ReplaySubject, AsyncSubject, takeUntil } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class MenuActionService {
  // Private writable signal
  private actionState = signal<boolean>(false);
  behaviorSubjectA$ = new BehaviorSubject(0);

  // Public read-only signal for components to consume
  readonly currentAction = this.actionState.asReadonly();

  // Method to trigger the action
  triggerAction(message: boolean) {
    this.actionState.set(message);
    console.log(message);
  }

  createBehaviorSubject() {
    console.log('creating')
    this.behaviorSubjectA$
    .subscribe({
        next: v => console.log(`behaviorSubjectA: ${v}`),
        error: e => console.log(e),
        complete: () => console.log('behaviorSubjectA got a complete notification')
    })
  }

}
