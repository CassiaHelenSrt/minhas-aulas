import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './create.html',
  styleUrl: './create.scss',
})
export class Create {
  form = new FormGroup({
    title: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
  });
}
