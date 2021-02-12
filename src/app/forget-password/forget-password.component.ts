import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MainService } from '../main.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  form:FormGroup;
  formerror: boolean;

  constructor(private fb:FormBuilder,private service:MainService,private toastr: ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.form =  this.fb.group({
     
      username: new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required])
    })
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }
  submit(){
    let formdata = new FormData();
    
    formdata.append('username', this.form.value.username);
    formdata.append('email', this.form.value.email);
    
    this.service.forgetpassword(formdata).subscribe(res=>{
      console.log(res)
      // if(res.data){
      //   this.toastr.info("Login Successfully")
      //   }

       this.toastr.info("forget password Link send on your registered Email id...")
       this.router.navigateByUrl("/login");
    })


 }

}
