import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { Child } from 'src/app/models/Child';

@Component({
  selector: 'app-popup-list',
  template: `
  <html>
    <head>
  
    <style>
    /* Styles for the list */
    ul {
      list-style-type: circle; /* Change bullet style (e.g., disc, square, etc.) */
      margin-left: 20px; /* Add margin to the left */
    }
    /* Styles for list items */
    li {
     
      font-family: Arial, sans-serif; /* Change font */
      font-size: 18px; /* Change font size */
      color: darkblue; /* Change text color */
      margin-bottom: 14px; /* Add margin between list items */
    }
     /* Hover effect for list items */
     li:hover { /* Change text color on hover */
      cursor: pointer; 
      color: skyblue;/* Show pointer cursor on hover */
    }
    /* Styles for the heading */
    h2 {
      text-align: center; /* Center-align the text */
      /* Remove default margin */
       /* Set a high z-index to keep it above other elements */
    }
  </style>
    </head>
  </html>
  <div>
    <h2>{{ data.title }}</h2>
  </div>
    <ul>
    <li  *ngFor="let item of data.items" (click)="onItemClick(item)">
    {{ item.name }}
    
  </li >
  </ul>
  `,
})
export class PopupListComponent {
  constructor(
    public dialogRef: MatDialogRef<PopupListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {  title: string; items: Child[] },
    private router:Router
  ) {}

  onItemClick(item: Child) {
    // Handle item click action here
    console.log('Clicked item:', item);
    // You can emit an event, call a function, or perform any action here
    this.router.navigate(["parentHome/childVaccines", { child: item.id ,age:item.age}])
    this.dialogRef.close();

  }
}
