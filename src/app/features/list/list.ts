import { ChangeDetectorRef, Component, inject, Output, output } from '@angular/core';
import { Products } from '../../shared/services/products';
import { Product } from '../../shared/interfaces/product.interface';
import { MatAnchor, MatButton, MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { Card } from './components/card/card';
import { Router, RouterLink } from '@angular/router';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { after } from 'node:test';

@Component({
  selector: 'app-confirmation-dialog',
  template: `<h2 mat-dialog-title>Você tem certeza de que deseja excluir?</h2>
    <mat-dialog-actions>
      <button matButton mat-dialog-close>Cancel</button>
      <button matButton>Delete</button>
    </mat-dialog-actions>`,
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class ConfimationDialogComponent {}

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
    this.matDialog
      .open(ConfimationDialogComponent)
      .afterClosed()
      .subscribe((data) => {
        console.log('afterClosed', data);
      });
  }
}
