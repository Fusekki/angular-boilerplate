import { Injectable, signal } from '@angular/core';
import { Observable, of, map, Subject, from, BehaviorSubject, ReplaySubject, AsyncSubject, takeUntil } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ActionService {
  // Private writable signal
  private menuActionState = signal<boolean>(false);
  behaviorSubjectA$ = new BehaviorSubject(0);

  // Public read-only signal for components to consume
  readonly currentMenuAction = this.menuActionState.asReadonly();

  // Method to trigger the action
  triggerAction(message: boolean) {
    this.menuActionState.set(message);
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
