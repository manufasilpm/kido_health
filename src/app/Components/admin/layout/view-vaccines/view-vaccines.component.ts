import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogModel } from 'src/app/models/ConfirmDialogModel';
import { Hospital } from 'src/app/models/Hospital';
import { Vaccine } from 'src/app/models/Vaccine';
import { VaccineService } from 'src/app/services/vaccine/vaccineservice.service';
import { AdminConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-vaccines',
  templateUrl: './view-vaccines.component.html',
  styleUrls: ['./view-vaccines.component.css']
})
export class ViewVaccinesComponent implements OnInit {
 
  username!: string;
  vaccines!: Vaccine[];
  appointments!: any[];
  appointmentsColumns = ['appointmentId' /* add more column names */];
  parent_Id!: string;
  constructor(
    private vaccineService: VaccineService,
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

  onDelete(vaccine: Vaccine) {
    const message = `Are you sure to delete this vaccine?`;

    const dialogData = new ConfirmDialogModel("Delete Vaccine", message);
    const dialogRef = this.dialog.open(AdminConfirmDialogComponent, {
      width: "350px",
      height: "250px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult == false) return
      this.vaccineService.deleteVaccine(vaccine.vaccineId).subscribe(
        (data) => {

          this.toast.success("Vaccine deleted successfully")
           this.refreshTable();

        },
        (error) => {
          console.error('Error saving parent:', error);
          this.toast.error("Something went wrong.. Try agian")
        }
      );
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.username = params['username'];

    });


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
