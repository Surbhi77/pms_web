import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {

  title = "How it works";
  data:any=[]
  beginvideo:boolean=false;
  initiatevideo:boolean=false
  userType: string;
  constructor(private service:MainService,private router:Router) { }

  ngOnInit(): void {
    this.userType = localStorage.getItem('userType')
    console.log(this.userType)
    if(localStorage.getItem("kdp_survey") != "yes"){
      this.router.navigateByUrl('/kap-survey')
    }
  //   this.service.howitworks().subscribe((res:any)=>{
  //     this.data = res.data;
  //     console.log(res)
  //   })
  // }
  // beginclick(){
  //   this.beginvideo = true;
  // }
  // initiateclick(){
  //   this.initiatevideo =true
   }

}
