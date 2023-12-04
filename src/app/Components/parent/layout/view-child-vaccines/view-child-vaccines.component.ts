import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogModel } from 'src/app/models/ConfirmDialogModel';
import { Hospital } from 'src/app/models/Hospital';
import { Vaccine } from 'src/app/models/Vaccine';
import { VaccineService } from 'src/app/services/vaccine/vaccineservice.service';
import { ToastrService } from 'ngx-toastr';
import { AdminConfirmDialogComponent } from 'src/app/Components/admin/confirm-dialog/confirm-dialog.component';
import { Appointment } from 'src/app/models/Appointment';
import { ChildService } from 'src/app/services/child/child.service';

@Component({
  selector: 'app-view-vaccines',
  templateUrl: './view-child-vaccines.component.html',
  styleUrls: ['./view-child-vaccines.component.css']
})
export class ViewChildVaccinesComponent implements OnInit {
  receivedChildId: string | null = '';
  receivedChildAge: string | null= '';
  username!: string;
  vaccines!: Vaccine[];
  appontment!:Appointment[];
  appointments!: any[];
  appointmentsColumns = ['appointmentId' /* add more column names */];
  parent_Id!: string;
  constructor(
    private vaccineService: VaccineService,
    private childService: ChildService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private toast: ToastrService
  ) { }

  addNewVaccine() {
    this.router.navigateByUrl("/addVaccine")
  }
  onRowClick(vaccine: Vaccine) {
    if (vaccine.status == "Approved") return
    const message = `Are you verified this vaccine?`;

    const dialogData = new ConfirmDialogModel("Approve Vaccine", message);

    const dialogRef = this.dialog.open(AdminConfirmDialogComponent, {
      width: "350px",
      height: "250px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult == false) return
      vaccine.status = "Approved"
      this.vaccineService.updateVaccineStatus(vaccine).subscribe(
        (data) => {

          this.toast.success("Vaccine updated successfully")
          // this.refreshTable();

        },
        (error) => {
          console.error('Error saving parent:', error);
          this.toast.error("Something went wrong.. Try agian")
        }
      );
    });

  }

  ngOnInit(): void {
    this.receivedChildId = this.route.snapshot.paramMap.get('child');
    this.receivedChildAge = this.route.snapshot.paramMap.get('age');
    this.route.params.subscribe((params) => {
      this.username = params['username'];

    });


    const userId: string | null = localStorage.getItem('user_id');
    this.childService.getChildBookingsByChildId(this.receivedChildId?.toString()).subscribe(
      (data) => {
        this.appointments = data;
        console.log(data);
        this.sortVaccineByAppointmentStatus()
      },
      (error) => {
        console.error('Error getting children:', error);
      }
    );
    
  }

  sortVaccineByAppointmentStatus(){
    this.vaccineService.getVaccinesByAge(this.receivedChildAge).subscribe(
      (data) => {
        data.forEach(element => {
          this.appointments.forEach(apns=>{
            // console.log(element.vaccineId+" "+apns.vaccine.vaccineId+" "+apns);
            // console.log(apns);

            if(element.vaccineId==apns.vaccine.vaccineId){
              element.status=apns.status
            }else{
                element.status="Pending"
            }
          })
        });
        this.vaccines = data;

        // Trigger change detection
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error getting children:', error);
      }
    );
  }


  private refreshTable() {
    const userId: string | null = localStorage.getItem('user_id');

    this.vaccineService.getAllVaccines().subscribe(
      (data) => {
        this.vaccines = data;
        // Trigger change detection
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error getting children:', error);
      }
    );
  }
}
