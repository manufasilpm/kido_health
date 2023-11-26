import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HospitalService } from 'src/app/services/hospital/hospital.service';

@Component({
  selector: 'app-request-vaccination',
  templateUrl: './request-vaccination.component.html',
  styleUrls: ['./request-vaccination.component.css']
})
export class RequestVaccinationComponent implements OnInit {
  vaccineForm: any;
  errorMessage!: string;
  showProgressBar: boolean = false;

 //show hide div variables
 userlogin = true;
 userregister = false;
 //Buttons clicks functionalities 
 user_register()
 {
   this.userlogin = false;
   this.userregister = true;
 }
 user_login()
 {
   this.userlogin = true;
   this.userregister = false;
 }
  constructor(
    private fb: FormBuilder,
    private parentService: HospitalService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.vaccineForm = this.fb.group({
      vaccinename: ['', Validators.required],
      description: ['', Validators.required],
      agelevel: ['', Validators.required],
    
    });
  }

  onSubmit() {
    // this.showProgressBar = true;
    // const formData = this.signupForm.value;
    // const parent: Hospital = new Hospital(
    //   formData.parentName,
    //   formData.password,
    //   formData.address,
    //   formData.phoneNo
    // );

    // this.parentService.saveParent(parent).subscribe(
    //   (data) => {
    //     console.log('Parent saved successfully:', data);
    //     this.showProgressBar = false;
    //     this.router.navigate(['/login', { cardType: 'parent' }]);

    //   },
    //   (error) => {
    //     console.error('Error saving parent:', error);
    //     this.showProgressBar = false;

    //     if (
    //       error.error &&
    //       error.error === 'Phone number already exists'
    //     ) {
    //       this.errorMessage =
    //         'Phone number already exists. Please choose a different phone number.';
    //     } else {
    //       this.errorMessage =
    //         'An unexpected error occurred. Please try again later.';
    //     }
    //   }
    // );
  }
}
