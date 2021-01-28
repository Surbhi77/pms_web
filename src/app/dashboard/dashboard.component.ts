import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }
  userType:any = []
  ngOnInit(): void {
    this.userType = localStorage.getItem('userType')
    console.log(this.userType)
  }
  logout(){
    localStorage.removeItem('userType')
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    this.router.navigateByUrl('/login')
  }

}
