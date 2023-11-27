import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmDialogModel } from 'src/app/models/ConfirmDialogModel';
import { HospitalService } from 'src/app/services/hospital/hospital.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class HospitalViewBookingsComponent implements OnInit {
  vaccineForm: any;
  errorMessage!: string;
  showProgressBar: boolean = false;
  result: string = '';
  minDate: Date ;

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
    private parentService: HospitalService,
    private router:Router,
    public dialog: MatDialog,
  ) {
    this.minDate=new Date()
  }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
   
  }

  onSubmit() {
   
  }
  confirmDialog(): void {
    const message = `Are you completed vaccination for this child?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "350px",
      height:"250px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
    });
  }
}
