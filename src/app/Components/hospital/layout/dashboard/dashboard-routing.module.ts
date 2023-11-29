import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HospitalViewBookingsComponent } from '../view-bookings/view-bookings.component';
import { ManageSlotComponent } from '../manage-slot/manage-slot.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'bookings',
        component: HospitalViewBookingsComponent
    },
    {
        path: 'mangeSlot',
        component: ManageSlotComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
