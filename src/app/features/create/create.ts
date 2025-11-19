import { Component, inject } from '@angular/core';
import { Products } from '../../shared/services/products';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Form } from '../../shared/components/form/form';
import { Product } from '../../shared/interfaces/product.interface';
import { BackToList } from '../../shared/components/back-to-list/back-to-list';

@Component({
  selector: 'app-create',
  imports: [Form, BackToList],
  templateUrl: './create.html',
  styleUrl: './create.scss',
})
export class Create {
  ProductsService = inject(Products);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  onSubmit(product: Product) {
    this.ProductsService.post(product).subscribe(() => {
      this.matSnackBar.open('Produto criado com sucesso!', 'Ok');

      this.router.navigateByUrl('/');
    });
  }
}
