import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { NotificationPopupComponent } from '../notification-popup/notification-popup.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  kdp_survey: string;
  kdp_surveyfilled: boolean;
  name: string;
  date:any= new Date();resdata: any;
;

  constructor(private router:Router, private service:MainService,public dialog: MatDialog) { }
  userType:any = []
  ngOnInit(): void {
    if(localStorage.getItem("kdp_survey") != "yes"){
      this.router.navigateByUrl('/kap-survey')
    }
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
   
    if(localStorage.getItem('lastNoti') != this.date.toLocaleDateString()  ){
        this.getNotification();
  
     }
   else{
     if(localStorage.getItem('lastNoti') ==null){
      this.getNotification();
      
     }
        
       
    }
    
  
  }
  getNotification() {
    let formdata = new FormData();
    formdata.append('user_id',localStorage.getItem("doctor_id"));
    this.service.getNotifications(formdata).subscribe( (res:any)=>{
      console.log(res.status);
      this.resdata = res;
      localStorage.setItem("notificationData",JSON.stringify(this.resdata))
      console.log(res)
      if(res.status == 'true'){
        
        localStorage.setItem("lastNoti",this.date.toLocaleDateString())
        this.dialog.open(NotificationPopupComponent, { width:"40%" })
      }
    })
  }
  logout(){
    localStorage.clear();
    // localStorage.removeItem("email");
    // localStorage.removeItem("password");
    // localStorage.removeItem("userType");
    // localStorage.removeItem("doctor_id");
    // localStorage.removeItem("name");
    // localStorage.removeItem("aggrement");
    // localStorage.removeItem("kdp_survey");
    // localStorage.removeItem("notificationData")
    this.router.navigateByUrl('/login')
  }

  
}
