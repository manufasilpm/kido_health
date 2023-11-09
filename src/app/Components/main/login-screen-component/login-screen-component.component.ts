import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-login-screen-component',
  templateUrl: './login-screen-component.component.html',
  styleUrls: ['./login-screen-component.component.css']
})
export class LoginScreenComponentComponent implements OnInit {

  receivedCardType: string | null='';
  isNewUser: boolean = false;

  constructor(private route: ActivatedRoute,private dialog: MatDialog) {}
  
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

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'parent') {
        console.log('User clicked parent ');
      } else {
        console.log('User clicked hospital');
      }
    });
  }

}
