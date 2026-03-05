import { Routes } from '@angular/router';
import { Login } from './core/login/components/login/login';
import { DiceAccumulator } from './features/components/dice-accumulator/dice-accumulator';
import { Layout } from './features/dashboard/layout/layout';
import { Form } from './features/form/form';

export const routes: Routes = [
  { path: '', component: Login, pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: '', component: Layout,
    children: [
      { path: 'dice', component: DiceAccumulator },
      { path: 'form', component: Form },
    ]
  }
];
