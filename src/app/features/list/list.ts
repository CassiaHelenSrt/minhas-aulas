import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { Products } from '../../shared/services/products';
import { Product } from '../../shared/interfaces/product.interface';
import { MatAnchor, MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { Card } from './components/card/card';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { ConfirmationDialog } from '../../shared/services/confirmation-dialog';
import { NoItems } from './components/no-items/no-items';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule, Card, RouterLink, MatAnchor, MatButtonModule, NoItems],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  products = signal<Product[]>(inject(ActivatedRoute).snapshot.data['products']);

  // productsService = inject(Products);

  router = inject(Router);

  matDialog = inject(MatDialog);

  ConfirmationDialogService = inject(ConfirmationDialog);

  constructor(public productsService: Products, private cdr: ChangeDetectorRef) {}

  // ngOnInit() {
  //   this.productsService.getAll().subscribe((products) => {
  //     this.products = products;
  //     this.cdr.detectChanges(); // força o Angular a atualizar a view corretamente
  //   });
  // }

  onEdit(productId: string) {
    this.router.navigate(['/edit-product', productId]);
  }

  onDelete(product: Product) {
    this.ConfirmationDialogService.openDialog()
      .pipe(filter((answer) => answer === true))
      .subscribe(() => {
        this.productsService.delete(product.id).subscribe(() => {
          this.productsService.getAll().subscribe((products) => {
            this.products.set(products);
          });
        });
      });
  }
}
