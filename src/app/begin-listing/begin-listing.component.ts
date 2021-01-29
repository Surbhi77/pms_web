import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
 

  constructor(  private fb:FormBuilder,
    private router: Router,
    private route: ActivatedRoute,private service:MainService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      user_id: new FormControl('')
    })
    var formData: any = new FormData();
    //formData.append('user_id', '4');
    formData.append("user_id",JSON.parse(localStorage.getItem('doctor_id')));

    console.log(localStorage.getItem('doctor_id'))
  
    this.service.beginListing(formData).subscribe((res:any) => {
      this.beginlist =res.data
      console.log(res.data)
    })
   
    //formData.append('user_id', '0');
    formData.append("user_id",JSON.parse(localStorage.getItem('doctor_id')));
    formData.append("status",'1')
    console.log(localStorage.getItem('doctor_id'))
  
    this.service.beginDraftListing(formData).subscribe((res:any) => {
      this.begindraftlist =res.data
      console.log(res.data)
    })


  }
  deletedata(ids,i){
    if(window.confirm('Are sure you want to delete this item ?')){
   let formdata= new FormData();
   formdata.append('id',ids)
   console.log(ids)
    this.service.beginDraftDelete(formdata).subscribe((result=>{
      console.log(result)
      console.log("data delete sucessfullly !")
      this.begindraftlist.splice(i,1)
    }))
  }
  
 



}}
