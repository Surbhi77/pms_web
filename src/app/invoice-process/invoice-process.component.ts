import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MainService } from '../main.service';

@Component({
  selector: 'app-invoice-process',
  templateUrl: './invoice-process.component.html',
  styleUrls: ['./invoice-process.component.css']
})
export class InvoiceProcessComponent implements OnInit {

  form:FormGroup
  checked: boolean;
  constructor(private fb:FormBuilder, private router:Router, private toastr: ToastrService, private service:MainService) { }
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
  public hasError = (controlName: string, errorName: string) => {
    
    return this.form.controls[controlName].hasError(errorName);
  }
  checkMobile(){
    let formdata = new FormData();
    formdata.append('mobile',this.form.value.mobile);
    formdata.append('user_type',localStorage.getItem('userType'));
    this.service.checkMobile(formdata).subscribe((res:any)=>{
      console.log(res);
      if(res.message == 'Already exists'){
        this.toastr.error("Mobile Number already exists")
      
      }else{
        localStorage.setItem('mobile',this.form.value.mobile)
        if(localStorage.getItem('userType')!= "i"){
          this.router.navigateByUrl("/begin")
        }else{
          this.router.navigateByUrl('/add-entry')
          
        }
      }
    })
  }
  tnc($event){
    if($event.checked){
      this.checked =true
    }else{
      this.checked = false
    }
  }
  submit(){
    if(this.form.valid && this.checked){
      this.checkMobile();
    }
    else{
      this.toastr.error("Please fill all the fields")
      this.form.markAllAsTouched()
    }
  }


}
