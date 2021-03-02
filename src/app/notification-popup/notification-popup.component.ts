import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.css']
})
export class NotificationPopupComponent implements OnInit {
  message: any=[];

  constructor(public dialog: MatDialog,public dialogRef: MatDialogRef<NotificationPopupComponent>) { }

  ngOnInit(): void {
    this.message = JSON.parse(localStorage.getItem("notificationData"))
    console.log( this.message)
  }

}
