import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  kdp_survey: string;
  kdp_surveyfilled: boolean;
  name: string;

  constructor(private router:Router) { }
  userType:any = []
  ngOnInit(): void {
    this.userType = localStorage.getItem('userType')
    this.name = localStorage.getItem('name')
    this.kdp_survey = localStorage.getItem('kdp_survey')
    console.log(this.userType)
    if(this.kdp_survey=='yes'){
      this.kdp_surveyfilled = true
    }
    else{
      this.kdp_surveyfilled = false
    }
  
  }
  logout(){
    localStorage.removeItem('userType')
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    this.router.navigateByUrl('/login')
  }

  
}
