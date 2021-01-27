import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { MatDialog} from '@angular/material/dialog';
import { TermsCheckingComponent } from '../terms-checking/terms-checking.component';



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

  constructor(private service:MainService, private fb:FormBuilder, private router:Router, public dialog: MatDialog) { }

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
      
      localStorage.setItem('userType', this.userType.type)
      localStorage.setItem('userId', this.userType.userId)
      localStorage.setItem('doctor_id',this.userType.doctor_id)
      console.log(this.userType.doctor_id)
      
     
      console.log(this.loginForm.value)
      formdata.append("user_id", this.userType.doctor_id)
      this.service.check_terms(formdata).subscribe((res:any) => {
        console.log(res)
        this.agrredata = res.data
        console.log(this.agrredata)
        localStorage.setItem("aggrement",this.agrredata.aggrement);
        localStorage.setItem("kdp_survey",this.agrredata.kdp_survey);
       
        
        if(this.agrredata.aggrement == 'no'){
          this.dialog.open(TermsCheckingComponent);   
        }else{
        this.router.navigateByUrl('/quries');
       
        }
        if(this.agrredata.kdp_survey == 'no'){
          this.router.navigate(['/kap-survey'])
        }else{
          this.router.navigateByUrl('/quries');

        }
       
      }, err=>{
        console.log(err)
      })
     
    })}
    else{
      this.loginForm.markAllAsTouched()
      console.log('not valid')
      alert("Invalid user or password")
    }
  
     
  }

}


@Component({
  selector: 'loginpopup',
  templateUrl: 'loginpopup.component.html',
})
export class loginpopup {}