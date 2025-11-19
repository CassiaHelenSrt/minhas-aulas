import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-no-items',
  imports: [MatCardModule],
  templateUrl: './no-items.html',
  styleUrl: './no-items.scss',
})
export class NoItems {}
