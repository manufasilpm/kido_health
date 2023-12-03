import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ViewBookingsComponent } from '../view-bookings/view-bookings.component';
import { ViewChildVaccinesComponent } from '../view-child-vaccines/view-child-vaccines.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'bookings',
        component: ViewBookingsComponent
    },
    {
        path: 'childVaccines',
        component: ViewChildVaccinesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
