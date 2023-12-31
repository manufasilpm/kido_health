import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { HomeScreenComponent } from './Components/main/home-screen/home-screen.component';
import { LoginScreenComponentComponent } from './Components/main/login-screen-component/login-screen-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationDialogComponent } from './Components/main/confirmation-dialog/confirmation-dialog.component';
import { ParentSignupComponent } from './Components/parent/parent-signup/parent-signup.component';
import { HospitalsignupComponent } from './Components/hospital/hospitalsignup/hospitalsignup.component';
import { ParentDashboardComponent } from './Components/parent/parent-dashboard/parent-dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { ChildCreationComponent } from './Components/child/child-creation/child-creation.component';
import { HospitalDashboardComponent } from './Components/hospital/hospital-dashboard/hospital-dashboard.component';
import { BookingPopUpComponent } from './Components/parent/booking-pop-up/booking-pop-up.component';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    LoginScreenComponentComponent,
    ConfirmationDialogComponent,
    ParentSignupComponent,
    HospitalsignupComponent,
    ParentDashboardComponent,
    ChildCreationComponent,
    HospitalDashboardComponent,
    BookingPopUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatTableModule,
    MatRadioModule ,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
