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
    formData.append('user_id', '6');
    this.service.beginListing(formData).subscribe((res:any) => {
      this.beginlist =res.data
      console.log(res.data)
    })
   
    formData.append('user_id', '4');
    //formData.append('user_id', '6');
    this.service.beginDraftListing(formData).subscribe((res:any) => {
      this.begindraftlist =res.data
      console.log(res.data)
    })


  }
  
 



}
