import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { MainService } from '../main.service';

@Component({
  selector: 'app-initiate-completed-list',
  templateUrl: './initiate-completed-list.component.html',
  styleUrls: ['./initiate-completed-list.component.css']
})
export class InitiateCompletedListComponent implements OnInit {
  datalist:any = []
  draftdata:any=[]
  firstFormGroup: FormGroup;
  ids:any={};
  data: any = [];
  deletedata: boolean;
  draftview: any =[];
  show: boolean;
  draftshow: boolean;
  approve: boolean;
  rejected: boolean;
  constructor(private service:MainService,private _formBuilder:FormBuilder,private toastr: ToastrService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(localStorage.getItem("kdp_survey") != "yes"){
      this.router.navigateByUrl('/kap-survey')
    }
    this.firstFormGroup = this._formBuilder.group({
      user_id : new FormControl(''),
      status :new FormControl(''),
      id:new FormControl('')
    })
    const formdata = new FormData();
    formdata.append('user_id',JSON.parse(localStorage.getItem('doctor_id')));
    formdata.append('status','1')
     console.log(formdata)
    this.service.initiateList(formdata).subscribe((res:any)=>{
      console.log(res)
      this.datalist = res.data 
      console.log(res['data'].helpcenter_status)
      if(res.message == "No Data Found"){
        this.show = true
      }
      else{
        this.show = false
      }
      // if(this.datalist.helpcenter_status == 'Approve'){
      //    this.approve = true;
      // }
      // else{
      // this.approve = false
      // }
      // if(this.datalist.helpcenter_status == 'Rejected'){
      //   this.rejected = true
      // }
      // else{
      //   this.rejected = false
      // }
      },
      err=>{
        console.log(err)
      })
     
      formdata.append('user_id',JSON.parse(localStorage.getItem('doctor_id')));
      formdata.append('status','1')
     
      this.service.draftList(formdata).subscribe((res:any)=>{
        console.log(res)
        this.draftdata = res.data
        if(res.message == "No Data Found"){
         this.draftshow = true
        }
        else{
          this.draftshow = false
        }
      })   
  }

 
  delete(id:any,i){
    const formdata:any = new FormData()
    formdata.append('id',id)
    console.log(id)
    this.service.deleteDraftdata(formdata).subscribe((res:any)=>{
      console.log(res)
      this.toastr.success("Data Deleted successfully")
      console.log(i)
        this.draftdata.splice(i,1)
       
    })
  }

  

}


  

