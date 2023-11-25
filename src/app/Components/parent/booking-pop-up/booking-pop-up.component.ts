import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Child } from 'src/app/models/Child';
import { BookingService } from 'src/app/services/booking/booking.service';
import { ChildCreationComponent } from '../../child/child-creation/child-creation.component';
import { Hospital } from 'src/app/models/Hospital';
import { Vaccine } from 'src/app/models/Vaccine';
import { Toast } from 'ngx-toastr';
import { Appointment } from 'src/app/models/Appointment';

@Component({
  selector: 'app-booking-pop-up',
  templateUrl: './booking-pop-up.component.html',
  styleUrls: ['./booking-pop-up.component.css'],
})
export class BookingPopUpComponent implements OnInit {
  form!: FormGroup;
  parent_Id: any;
  selectedHospital!: string;
  selectedVaccine!: string;
  hospitals: Hospital[] = [];
  vaccines: Vaccine[] = [];

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    public dialogRef: MatDialogRef<BookingPopUpComponent>,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { parentId: string ,childName: string,childId:number}
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      childName: [{ value: this.data.childName, disabled: true }, Validators.required],
      hospitalName: [ Validators.required],
      vaccineName: [ Validators.required],
      vaccinationDate: [ Validators.required],
    });

    this.getHospitals();
    this.getVaccines();
  }
 

  onSubmit() {
    if (this.form.valid) {
      // Form is valid, proceed with saving
      const formData = this.form.value;
      const appointment:Appointment = new Appointment(
        formData.hospitalName,
        formData.vaccineName,
        formData.vaccinationDate

        
      );
      console.log('Child ID:', this.data.childId);
      this.bookingService.saveAppointment(this.data.childId,appointment).subscribe(
        (data) => {
          console.log('Child saved successfully:', data);
          this.dialogRef.close();
        },
        (error) => {
          console.error('Error saving child:', error);
         
        }
      )
      
      
    
      }
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
  getHospitals() {
    this.bookingService.getHospitalList().subscribe(
      (response) => {
        this.hospitals = response; // Assuming your service returns an array of hospitals
      },
      (error) => {
        console.error('Error fetching hospitals:', error);
      }
    );
  }
  getVaccines() {
    this.bookingService.getVaccinesList().subscribe( (response) => {
      this.vaccines = response; // Assuming your service returns an array of hospitals
    },
    (error) => {
      console.error('Error fetching hospitals:', error);
    })
  }
}
