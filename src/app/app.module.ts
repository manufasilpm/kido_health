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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeScreenComponent } from './Components/main/home-screen/home-screen.component';
import { LoginScreenComponentComponent } from './Components/main/login-screen-component/login-screen-component.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationDialogComponent } from './Components/main/confirmation-dialog/confirmation-dialog.component';
import { ParentSignupComponent } from './Components/parent/parent-signup/parent-signup.component';
import { HospitalsignupComponent } from './Components/hospital/hospitalsignup/hospitalsignup.component';
import { ParentDashboardComponent } from './Components/parent/parent-view-child/parent-dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { ChildCreationComponent } from './Components/child/child-creation/child-creation.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
import { HospitalDashboardComponent } from './Components/hospital/hospital-dashboard/hospital-dashboard.component';
import { BookingPopUpComponent } from './Components/parent/booking-pop-up/booking-pop-up.component';
import { MatSelectModule } from '@angular/material/select';
import { AuthGuard } from './shared/guard/auth.guard';
import { ViewBookingsComponent } from './Components/parent/view-bookings/view-bookings.component';
import { HeaderComponent } from './Components/parent/parent-view-child/header/header.component';
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
    ViewBookingsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule,
    MessagesModule,
    MatTableModule,
    MatRadioModule ,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    NoopAnimationsModule,
    MatSnackBarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    MatSelectModule
  ],
  providers: [MessageService,ToastrService,AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
