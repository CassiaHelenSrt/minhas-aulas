import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductPayload } from '../interfaces/payload-product.interface';

@Injectable({
  providedIn: 'root',
})
export class Products {
  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }

  post(payload: ProductPayload) {
    return this.httpClient.post('http://localhost:3000/products', payload);
  }
}
