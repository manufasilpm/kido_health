import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
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
        throw new Error('Method not implemented.');
    }

    // ngOnInit() {}

    // public closeAlert(alert: any) {
    //     const index: number = this.alerts.indexOf(alert);
    //     this.alerts.splice(index, 1);
    // }
}
