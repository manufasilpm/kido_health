import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ChildService } from 'src/app/services/child/child.service';
import { ParentserviceService } from 'src/app/services/parent/parentservice.service';
import { ChildCreationComponent } from '../../child/child-creation/child-creation.component';
import { BookingPopUpComponent } from '../booking-pop-up/booking-pop-up.component';

@Component({
  selector: 'app-parent-dashboard',
  templateUrl: './parent-dashboard.component.html',
  styleUrls: ['./parent-dashboard.component.css'],
})
export class ParentDashboardComponent implements OnInit {
  username!: string;
  children!: any[];
  appointments!: any[];
  appointmentsColumns = ['appointmentId' /* add more column names */];
  parent_Id!: string;
  constructor(
    private childService: ChildService,
    private parentService: ParentserviceService,
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

    this.childService.getChildrenByParentId(userId!).subscribe(
      (data) => {
        this.children = data;
      },
      (error) => {
        console.error('Error getting children:', error);
      }
    );
  }

  openForm() {
    const dialogRef = this.dialog.open(ChildCreationComponent, {
      width: '400px',
      data: { parentId: this.parent_Id }, // Pass the parent ID to ChildCreationComponent
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.refreshTable();
      console.log('The dialog was closed');
    });
  }
  openBookingForm(childName: string, childId: number,age:string) {
    console.log(childId, 'hey ');

    const dialogRef = this.dialog.open(BookingPopUpComponent, {
      width: '400px',
      data: { childName: childName, childId: childId,age:age },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.refreshTable();
      console.log('The dialog was closed');
    });
  }

  private refreshTable() {
    const userId: string | null = localStorage.getItem('user_id');

    this.childService.getChildrenByParentId(userId!).subscribe(
      (data) => {
        this.children = data;
        
        // Trigger change detection
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error getting children:', error);
      }
    );
  }

}
