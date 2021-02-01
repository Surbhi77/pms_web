import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-rate-popup',
  templateUrl: './rate-popup.component.html',
  styleUrls: ['./rate-popup.component.css']
})
export class RatePopupComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
