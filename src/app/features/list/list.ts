import { Component, inject } from '@angular/core';
import { Products } from '../../shared/services/products';
import { Product } from '../../shared/interfaces/product.interface';
import { MatAnchor } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { Card } from './components/card/card';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatAnchor, MatCardModule, Card],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  products: Product[] = [];
  productsService = inject(Products);

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => (this.products = products));
  }
}
