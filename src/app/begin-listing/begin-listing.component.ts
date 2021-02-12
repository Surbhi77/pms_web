import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MainService } from '../main.service';

@Component({
  selector: 'app-begin-listing',
  templateUrl: './begin-listing.component.html',
  styleUrls: ['./begin-listing.component.css']
})
export class BeginListingComponent implements OnInit {

  form: FormGroup ;
  beginlist:any[];
  begindraftlist:any[];
  show: boolean;
  beginshow: boolean;
 

  constructor(  private fb:FormBuilder,
    private router: Router,
    private route: ActivatedRoute,private service:MainService,private toastr: ToastrService) { }

  ngOnInit(): void {
    if(localStorage.getItem("kdp_survey") != "yes"){
      this.router.navigateByUrl('/kap-survey')
    }
    this.form = this.fb.group({
      user_id: new FormControl('')
    })
    var formData: any = new FormData();
    //formData.append('user_id', '4');
    formData.append("user_id",JSON.parse(localStorage.getItem('doctor_id')));

    console.log(localStorage.getItem('doctor_id'))
  
    this.service.beginListing(formData).subscribe((res:any) => {
      this.beginlist =res.data
      if(res.message == "No Data Found"){
        this.show = true
      }
      else{
        this.show = false
      }
      console.log(res.data)
    })
   
    //formData.append('user_id', '0');
    formData.append("user_id",JSON.parse(localStorage.getItem('doctor_id')));
    formData.append("status",'1')
    console.log(localStorage.getItem('doctor_id'))
  
    this.service.beginDraftListing(formData).subscribe((res:any) => {
      this.begindraftlist =res.data
      if(res.message == "No Data Found"){
        this.beginshow = true
      }
      else{
        this.beginshow = false
      }
      console.log(res.data)
    })


  }
  deletedata(ids,i){
    if(window.confirm("Are You sure ?")){
   let formdata= new FormData();
   formdata.append('id',ids)
   console.log(ids)
    this.service.beginDraftDelete(formdata).subscribe((result=>{
      console.log(result)
      this.toastr.info("Data Deleted successfully")
      this.begindraftlist.splice(i,1)
    }))
  
  }
 



}}
