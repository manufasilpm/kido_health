import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmDialogModel } from 'src/app/models/ConfirmDialogModel';
import { HospitalService } from 'src/app/services/hospital/hospital.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { SlotService } from 'src/app/services/slot/slot.service';
import { Slot } from 'src/app/models/Slot';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './manage-slot.component.html',
  styleUrls: ['./manage-slot.component.css']
})
export class ManageSlotComponent implements OnInit {

  vaccineForm: any;
  errorMessage!: string;
  showProgressBar: boolean = false;
  result: string = '';
  minDate: Date ;
  myForm = new FormGroup({
    mondayFrom: new FormControl('', [Validators.required]),
    mondayTo: new FormControl('', [Validators.required, Validators.email]),
  });
   userId: string | null = localStorage.getItem('user_id');
 //show hide div variables
 userlogin = true;
 userregister = false;
 monCount:any;
 tueCount:any;
 wenCount:any;
 thuCount:any;
 friCount:any;
 satCount:any;
 sunCount:any;

  mondayFrom: any;
  mondayTo: any;
  tueFrom: any;
  tueTo: any;
  wenFrom: any;
  wenTo: any;
  thuFrom: any;
  thuTo: any;
  friFrom: any;
  friTo: any;
  satFrom: any;
  satTo: any;
  sunFrom: any;
  sunTo: any;
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
    private slotService: SlotService,
    private router:Router,
    public dialog: MatDialog,
    public toast: ToastrService
  ) {
    this.minDate=new Date()
  }

  ngOnInit(): void {

    this.slotService.getSlots(this.userId).subscribe(
      (data) => {
        var slot:Slot[]=data;
        slot.forEach(element => {
          switch(element.dayOfWeek){
            case "MONDAY":{
              this.mondayFrom=element.fromTime
              this.mondayTo=element.toTime
              this.monCount=element.slotCount
              break
            }
            case "TUESDAY":{
              this.tueFrom=element.fromTime
              this.tueTo=element.toTime
              this.tueCount=element.slotCount
              break
            }
            case "WEDNESDAY":{
              this.wenFrom=element.fromTime
              this.wenTo=element.toTime
              this.wenCount=element.slotCount
              break
            }
            case "THURSDAY":{
              this.thuFrom=element.fromTime
              this.thuTo=element.toTime
              this.thuCount=element.slotCount
              break
            }
            case "FRIDAY":{
              this.friFrom=element.fromTime
              this.friTo=element.toTime
              this.friCount=element.slotCount
              break
            }
            case "SATURDAY":{
              this.satFrom=element.fromTime
              this.satTo=element.toTime
              this.satCount=element.slotCount
              break
            }
            case "SUNDAY":{
              this.sunFrom=element.fromTime
              this.sunTo=element.toTime
              this.sunCount=element.slotCount
              break
            }
          }
        });
       
      },
      (error) => {
        console.error('Error getting children:', error);
      }
    );
  }
  

  public updateDay(day:string) {
  
   var fromValue = "";
   var toValue=""; 
   var slotCount=0;
   var dayOfWeek=""
   switch(day){
    case 'mon':{
      fromValue=this.mondayFrom
      toValue=this.mondayTo
      slotCount=this.monCount
      dayOfWeek="MONDAY"
      break
    }
    case 'tue':{
      fromValue=this.tueFrom
      toValue=this.tueTo
      slotCount=this.tueCount
      dayOfWeek="TUESDAY"
      break
    }
    case 'wed':{
      fromValue=this.wenFrom
      toValue=this.wenTo
      slotCount=this.wenCount
      dayOfWeek="WEDNESDAY"
       break
    }
    case 'thu':{
      fromValue=this.thuFrom
      toValue=this.thuTo
      slotCount=this.thuCount
      dayOfWeek="THURSDAY"
      break
    }
    case 'fri':{
      fromValue=this.friFrom
      toValue=this.friTo
      slotCount=this.friCount
      dayOfWeek="FRIDAY"
      break
    }
    case 'sat':{
      fromValue=this.satFrom
      toValue=this.satTo
      slotCount=this.satCount
      dayOfWeek="SATURDAY"
      break
    }
    case 'sun':{
      fromValue=this.sunFrom
      toValue=this.sunTo
      slotCount=this.sunCount
      dayOfWeek="SUNDAY"
      break
    }
   }
   var slot= new Slot(
    this.userId,
    slotCount,
    dayOfWeek,
    fromValue,
    toValue
  )
   this.slotService.updateSlot(slot).subscribe(
    (data) => {
      console.log('Success saving parent:');

      this.toast.success("Slot updated successfully")
    },
    (error) => {
      console.error('Error saving parent:', error);
      this.toast.error("Something went wrong.. Try agian")
    }
  );
    
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
