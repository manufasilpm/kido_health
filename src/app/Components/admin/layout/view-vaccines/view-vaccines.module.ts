import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../../../shared';
import { ViewVaccinesComponent } from './view-vaccines.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [CommonModule, NgbCarouselModule, NgbAlertModule,MatDatepickerModule,MatTableModule,MatIconModule],
    declarations: [ViewVaccinesComponent]
})
export class ViewVaccinesModule {}

