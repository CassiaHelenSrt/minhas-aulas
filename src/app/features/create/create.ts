import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Products } from '../../shared/services/products';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './create.html',
  styleUrl: './create.scss',
})
export class Create {
  ProductsService = inject(Products);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  form = new FormGroup({
    title: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
  });

  onSubmit() {
    this.ProductsService.post({
      title: this.form.controls.title.value,
    }).subscribe(() => {
      this.matSnackBar.open('Produto criado com sucesso!', 'Ok');

      this.router.navigateByUrl('/');
    });
  }
}
