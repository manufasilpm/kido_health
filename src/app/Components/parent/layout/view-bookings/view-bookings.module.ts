import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../../../shared';
import { ViewBookingsComponent } from './view-bookings.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { DateFormatPipe } from 'src/app/Components/DateFomatPipe';

@NgModule({
    imports: [CommonModule, NgbCarouselModule, NgbAlertModule,MatDatepickerModule,MatTableModule],
    declarations: [ViewBookingsComponent,DateFormatPipe]
})
export class ViewBookingModule {}

