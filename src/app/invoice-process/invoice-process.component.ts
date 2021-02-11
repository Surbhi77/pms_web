import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-process',
  templateUrl: './invoice-process.component.html',
  styleUrls: ['./invoice-process.component.css']
})
export class InvoiceProcessComponent implements OnInit {

  form:FormGroup
  constructor(private fb:FormBuilder, private router:Router) { }
  ngOnInit(): void {
    if(localStorage.getItem("kdp_survey") != "yes"){
      this.router.navigateByUrl('/kap-survey')
    }
    this.form = this.fb.group({
      mobile: new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      declare:new FormControl('',[Validators.required])
    })
  }
  
  get g() {
    return this.form.controls;
  }
  submit(val:any){
    if(this.form.valid){
      
    localStorage.setItem('mobile',this.form.value.mobile)
    this.router.navigateByUrl('/begin')
   
    }
    else{
      console.log("not valid")
      this.form.markAllAsTouched()
    }
  }

}
