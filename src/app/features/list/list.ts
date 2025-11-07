import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Products } from '../../shared/services/products';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  products: any[] = [];
  productsService = inject(Products);

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => (this.products = products));
  }
}
