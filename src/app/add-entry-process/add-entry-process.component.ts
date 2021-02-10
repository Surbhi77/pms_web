import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-entry-process',
  templateUrl: './add-entry-process.component.html',
  styleUrls: ['./add-entry-process.component.css']
})
export class AddEntryProcessComponent implements OnInit {
 
  form:FormGroup;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  constructor(private fb:FormBuilder, private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    if(localStorage.getItem("kdp_survey") != "yes"){
      this.router.navigateByUrl('/kap-survey')
    }
 this.form = this.fb.group({
   mobile: new FormControl('',[Validators.required, Validators.pattern(this.mobNumberPattern)]),
   declare:new FormControl('',[Validators.required])
 })
  }
  public hasError = (controlName: string, errorName: string) => {
    
    return this.form.controls[controlName].hasError(errorName);
  }
  get g() {
    return this.form.controls;
  }
  submit(val:any){
    if(this.form.valid){
      
    localStorage.setItem('mobile',this.form.value.mobile)
    this.router.navigateByUrl('/add-entry')
    this.toastr.info("Form submitted successfully")
    }
    else{
      console.log("not valid")
      this.toastr.error("Please fill all the fields")
      this.form.markAllAsTouched()
    }
  }

}
