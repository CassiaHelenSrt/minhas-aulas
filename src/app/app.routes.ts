import { Routes } from '@angular/router';
import { List } from './features/list/list';

import { getProducts } from './shared/resolvers/get-products.resolver';
import { getProduct } from './shared/resolvers/get-product.resolver';

export const routes: Routes = [
  {
    path: '',
    resolve: {
      products: getProducts,
    },
    component: List,
  },
  {
    path: 'create-product',
    loadComponent: () => import('./features/create/create').then((m) => m.Create),
  },

  // {
  //   path: 'edit-product/:id',
  //   loadComponent: () => import('./features/edit/edit').then((m) => m.Edit),
  // },
  {
    path: 'edit-product/:id',
    loadComponent: () => import('./features/edit/edit').then((m) => m.Edit),

    resolve: {
      product: getProduct,
    },
  },
];
