import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponentComponent } from './Components/main/login-screen-component/login-screen-component.component';
import { HomeScreenComponent } from './Components/main/home-screen/home-screen.component';
import { ParentSignupComponent } from './Components/parent/parent-signup/parent-signup.component';
import { HospitalsignupComponent } from './Components/hospital/hospitalsignup/hospitalsignup.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'login', component: LoginScreenComponentComponent},
  { path: 'parentSignup', component: ParentSignupComponent},
  { path: 'HospitalSignup', component: HospitalsignupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
