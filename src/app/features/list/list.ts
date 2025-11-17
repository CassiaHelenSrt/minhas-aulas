import { ChangeDetectorRef, Component, inject, Output, output } from '@angular/core';
import { Products } from '../../shared/services/products';
import { Product } from '../../shared/interfaces/product.interface';
import { MatAnchor, MatButton, MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { Card } from './components/card/card';
import { Router, RouterLink } from '@angular/router';

import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { after } from 'node:test';
import { filter } from 'rxjs';
import { ConfirmationDialog } from '../../shared/services/confirmation-dialog';

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

  matDialog = inject(MatDialog);

  ConfirmationDialogService = inject(ConfirmationDialog);

  constructor(public productsService: Products, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;

      this.cdr.detectChanges(); // força o Angular a atualizar a view corretamente
    });
  }

  onEdit(productId: string) {
    this.router.navigate(['/edit-product', productId]);
  }

  onDelete(product: Product) {
    this.ConfirmationDialogService.openDialog()
      .pipe(filter((answer) => answer === true))
      .subscribe(() => {
        this.productsService.delete(product.id).subscribe(() => {
          this.productsService.getAll().subscribe((products) => {
            this.products = products;

            this.cdr.detectChanges(); // força o Angular a atualizar a view corretamente
          });
        });
      });
  }
}
