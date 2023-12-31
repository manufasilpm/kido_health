import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Child } from 'src/app/models/Child';
import { ChildService } from 'src/app/services/child/child.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-child-creation',
  templateUrl: './child-creation.component.html',
  styleUrls: ['./child-creation.component.css'],
})
export class ChildCreationComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private childService: ChildService,
    public dialogRef: MatDialogRef<ChildCreationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { parentId: string }
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      gender: ['male', Validators.required],
      vaccinated: ['no', Validators.required],
      complete_date: ['no', Validators.required],
      dob: [Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // Form is valid, proceed with saving
      const formData = this.form.value;
      const child: Child = new Child(
        formData.name,
        formData.gender,
        formData.vaccinated,
        formData.complete_date,
        this.formatDate(formData.dob),
        this.data.parentId
      );

      // Save child
      this.childService.saveChild(child).subscribe(
        (data) => {
          console.log('Child saved successfully:', data);
          this.dialogRef.close();
          
        },
        (error) => {
          console.error('Error saving child:', error);
          // Handle error
        }
      );
    }
    
  }
  private formatDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
  }
}
