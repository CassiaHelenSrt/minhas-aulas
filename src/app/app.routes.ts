import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { List } from './features/list/list';
import { inject } from '@angular/core';
import { Products } from './shared/services/products';

export const routes: Routes = [
  {
    path: '',
    resolve: {
      products: () => {
        const productsService = inject(Products);

        return productsService.getAll();
      },
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
      product: (route: ActivatedRouteSnapshot) => {
        const productsService = inject(Products);
        const id = route.paramMap.get('id'); // ✅ pega o id da URL
        console.log('ID capturado:', id); // 👉 pode deixar pra testar
        return productsService.get(id!);
      },
    },
  },
];
