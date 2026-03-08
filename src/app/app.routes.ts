import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { DiceAccumulator } from './features/dice-accumulator/dice-accumulator';
import { Layout } from './core/layout/layout/layout';
import { ExampleForm } from './features/example-form/example-form';

export const routes: Routes = [
  { path: '', component: Login, pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: '', component: Layout,
    children: [
      { path: 'dice', component: DiceAccumulator },
      { path: 'form', component: ExampleForm },
    ]
  }
];
