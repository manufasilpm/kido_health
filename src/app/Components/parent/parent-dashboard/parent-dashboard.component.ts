import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ChildService } from 'src/app/services/child/child.service';
import { ParentserviceService } from 'src/app/services/parent/parentservice.service';
import { ChildCreationComponent } from '../../child/child-creation/child-creation.component';

@Component({
  selector: 'app-parent-dashboard',
  templateUrl: './parent-dashboard.component.html',
  styleUrls: ['./parent-dashboard.component.css'],
})
export class ParentDashboardComponent implements OnInit {
  username!: string;
  children!: any[];
  parent_Id!: string;
  constructor(
    private childService: ChildService,
    private parentService: ParentserviceService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  bookAppointment(child: any) {
    // Implement your logic to book a new appointment for the selected child
    console.log('Book appointment for:', child);
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.username = params['username'];
      console.log('Username:', this.username);
    });

    this.parentService.getParentid(this.username).subscribe(
      (parentId) => {
        const numericParentId = +parentId;
        this.parent_Id = parentId;
        console.log(parentId);

        this.childService.getChildrenByParentId(numericParentId).subscribe(
          (data) => {
            this.children = data;
          },
          (error) => {
            console.error('Error getting children:', error);
          }
        );
      },
      (error) => {
        console.error('Error getting parentId:', error);
      }
    );
  }
  addChild(parentNumber: String) {
    console.log(parentNumber);
  }
  openForm() {
    const dialogRef = this.dialog.open(ChildCreationComponent, {
      width: '400px',
      data: { parentId: this.parent_Id }, // Pass the parent ID to ChildCreationComponent
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  
}
