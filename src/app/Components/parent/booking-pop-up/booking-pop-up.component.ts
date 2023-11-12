import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Child } from 'src/app/models/Child';
import { BookingService } from 'src/app/services/booking/booking.service';
import { ChildCreationComponent } from '../../child/child-creation/child-creation.component';

@Component({
  selector: 'app-booking-pop-up',
  templateUrl: './booking-pop-up.component.html',
  styleUrls: ['./booking-pop-up.component.css']
})
export class BookingPopUpComponent implements OnInit {
  form!: FormGroup;
  parent_Id: any;
  selectedHospital!: string;
  selectedVaccine!: string;
  hospitals = [
    { label: 'Hospital 1', value: 'option1' },
    { label: 'Hospital 2', value: 'option2' },
    { label: 'Hospital 3', value: 'option3' },
  ];
  vaccines = [
    { label: 'Vaccine 1', value: 'option1' },
    { label: 'Vaccine 2', value: 'option2' },
    { label: 'Vaccine 3', value: 'option3' },
  ];

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    public dialogRef: MatDialogRef<BookingPopUpComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { parentId: string }
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      childName: ['', Validators.required],
      hospitalName: ['hospital', Validators.required],
      vaccineName: ['polio', Validators.required],
      vaccinationDate: ['01/01/2024', Validators.required],
  
    });
  }

  onSubmit() {
    // if (this.form.valid) {
    //   // Form is valid, proceed with saving
    //   const formData = this.form.value;
    //   const child: Child = new Child(
    //     formData.name,
    //     formData.gender,
    //     formData.vaccinated,
    //     formData.complete_date,
    //     this.formatDate(formData.dob),
    //     this.data.parentId
    //   );

      // Save child
      
      
    // }
    
  }
  private formatDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
  }
  openForm() {
    const dialogRef = this.dialog.open(ChildCreationComponent, {
      width: '400px',
      data: { parentId: this.parent_Id }, // Pass the parent ID to ChildCreationComponent
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

}
