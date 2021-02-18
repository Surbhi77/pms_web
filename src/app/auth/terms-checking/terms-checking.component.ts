import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-terms-checking',
  templateUrl: './terms-checking.component.html',
  styleUrls: ['./terms-checking.component.css']
})
export class TermsCheckingComponent implements OnInit {
  userid:any;
  date:any;
  agrredata: any=[];
  form:FormGroup;
  gst:any;
  aggrement: any;
  kdp_survey: string;
  termsData: any;
  message: boolean=false;
  response: any;
  constructor(private fb:FormBuilder ,private http:HttpClient, private service: MainService, private router:Router, public dialog: MatDialog,public dialogRef: MatDialogRef<TermsCheckingComponent>) { }

  ngOnInit(): void {
    // this.http.get('http://360pmt.com/pms-app/Pms_app/page/terms-condition').subscribe((res:any)=>{
    //   this.termsData = res.data
    // })
    let formData = new FormData()
    formData.append('doctor_id', JSON.parse(localStorage.getItem('doctor_id')))
    this.service.GetAgreement(formData).subscribe((res:any)=>{
      console.log(res)
      this.termsData = res.data;
      this.response = res
      if(this.termsData==null){
        this.message = true
        console.log(this.message)
      }else{
        this.message = false
     
      }
    })
   
    this.form = this.fb.group({
      user_id:new FormControl(''),
      gst: new FormControl('')
    })
    this.date = new Date()
    this.userid = JSON.parse(localStorage.getItem('doctor_id'))
    let formdata = new FormData()
    formdata.append("user_id", this.userid)
    formdata.append("gst",this.form.value.gst)
   this.aggrement= localStorage.getItem("aggrement")
   this.kdp_survey = localStorage.getItem("kdp_survey")
   
    // this.gst=JSON.parse(localStorage.getItem("gst"))
    if(this.aggrement=='yes' ){
      
      this.dialogRef.close(); 
      this.router.navigateByUrl('/kap-survey')
      // localStorage.removeItem('agreement')
      // localStorage.removeItem('kdp_survey')

    }
    else{
      
      this.router.navigateByUrl('/kap-survey')
    }
    if(this.kdp_survey=='yes'){
      this.router.navigateByUrl('/dashboard')
    }else{
      this.router.navigateByUrl('/dashboard')
    }
  }
  check(event:any){
    if(event.checked==true){
      
      event.value = 'yes'
      
      console.log(event.value)  
      }
    else{
      event.value = 'no'
    }
      
  }
  logout(){
    localStorage.removeItem('userType')
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    this.router.navigateByUrl('/login')
  }

  submit(){
    let formdata = new FormData()
    formdata.append("user_id", JSON.parse(localStorage.getItem('doctor_id')));
    formdata.append('gst', (this.form.value.gst == 'no') ? this.form.value.gst : 'yes')
    localStorage.setItem("aggrement",'yes')
    // if(this.gst.value=='yes'){
    //   localStorage.setItem("aggrement",'yes')

    // }else{
    //   localStorage.setItem("aggrement",'no')
    // }
   this.service.agreement(formdata).subscribe((res:any)=>{
    this.router.navigateByUrl('/kap-survey');
   console.log(res)
   })
  }
  
  
  

  
}
