import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmDialogModel } from 'src/app/models/ConfirmDialogModel';
import { HospitalService } from 'src/app/services/hospital/hospital.service';
import { AdminConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class AdminViewBookingsComponent implements OnInit {

  vaccineForm: any;
  errorMessage!: string;
  showProgressBar: boolean = false;
  result: string = '';
  minDate: Date ;
  dataSource!: any[];

  displayedColumns: string[] = ['hospital', 'vaccine', 'date', 'reminder'];

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
  ) {
    this.minDate = new Date();
    this.dataSource = this.appointments; // Initialize dataSource here
  }

  ngOnInit(): void {
    // Removed initialization of dataSource from here
  }

  // Rest of your component...

  appointments = [
    {
      id: 5,
      hospital: {
        hospitalId: 353,
        hospitalName: 'mims',
        location: 'qwertyuiop',
        phoneNo: '0987654345',
        password: '123456',
        vaccine: [],
      },
      vaccine: {
        vaccineId: 2,
        vaccineName: 'New Vaccine',
        vaccineCategory: 'child',
        company: 'abc',
        description: 'dsdfsffgfg',
        status: 'approved',
      },
      appointmentDate: '2023-11-27T18:30',
    },
    // additional appointments
  ];


  openBookingForm() {
     
    }

   
}