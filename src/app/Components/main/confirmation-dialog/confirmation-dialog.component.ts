import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h2>{{ data.title }}</h2>
    <p>{{ data.message }}</p>
    <button mat-button (click)="parentSignUp()">Parent</button>
    <button mat-button (click)="hospitalsignUp()">Hospital</button>
  `,
})
export class ConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) {}

  parentSignUp(): void {
    this.dialogRef.close('Parent');
    this.router.navigate(['/parentSignup']);
    
  }
  hospitalsignUp() {
    this.dialogRef.close('Hospital');
    this.router.navigate(['/HospitalSignup']);
  }
}
