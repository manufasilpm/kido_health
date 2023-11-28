import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../../../shared';
import { ViewHospitalsComponent } from './view-hospitals.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    imports: [CommonModule, NgbCarouselModule, NgbAlertModule,MatDatepickerModule,MatTableModule],
    declarations: [ViewHospitalsComponent]
})
export class ViewHospitalsModule {}

