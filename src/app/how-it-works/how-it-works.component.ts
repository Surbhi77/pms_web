import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

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
  constructor(private service:MainService) { }

  ngOnInit(): void {
    this.service.howitworks().subscribe((res:any)=>{
      this.data = res.data;
      console.log(res)
    })
  }
  beginclick(){
    this.beginvideo = true;
  }
  initiateclick(){
    this.initiatevideo =true
  }

}
