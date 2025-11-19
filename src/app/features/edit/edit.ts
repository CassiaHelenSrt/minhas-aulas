import { Component, inject } from '@angular/core';

import { Products } from '../../shared/services/products';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/interfaces/product.interface';
import { Form } from '../../shared/components/form/form';
import { BackToList } from '../../shared/components/back-to-list/back-to-list';

@Component({
  selector: 'app-edit',
  imports: [Form, BackToList],
  templateUrl: './edit.html',
  styleUrl: './edit.scss',
})
export class Edit {
  productsService = inject(Products);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  product: Product = inject(ActivatedRoute).snapshot.data['product'];

  onSubmit(product: Product) {
    this.productsService.put(this.product.id, product).subscribe(() => {
      this.matSnackBar.open('Produto editado com sucesso!', 'Ok');

      this.router.navigateByUrl('/');
    });
  }
}
