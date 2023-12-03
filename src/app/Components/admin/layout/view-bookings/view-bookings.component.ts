import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmDialogModel } from 'src/app/models/ConfirmDialogModel';
import { HospitalService } from 'src/app/services/hospital/hospital.service';
import { AdminConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { BookingService } from 'src/app/services/booking/booking.service';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css'],
})
export class AdminViewBookingsComponent implements OnInit {
  vaccineForm: any;
  errorMessage!: string;
  showProgressBar: boolean = false;
  result: string = '';
  minDate: Date;
  dataSource!: any[];

  displayedColumns: string[] = ['hospital', 'child','age','vaccine', 'date', 'reminder'];

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
    private adminService: BookingService
  ) {
    this.minDate = new Date();
  }

  ngOnInit(): void {
    this.loadAppointments();
  }

  sendReminder(childId:number) {
    this.adminService.sendReminder(childId).subscribe(
      (response) => {
        console.log('Reminder sent successfully:', response);
       
      },
      (error) => {
        console.error('Error sending reminder:', error);
        
      }
    );
    
  }

  loadAppointments() {
    this.adminService.getAllAppointments().subscribe(
      (appointments) => {
        this.dataSource = appointments;
      },
      (error) => {
        console.error('Error fetching appointments:', error);
      }
    );
  }
}
