import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  kdp_survey: any;
  kdp_surveyfilled: boolean;

  constructor(private router:Router) { }
  isChecked:boolean;
  userType:any = [];
  ngOnInit(): void {
    this.userType = localStorage.getItem('userType')
    console.log(this.userType)
    this.kdp_survey = localStorage.getItem('kdp_survey')
    if(this.kdp_survey=='yes'){
      this.kdp_surveyfilled = true

    }
    else{
      this.kdp_surveyfilled = false
      this.router.navigateByUrl('/kap-survey')
    }

  }
  
  sideClick(element){
    this.isChecked=false;
  }
  
  navbarhide(){
    this.isChecked=true;

  }
  logout(){
     localStorage.clear();
    //  localStorage.removeItem("email");
    //  localStorage.removeItem("password");
    //  localStorage.removeItem("userType");
    //  localStorage.removeItem("doctor_id");
    //  localStorage.removeItem("name");
    //  localStorage.removeItem("aggrement");
    //  localStorage.removeItem("kdp_survey");
    //  localStorage.removeItem("notificationData")
     this.router.navigateByUrl('/login')
   }
  
}
