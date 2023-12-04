import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmDialogModel } from 'src/app/models/ConfirmDialogModel';
import { HospitalService } from 'src/app/services/hospital/hospital.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Appointment } from 'src/app/models/Appointment';
import { DatePipe } from '@angular/common';
import { ToastrIconClasses, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class HospitalViewBookingsComponent implements OnInit {
  vaccineForm: any;
  appointments!:any[];
  
  errorMessage!: string;
  showProgressBar: boolean = false;
  result: string = '';
  minDate: Date ;
  formattedDate!: string;


 //show hide div variables
 userlogin = true;
 userregister = false;
 //Buttons clicks functionalities 
 user_register()
 {
   this.userlogin = false;
   this.userregister = true;
 }
 user_login()
 {
   this.userlogin = true;
   this.userregister = false;
 }
  constructor(
    private fb: FormBuilder,
    private hospitalService: HospitalService,
    private router:Router,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private toaster:ToastrService
  ) {
    this.minDate=new Date()
  }

  ngOnInit(): void {
    const userId: string | null = localStorage.getItem('user_id');

    this.hospitalService.getChildBookingsByHospitalId(userId!).subscribe(
      (data) => {
        console.log(data)
        this.appointments = data;
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error getting appointments:', error);
      }
    );
  }
  openBookingForm(){}
  initForm(): void {
   
    
  }

  onSubmit() {
   
  }
  confirmDialog(appointment:Appointment): void {
    const message = `Are you completed vaccination for this child?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "350px",
      height:"250px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult){
        this.hospitalService.updateAppointment(appointment.id.toString(),"Completed").subscribe(
          (data)=>{
            this.toaster.success("Vaccination completed successfully")
          },
          (error) => {
            this.toaster.error("Something went wrong .. Please try again")
          }
        )
      }
    });
  }

  
}
