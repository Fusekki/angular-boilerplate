import { Injectable, signal } from '@angular/core';
import { Observable, of, map, Subject, from, BehaviorSubject, ReplaySubject, AsyncSubject, takeUntil } from 'rxjs';

interface FormContent {
  name: string,
  phone: string,
  email: string;
}

@Injectable({ providedIn: 'root' })

export class ActionService {

  clearedForm: FormContent = {
    name: '',
    phone: '',
    email: ''
  }
  // Private writable signal
  private menuActionState = signal<boolean>(false);
  private formActionState = signal<FormContent>(this.clearedForm);
  private titleActionState = signal<string>('');
  behaviorSubjectA$ = new BehaviorSubject(0);

  // Public read-only signal for components to consume
  readonly currentMenuAction = this.menuActionState.asReadonly();

  readonly currentTitleAction = this.titleActionState.asReadonly();

  // Method to trigger the menu action
  triggerMenuAction(message: boolean) {
    this.menuActionState.set(message);
    console.log(message);
  }

  triggerFormAction(formContent: FormContent) {
    this.formActionState.set(formContent);
    console.log(formContent);
  }

  triggerTitleAction(title: string) {
    this.titleActionState.set(title);
    console.log(title);
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
