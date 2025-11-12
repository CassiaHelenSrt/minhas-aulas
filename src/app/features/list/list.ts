import { Component, inject, Output, output } from '@angular/core';
import { Products } from '../../shared/services/products';
import { Product } from '../../shared/interfaces/product.interface';
import { MatAnchor, MatButton, MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { Card } from './components/card/card';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule, Card, RouterLink, MatAnchor, MatButtonModule],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  products: Product[] = [];
  // productsService = inject(Products);

  router = inject(Router);

  constructor(public productsService: Products) {}

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => (this.products = products));
  }

  onEdit() {
    this.router.navigateByUrl('/edit-product');
  }
}
