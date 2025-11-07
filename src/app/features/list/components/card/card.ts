import { Component, computed, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  product = input.required<Product>();

  productTitle = computed(() => this.product().title);
}
