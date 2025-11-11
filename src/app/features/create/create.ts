import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './create.html',
  styleUrl: './create.scss',
})
export class Create {
  form = new FormGroup({
    title: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
  });

  onSubmit() {
    this.form.controls.title.value;
  }
}
