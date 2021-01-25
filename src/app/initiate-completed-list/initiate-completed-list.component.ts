import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private service:MainService,private _formBuilder:FormBuilder,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      user_id : new FormControl(''),
      status :new FormControl(''),
      id:new FormControl('')
    })
    const formdata = new FormData();
    formdata.append('user_id',JSON.parse(localStorage.getItem('user_id')));
    formdata.append('status','1')
     console.log(formdata)
    this.service.initiateList(formdata).subscribe((res:any)=>{
      console.log(res)
      this.datalist = res.data 
      },
      err=>{
        console.log(err)
      })
     
      formdata.append('user_id',JSON.parse(localStorage.getItem('user_id')));
      formdata.append('status','1')
     
      this.service.draftList(formdata).subscribe((res:any)=>{
        console.log(res)
        this.draftdata = res.data
      })   
  }

 
  delete(id:any,i){
    const formdata:any = new FormData()
    formdata.append('id',id)
    console.log(id)
    this.service.deleteDraftdata(formdata).subscribe((res:any)=>{
      console.log(res)
  
      console.log(i)
        this.draftdata.splice(i,1)
       
    })
  }

  

}


  

