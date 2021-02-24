import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrutions',
  templateUrl: './instrutions.component.html',
  styleUrls: ['./instrutions.component.css']
})
export class InstrutionsComponent implements OnInit {
  instructions:any=[];

  constructor(private service:MainService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("kdp_survey") != "yes"){
      this.router.navigateByUrl('/kap-survey')
    }
    // this.service.instructions().subscribe(res=>{
    //   this.instructions = res
    //   console.log(res)
    // })
  }

}
