import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/authService/auth.service';
import { JsonpClientBackend } from '@angular/common/http';
import { User } from 'src/app/models/User';
import { routerTransition } from 'src/app/router.animations';
import { ToastrService } from 'ngx-toastr';
import { ParentserviceService } from 'src/app/services/parent/parentservice.service';
import { NotificationService } from 'src/app/notification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-screen-component',
  templateUrl: './login-screen-component.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginScreenComponentComponent implements OnInit {
  receivedCardType: string | null = '';
  isNewUser: boolean = false;
  loginForm: FormGroup;
  errorMessage!: string;
  showProgressBar: boolean = false;
  showRegister: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private notifyService: NotificationService
  ) {
    this.loginForm = this.fb.group({
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.receivedCardType = this.route.snapshot.paramMap.get('cardType');
    this.showRegister = this.receivedCardType != "admin"
  }
  openConfirmationDialog(): void {
    if (this.receivedCardType == "parent") {
      this.router.navigate(['/parentSignup']);
    } else {
      this.router.navigate(['/HospitalSignup']);
    }
  }
  onSubmit() {
    // this.showProgressBar = true;

    console.log('clicked');
    const formData = this.loginForm.value;
    const user: User = new User(formData.phoneNumber, formData.password);
    var userObserver: Observable<User> = this.authService.login(user)
    switch (this.receivedCardType) {
      case "admin": {
        if(user.phoneNumber=="9745146634"&&user.password=="admin"){
          this.notifyService.showSuccess("", "Login Success")
          this.router.navigate(['/adminHome']);
        }else{
          this.notifyService.showError("Please check your credentials", "Login Failed")
        }
        return;
      }
      case "parent": {
        userObserver = this.authService.login(user)
        break;
      }
      case "hospital": {
        userObserver = this.authService.hospitalLogin(user)
        break;
      }

    }


    if (this.loginForm.valid) {
      const username = this.loginForm.get('phoneNumber')?.value;
      const password = this.loginForm.get('password')?.value;

      userObserver.subscribe(
        (response) => {
          // console.log('Login successful:', data);
          // console.log(username);
          const parentId = response.parentId;


          this.authService.setUserId(parentId.toString());
          console.log("Card Type" + this.receivedCardType)
          this.notifyService.showSuccess("", "Login Success")
          if (this.receivedCardType == "parent") {
            this.router.navigate(['/parentHome', { username }]);
          } else {
            this.router.navigate(['/hospitalDashboard', { username }]);
          }
        },
        (error) => {
          console.error('Login failed:', error);
          this.notifyService.showError("Please check your credentials", "Login Failed")

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
