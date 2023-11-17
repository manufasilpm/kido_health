import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponentComponent } from './Components/main/login-screen-component/login-screen-component.component';
import { HomeScreenComponent } from './Components/main/home-screen/home-screen.component';
import { ParentSignupComponent } from './Components/parent/parent-signup/parent-signup.component';
import { HospitalsignupComponent } from './Components/hospital/hospitalsignup/hospitalsignup.component';
import { ParentDashboardComponent } from './Components/parent/parent-dashboard/parent-dashboard.component';
import { HospitalDashboardComponent } from './Components/hospital/hospital-dashboard/hospital-dashboard.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { AuthGuard } from './shared';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'login', component: LoginScreenComponentComponent},
  { path: 'parentSignup', component: ParentSignupComponent},
  { path: 'HospitalSignup', component: HospitalsignupComponent},
  { path: 'parentDashboard', component: ParentDashboardComponent},
  { path: 'hospitalDashboard', 
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
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
