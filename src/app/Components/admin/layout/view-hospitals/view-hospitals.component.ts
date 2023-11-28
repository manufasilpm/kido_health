import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Hospital } from 'src/app/models/Hospital';
import { ChildService } from 'src/app/services/child/child.service';
import { HospitalService } from 'src/app/services/hospital/hospital.service';
import { ParentserviceService } from 'src/app/services/parent/parentservice.service';

@Component({
  selector: 'app-view-hospitals',
  templateUrl: './view-hospitals.component.html',
  styleUrls: ['./view-hospitals.component.css']
})
export class ViewHospitalsComponent implements OnInit {
  username!: string;
  hospitals!: Hospital[];
  appointments!: any[];
  appointmentsColumns = ['appointmentId' /* add more column names */];
  parent_Id!: string;
  constructor(
    private childService: ChildService,
    private hospitalService: HospitalService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  bookAppointment(child: any) {
    console.log('Book appointment for:', child);
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.username = params['username'];

    });
  

    const userId: string | null = localStorage.getItem('user_id');
    this.hospitalService.getAllHospitals().subscribe(
      (data) => {
        this.hospitals = data;
        
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

    this.hospitalService.getAllHospitals().subscribe(
      (data) => {
        this.hospitals = data;
        // Trigger change detection
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error getting children:', error);
      }
    );
  }
}
