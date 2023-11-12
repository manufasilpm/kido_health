import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/authService/auth.service';
import { JsonpClientBackend } from '@angular/common/http';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login-screen-component',
  templateUrl: './login-screen-component.component.html',
  styleUrls: ['./login-screen-component.component.css'],
})
export class LoginScreenComponentComponent implements OnInit {
  receivedCardType: string | null = '';
  isNewUser: boolean = false;
  loginForm: FormGroup;
  errorMessage!: string;
  showProgressBar: boolean = false;
  

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.receivedCardType = this.route.snapshot.paramMap.get('cardType');
  }
  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Parent | Hospital',
        message: 'Choose the correct option',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'Parent') {
        console.log('User clicked parent ');
      } else {
        console.log('User clicked hospital');
      }
    });
  }
  onSubmit() {
    // this.showProgressBar = true;

    console.log('clicked');
    const formData = this.loginForm.value;
    const user: User = new User(formData.phoneNumber, formData.password);

   

    if (this.loginForm.valid) {
      const username = this.loginForm.get('phoneNumber')?.value;
      const password = this.loginForm.get('password')?.value;

      this.authService.login(user).subscribe(
        (data) => {
          console.log('Login successful:', data);
          console.log(username);

          this.router.navigate(['/parentDashboard', { username }]);
        },
        (error) => {
          console.error('Login failed:', error);

          this.errorMessage = 'Invalid username or password. Please try again.';
          if (
            error.error &&
            error.error.message === 'Invalid username or password'
          ) {
            this.errorMessage = 'Please enter the correct Credentials';
          } else {
            this.errorMessage =
              'An unexpected error occurred. Please try again later.';
          }
        }
      );
    }
  }
}
