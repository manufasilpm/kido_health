import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponentComponent } from './Components/main/login-screen-component/login-screen-component.component';
import { HomeScreenComponent } from './Components/main/home-screen/home-screen.component';
import { ParentSignupComponent } from './Components/parent/parent-signup/parent-signup.component';
import { HospitalsignupComponent } from './Components/hospital/hospitalsignup/hospitalsignup.component';
import { ParentDashboardComponent } from './Components/parent/parent-view-child/parent-dashboard.component';
import { HospitalDashboardComponent } from './Components/hospital/hospital-dashboard/hospital-dashboard.component';
import { DashboardComponent } from './Components/hospital/layout/dashboard/dashboard.component';
import { AuthGuard } from './shared';
import { LayoutComponent } from './Components/hospital/layout/layout.component';
import { RequestVaccinationComponent } from './Components/hospital/request-vaccination/request-vaccination.component';
import { HospitalViewBookingsComponent } from './Components/hospital/layout/view-bookings/view-bookings.component';
import { AddVaccinationComponent } from './Components/admin/add-vaccination/add-vaccination.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'login', component: LoginScreenComponentComponent},
  { path: 'admin/login', component: LoginScreenComponentComponent},
  { path: 'parentSignup', component: ParentSignupComponent},
  { path: 'HospitalSignup', component: HospitalsignupComponent},
  { path: 'parentViewChild', component: ParentDashboardComponent},
  { path: 'requestVaccine', component: RequestVaccinationComponent},
  { path: 'addVaccine', component: AddVaccinationComponent},
  { path: 'hospitalViewBookings', component: HospitalViewBookingsComponent},
  { path: 'hospitalDashboard', 
    loadChildren: () => import('./Components/hospital/layout/layout.module').then((m) => m.LayoutModule),
  },
  { path: 'parentHome', 
    loadChildren: () => import('./Components/parent/layout/layout.module').then((m) => m.LayoutModule),
  },
  { path: 'adminHome', 
    loadChildren: () => import('./Components/admin/layout/layout.module').then((m) => m.LayoutModule),
  },
// { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
// { path: 'signup', loadChildren: () => import('./signup/signup.module').then((m) => m.SignupModule) },
// {
//     path: 'error',
//     loadChildren: () => import('./server-error/server-error.module').then((m) => m.ServerErrorModule)
// },
// {
//     path: 'access-denied',
//     loadChildren: () => import('./access-denied/access-denied.module').then((m) => m.AccessDeniedModule)
// },
// { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule) },
{ path: '**', redirectTo: 'not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
