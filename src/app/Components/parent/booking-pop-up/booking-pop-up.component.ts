import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
}
from '@angular/material/dialog';
import { Child } from 'src/app/models/Child';
import { BookingService } from 'src/app/services/booking/booking.service';
import { ChildCreationComponent } from '../../child/child-creation/child-creation.component';
import { Hospital } from 'src/app/models/Hospital';
import { Vaccine } from 'src/app/models/Vaccine';
import { Toast, ToastrService } from 'ngx-toastr';
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
  myDate!: number;
  day!: number;
  dayString!: string;
  minDate!: Date ;

  ngOnInit(): void {
    this.form = this.fb.group({
      childName: [
        { value: this.data.childName, disabled: true },
        Validators.required,
      ],
      hospitalName: [Validators.required],
      vaccineName: [Validators.required],
      vaccinationdate: [Validators.required],
    });

    // this.getHospitals();
    this.getVaccines();
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      const appointment: Appointment = new Appointment(
        formData.hospitalName,
        formData.vaccineName,
        formData.vaccinationdate, 
        "Pending" 
      );
      const appointmentDate = formData.vaccinationdate;
      this.day = appointmentDate.getDay();
      console.log('Child ID:', appointment);

      this.bookingService
        .saveAppointment(this.data.childId, appointment)
        .subscribe(
          (data) => {
            console.log('Child saved successfully:', data);
            this.dialogRef.close();
            this.toaster.success("Your slot booked successfully")
          },
          (error) => {
            console.error('Error saving child:', error);
            this.toaster.error("No slots has been left for this booking","Something went worng..")
          }
        );
    }
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

  getVaccines() {
    this.bookingService.getVaccinesList().subscribe(
      (response) => {
        response.forEach(it=>{
          if(it.vaccineCategory == this.data.age && it.status=="Approved"){
            this.vaccines.push(it); 
          }
        })
        // Assuming your service returns an array of hospitals
      },
      (error) => {
        console.error('Error fetching hospitals:', error);
      }
    );
  }

  getHospitals() {
    if (this.form.get('vaccinationdate')?.value) {
      const selectedDate: Date = this.form.get('vaccinationdate')!.value;
      this.day = selectedDate.getDay();
      console.log(this.day);
      this.getDayFromDate(this.day);
      this.bookingService.getHospitalsByDay(this.dayString).subscribe(
        (response) => {
          if (response) {
            const uniqueHospitals = Array.from(
              new Set(response.map((item) => item.hospital))
            );
            console.log(uniqueHospitals);
            this.hospitals = uniqueHospitals;
          } else {
            console.error('Response array is undefined or null.');
          }
        },
        (error) => {
          console.error('Error fetching hospitals:', error);
        }
      );
    }
  }
  getDayFromDate(day: number) {
    switch (this.day) {
      case 0:
        this.dayString = 'SUNDAY';
        break;
      case 1:
        this.dayString = 'MONDAY';
        break;
      case 2:
        this.dayString = 'TUESDAY';
        break;
      case 3:
        this.dayString = 'WEDNESDAY';
        break;
      case 4:
        this.dayString = 'THURSDAY';
        break;
      case 5:
        this.dayString = 'FRIDAY';
        break;
      case 6:
        this.dayString = 'SATURDAY';
        break;
      default:
        this.dayString = 'Invalid day';
    }
  }

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    public dialogRef: MatDialogRef<BookingPopUpComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA)
    public data: { parentId: string; childName: string; childId: number;age:string},
    private toaster:ToastrService
  ) {
    console.log(this.form);
    this.minDate=new Date()

  }
}
