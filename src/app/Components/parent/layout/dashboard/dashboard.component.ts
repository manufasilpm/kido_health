import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupListComponent } from '../child-list-popup/child-list-pop-up.component';
import { Child } from 'src/app/models/Child';
import { ChildService } from 'src/app/services/child/child.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {


    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    public childs:Array<Child>=[]

    constructor(private router: Router,private dialog:MatDialog,private childService:ChildService) {
        this.sliders.push(
            {
                imagePath: 'assets/slider1.jpeg',
                label: 'Kido Health',
                text: 'GET VACCINATED'
            },
            {
                imagePath: 'assets/slider2.jpg',
                label: 'Kido Health',
                text: 'vaccination is the best protection.'
            },
            {
                imagePath: 'assets/slider3.jpg',
                label: 'Kido Health',
                text: 'Vaccination is our collective firebreak when outbreaks happen.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `What are vaccines?
                Vaccines are products that are usually given in childhood to protect against serious, 
                often deadly diseases. By stimulating your body’s natural defenses, 
                they prepare your body to fight the disease faster and more effectively.
                 `
            },
            {
                id: 2,
                type: 'warning',
                message: `How do vaccines work?
                Vaccines help your immune system fight infections more efficiently by sparking your immune response to specific diseases. 
                Then, if the virus or bacteria ever invades your body in the future, 
                your immune system will already know how to fight it.`
            }
        );
    }
    ngOnInit(): void {
        const userId: string | null = localStorage.getItem('user_id');

        this.childService.getChildrenByParentId(userId!).subscribe(
          (data) => {
            this.childs = data;
            console.log(data);
          },
          (error) => {
            console.error('Error getting children:', error);
          }
        );
    }

  openPopup() {
    const dialogRef = this.dialog.open(PopupListComponent, {
      width: '300px',
      data: {
        title: 'CHOOSE YOUR CHILD',
        items: this.childs // Replace this with your list of items
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // You can perform actions after the dialog is closed if needed
    });
  }

    viewChild() {
            this.router.navigate(["/parentViewChild"])
    }

    viewBookings() {
        this.router.navigateByUrl("/parentHome/bookings")
    }
    // ngOnInit() {}

    // public closeAlert(alert: any) {
    //     const index: number = this.alerts.indexOf(alert);
    //     this.alerts.splice(index, 1);
    // }
}
