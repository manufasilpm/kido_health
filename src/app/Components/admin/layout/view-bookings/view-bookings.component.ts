import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmDialogModel } from 'src/app/models/ConfirmDialogModel';
import { HospitalService } from 'src/app/services/hospital/hospital.service';
import { AdminConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { BookingService } from 'src/app/services/booking/booking.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css'],
})
export class AdminViewBookingsComponent implements OnInit {
  ages: number[] = Array.from({ length: 11 }, (_, i) => i); // Array from 0 to 10
  selectedAge: string | null = null; // Initially no age is selected
  vaccineForm: any;
  errorMessage!: string;
  showProgressBar: boolean = false;
  result: string = '';
  minDate: Date;
  dataSource!: any[];
  appointments!: any[];
  displayedColumns: string[] = [ 'child','age','vaccine', 'date', 'reminder'];

  // show hide div variables
  userlogin = true;
  userregister = false;

  // Buttons clicks functionalities
  user_register() {
    this.userlogin = false;
    this.userregister = true;
  }

  user_login() {
    this.userlogin = true;
    this.userregister = false;
  }

  constructor(
    private fb: FormBuilder,
    private parentService: HospitalService,
    public dialog: MatDialog,
    private adminService: BookingService,
    private cdr: ChangeDetectorRef,
    private toaster:ToastrService
  ) {
    this.minDate = new Date();
  }

  ngOnInit(): void {
    this.loadAppointments();
  }
  onSelectionChange() {
    console.log('Selected Age:', this.selectedAge);
    var data:any[]=[];
    this.appointments.forEach(dt=>{
      if(dt.vaccine.vaccineCategory==this.selectedAge){
        data.push(dt)
      }
    })
    this.dataSource=data;
    // Perform any logic based on the selected age here
  }
  sendReminder(childId:number) {
    this.adminService.sendReminder(childId).subscribe(
      (response) => {
        this.toaster.success('Reminder sent successfully');
      },
      (error) => {
        console.error('Error sending reminder:', error);
        this.toaster.error('Error sending reminder:');
      }
    );
  }

  loadAppointments() {
    this.adminService.getAllAppointments().subscribe(
      (appointments) => {
        console.log(appointments)
        this.appointments=appointments;
        this.dataSource = appointments;
      },
      (error) => {
        console.error('Error fetching appointments:', error);
      }
    );
  }
}
