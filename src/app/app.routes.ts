import { Routes } from '@angular/router';
import { List } from './features/list/list';

export const routes: Routes = [
  {
    path: '',
    component: List,
  },
  {
    path: 'create-product',
    loadComponent: () => import('./features/create/create').then((m) => m.Create),
  },
];
