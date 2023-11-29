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
    private hospitalService: HospitalService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.signupForm = this.fb.group({
      hospitalName: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
        ],
      ],
      address: ['', [Validators.minLength(8), Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  onSubmit() {
    this.showProgressBar = true;
    const formData = this.signupForm.value;
    const hospital: Hospital = new Hospital(
      formData.hospitalName,
      formData.password,
      formData.address,
      formData.phoneNumber
    );

    this.hospitalService.saveHospital(hospital).subscribe(
      (data) => {
        console.log('Parent saved successfully:', data);
        this.showProgressBar = false;
        this.router.navigate(['/login', { cardType: 'hospital' }]);

      },
      (error) => {
        console.error('Error saving parent:', error);
        this.showProgressBar = false;

        if (
          error.error &&
          error.error === 'Phone number already exists'
        ) {
          this.errorMessage =
            'Phone number already exists. Please choose a different phone number.';
        } else {
          this.errorMessage =
            'An unexpected error occurred. Please try again later.';
        }
      }
    );
  }
}
