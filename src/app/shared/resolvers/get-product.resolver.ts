import { inject } from '@angular/core';
import { Products } from '../services/products';
import { ActivatedRouteSnapshot } from '@angular/router';

export const getProduct = (route: ActivatedRouteSnapshot) => {
  const productsService = inject(Products);
  const id = route.paramMap.get('id'); // ✅ pega o id da URL
  console.log('ID capturado:', id); // 👉 pode deixar pra testar
  return productsService.get(id!);
};
