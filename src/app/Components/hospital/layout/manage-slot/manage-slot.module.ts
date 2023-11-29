import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ManageSlotComponent } from './manage-slot.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
    imports: [CommonModule, NgbCarouselModule, NgbAlertModule,MatDatepickerModule],
    declarations: [ManageSlotComponent]
})
export class ManageSlotModule {}

