import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { MatDialog} from '@angular/material/dialog';



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
  //dialog: any;
 // invalidLogin: boolean = false;

  constructor(private service:MainService, private fb:FormBuilder, private router:Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
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
     
      localStorage.setItem('userType', this.userType.type)
      localStorage.setItem('userId', this.userType.userId)
      localStorage.setItem('doctor_id',this.userType.doctor_id)
      console.log(this.userType.doctor_id)
      this.dialog.open(loginpopup);   
      this.router.navigateByUrl('/kap-survey')
      console.log(this.loginForm.value)
    })}
    else{
      this.loginForm.markAllAsTouched()
      console.log('not valid')
    }
  }

}


@Component({
  selector: 'loginpopup',
  templateUrl: 'loginpopup.component.html',
})
export class loginpopup {}