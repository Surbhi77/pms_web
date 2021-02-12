import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  form:FormGroup;
  formerror: boolean = false;
  constructor(private fb:FormBuilder,private router:Router, private service:MainService,private toastr: ToastrService) { }
   
  ngOnInit(): void {
    if(localStorage.getItem("kdp_survey") != "yes"){
      this.router.navigateByUrl('/kap-survey')
    }
    this.form =  this.fb.group({
      old_pass: new FormControl('',[Validators.required]),
      new_pass: new FormControl('',[Validators.required]),
      cnew_pass:new FormControl('',[Validators.required])
    })
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }
  submit(){
     let formdata = new FormData();
     formdata.append("user_id", JSON.parse(localStorage.getItem('doctor_id')))
     formdata.append('old_pass', this.form.value.old_pass);
     formdata.append('new_pass', this.form.value.new_pass);
     if(this.form.value.cnew_pass != this.form.value.new_pass){
      alert("new pass and cpass is not matched")
      this.formerror = true
     }
     else{
      formdata.append('cnew_pass', this.form.value.cnew_pass);
      this.formerror = false
     }
     this.service.changePass(formdata).subscribe(res=>{
       console.log(res)

        this.toastr.info("password change successfully")
        this.router.navigateByUrl('/dashboard')
     })


  }
}
