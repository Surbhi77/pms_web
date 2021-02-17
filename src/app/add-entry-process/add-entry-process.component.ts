import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MainService } from '../main.service';

@Component({
  selector: 'app-add-entry-process',
  templateUrl: './add-entry-process.component.html',
  styleUrls: ['./add-entry-process.component.css']
})
export class AddEntryProcessComponent implements OnInit {
 
  form:FormGroup;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  userType: any;
  checked: boolean;
  constructor(private fb:FormBuilder, private router:Router,private toastr: ToastrService, private service:MainService) { }
 
  ngOnInit(): void {
    if(localStorage.getItem("kdp_survey") != "yes"){
      this.router.navigateByUrl('/kap-survey')
    }
 this.form = this.fb.group({
   mobile: new FormControl('',[Validators.required, Validators.pattern(this.mobNumberPattern)]),
   declare:new FormControl('',[Validators.required])
 })
//  let formdata = new FormData()
//  formdata.append("email", localStorage.getItem('email'));
//  formdata.append('password',localStorage.getItem('password'))
//  this.service.login(formdata).subscribe((res:any)=>{
//   this.userType = res.data
//   console.log(res)
//   console.log(this.userType)
//   })
}
public hasError = (controlName: string, errorName: string) => {
    
  return this.form.controls[controlName].hasError(errorName);
}
get g() {
  return this.form.controls;
}
tnc($event){
  if($event.checked){
    this.checked =true
  }else{
    this.checked = false
  }
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
      
          this.router.navigateByUrl('/add-entry')
          
        
      }
    })
  }
  // checkMobile(){
  //   let formdata = new FormData();
  //   formdata.append('mobile',this.firstFormGroup.value.mobile);
  //   formdata.append('user_type',this.userDetails.type);
  //   this.apiService.checkMobile(formdata).subscribe(res=>{
  //     console.log(res);
  //     if(res.message == 'Already exists'){
  //       this.helper.presentToast("Mobile Number already exists")
  //     }else{
  //       this.storage.set("mobile_no",this.firstFormGroup.value.mobile)
  //       if(this.userDetails.type != "i"){
  //         this.router.navigateByUrl("/begin")
  //       }else{
  //         this.router.navigateByUrl('/step-form')
          
  //       }
  //     }
  //   })
  // }
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
