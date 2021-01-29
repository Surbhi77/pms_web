import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  form:FormGroup;
  formerror: boolean = false;
  constructor(private fb:FormBuilder, private service:MainService) { }
   
  ngOnInit(): void {
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
     })


  }
}
