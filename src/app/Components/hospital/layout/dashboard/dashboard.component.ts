import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor(private router:Router) {
        this.sliders.push(
            {
                imagePath: 'assets/hospital1.png',
                label: 'Kido Health',
                text: 'GET VACCINATED'
            },
            {
                imagePath: 'assets/hospital2.png',
                label: 'Kido Health',
                text: 'vaccination is the best protection.'
            },
            {
                imagePath: 'assets/hospital3.png',
                label: 'Kido Health',
                text: 'Vaccination is our collective firebreak when outbreaks happen.'
            }
        );

       
    }
    ngOnInit(): void {
    }
    requestVaccine() {
            this.router.navigateByUrl("/requestVaccine")
    }
    
    viewBookings() {
            this.router.navigateByUrl("/hospitalDashboard/bookings")
    }
    // ngOnInit() {}

    // public closeAlert(alert: any) {
    //     const index: number = this.alerts.indexOf(alert);
    //     this.alerts.splice(index, 1);
    // }
}
