import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { TermsCheckingComponent } from '../terms-checking/terms-checking.component';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  loginForm:FormGroup;
  userType:any = [];
  model:string;
  agrredata: any=[];
  //dialog: any;
 // invalidLogin: boolean = false;

  constructor(private service:MainService, private fb:FormBuilder, private router:Router, public dialog: MatDialog,private toastr: ToastrService ) { }

  ngOnInit(): void {
    
  
    this.loginForm = this.fb.group({
      email: new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      user_id:new FormControl(''),
      gst: new FormControl('')
    })
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }
 
  userlogin(){
   
    if(this.loginForm.valid){
      let formdata = new FormData()
      
     
      localStorage.setItem('email' , this.loginForm.value.email);
      localStorage.setItem('password' , this.loginForm.value.password);
     

      formdata.append("email", this.loginForm.value.email);
      formdata.append('password',this.loginForm.value.password)
   
      console.log(formdata)
      this.service.login(formdata).subscribe((res:any)=>{
      this.userType = res.data
      console.log(res)
      console.log(this.userType)
      // localStorage.setItem('userType', this.userType.type)
      // localStorage.setItem('user_id', this.userType.doctor_id)
      // this.router.navigateByUrl('/kap-survey')
      if(res && res.data){
      localStorage.setItem('userType', this.userType.type)   
      localStorage.setItem('doctor_id',this.userType.doctor_id)
      localStorage.setItem('name',this.userType.name)
      console.log(this.userType.name)
      console.log(this.userType.doctor_id)
      console.log(this.loginForm.value)
      formdata.append("user_id", this.userType.doctor_id)
      this.service.check_terms(formdata).subscribe((res:any) => {
        console.log(res)
        this.agrredata = res.data
        if(res.data){
        this.toastr.success("Login Successfully")
        }
        console.log(this.agrredata)
        localStorage.setItem("aggrement",this.agrredata.aggrement);
        localStorage.setItem("kdp_survey",this.agrredata.kdp_survey);
       
        
        if(this.agrredata.aggrement == 'no'){
          // const dialogConfig:any = new MatDialogConfig();
          // dialogConfig.disableClose = true;
          // this.dialog.open(TermsCheckingComponent,{width: '40%'});   
          this.dialog.open(TermsCheckingComponent, { disableClose: true, width:"40%" })
        }else{
         this.router.navigateByUrl('/kap-survey');
        }
        if(this.agrredata.kdp_survey == 'no'){
          this.router.navigateByUrl('/kap-survey');
        }else{
          this.router.navigateByUrl('/dashboard');

        }
      }, err=>{
        console.log(err)
        this.toastr.error("Email and password does not match")
      })}
    else{
      this.toastr.error(res.message)
    }
     
    })}
    else{
      this.loginForm.markAllAsTouched()
      console.log('not valid')
      this.toastr.error("Please Enter email or password")
    }
  
     
  }

}


