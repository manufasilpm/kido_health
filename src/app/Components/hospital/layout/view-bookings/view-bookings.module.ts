import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../../../shared';
import { HospitalViewBookingsComponent } from './view-bookings.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
    imports: [CommonModule, NgbCarouselModule, NgbAlertModule,MatDatepickerModule],
    declarations: [HospitalViewBookingsComponent]
})
export class ViewBookingModule {}
