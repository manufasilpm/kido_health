import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../../../shared';
import { AdminViewBookingsComponent } from './view-bookings.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    MatDatepickerModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatNativeDateModule,
  ],
  declarations: [AdminViewBookingsComponent],
})
export class ViewBookingModule {}
