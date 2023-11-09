import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent-signup',
  templateUrl: './parent-signup.component.html',
  styleUrls: ['./parent-signup.component.css']
})
export class ParentSignupComponent implements OnInit {
  signupForm: any;
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.signupForm = this.fb.group({
      parentName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
      address: ['',[Validators.minLength(8),Validators.required]],
      phoneNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      // Perform signup logic here
      const formData = this.signupForm.value;
      console.log(formData);
      // You can send the form data to your backend or perform other actions
    } else {
      // Form is invalid, handle accordingly
    }
}}
