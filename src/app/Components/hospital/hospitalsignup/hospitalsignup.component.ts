import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hospital } from 'src/app/models/Hospital';
import { HospitalService } from 'src/app/services/hospital/hospital.service';

@Component({
  selector: 'app-hospitalsignup',
  templateUrl: './hospitalsignup.component.html',
  styleUrls: ['./hospitalsignup.component.css']
})
export class HospitalsignupComponent implements OnInit {
  signupForm: any;
  errorMessage!: string;
  showProgressBar: boolean = false;

  constructor(
    private fb: FormBuilder,
    private parentService: HospitalService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.signupForm = this.fb.group({
      parentName: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
        ],
      ],
      address: ['', [Validators.minLength(8), Validators.required]],
      phoneNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
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
