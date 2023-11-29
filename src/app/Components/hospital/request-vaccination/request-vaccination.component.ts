import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vaccine } from 'src/app/models/Vaccine';
import { HospitalService } from 'src/app/services/hospital/hospital.service';
import { VaccineService } from 'src/app/services/vaccine/vaccineservice.service';

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
    private vaccineService: VaccineService,
    private router:Router,
    private toast:ToastrService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.vaccineForm = this.fb.group({
      vaccinename: ['', Validators.required],
      company: ['', Validators.required],
      description: ['', Validators.required],
      agelevel: ['', Validators.required],
    
    });
  }

  onSubmit() {
    const formData = this.vaccineForm.value;
    if (this.vaccineForm.valid) {

    const vaccine: Vaccine = new Vaccine(
      formData.vaccinename,
      formData.agelevel,
      formData.company,
      formData.description,
      "Pending"
    );

    this.vaccineService.requestVaccine(vaccine).subscribe(
      (data) => {
        
        this.toast.success("Vaccine requested successfully")
        this.showProgressBar = false;
        this.router.navigate(['/hospitalDashboard']);

      },
      (error) => {
        console.error('Error saving parent:', error);
        this.toast.error("Something went wrong.. Try agian")
      }
    );
  }else{
    this.toast.error("Please fill all fields correctly")
  }
}
}
