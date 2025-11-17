import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductPayload } from '../interfaces/payload-product.interface';

@Injectable({
  providedIn: 'root',
})
export class Products {
  httpClient = inject(HttpClient);

  private api = 'http://localhost:3000/products';

  getAll() {
    return this.httpClient.get<Product[]>(`${this.api}`);
  }

  get(id: string) {
    return this.httpClient.get(`${this.api}/${id}`);
  }

  post(payload: any) {
    return this.httpClient.post(`${this.api}`, payload);
  }

  put(id: string, payload: any) {
    return this.httpClient.put(`${this.api}/${id}`, payload);
  }
  delete(id: string) {
    return this.httpClient.delete(`${this.api}/${id}`);
  }
}
