import { Routes } from '@angular/router';
import { Login } from './core/login/components/login/login';
import { Dashboard } from './features/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: Login, pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard}
];
