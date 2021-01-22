import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
   
  userType:any = [];
  ngOnInit(): void {
    this.userType = localStorage.getItem('userType')
    console.log(this.userType)
  }
  
}
