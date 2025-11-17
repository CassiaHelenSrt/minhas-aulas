import { Component, inject, Injectable } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'app-confirmation-dialog',
  template: `<h2 mat-dialog-title>Você tem certeza de que deseja excluir?</h2>
    <mat-dialog-actions>
      <button matButton (click)="onNo()">Não</button>
      <button matButton (click)="onYes()">Sim</button>
    </mat-dialog-actions>`,
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class ConfimationDialogComponent {
  matDialogRef = inject(MatDialogRef);

  onNo() {
    this.matDialogRef.close(false);
  }
  onYes() {
    this.matDialogRef.close(true);
  }
}

@Injectable({
  providedIn: 'root',
})
export class ConfirmationDialog {
  matDialog = inject(MatDialog);

  openDialog(): Observable<boolean> {
    return this.matDialog.open(ConfimationDialogComponent).afterClosed();
  }
}
