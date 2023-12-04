import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AdminViewBookingsComponent } from '../view-bookings/view-bookings.component';
import { ViewHospitalsComponent } from '../view-hospitals/view-hospitals.component';
import { ViewVaccinesComponent } from '../view-vaccines/view-vaccines.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'bookings',
        component: AdminViewBookingsComponent
    },
    {
        path: 'hospitals',
        component: ViewHospitalsComponent
    },
    {
        path: 'vaccines',
        component: ViewVaccinesComponent
    },
    {
        path: 'reminders',
        component: ViewVaccinesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
