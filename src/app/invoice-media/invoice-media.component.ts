import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MainService } from '../main.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-media',
  templateUrl: './invoice-media.component.html',
  styleUrls: ['./invoice-media.component.css']
})
export class InvoiceMediaComponent implements OnInit {
  invoiceAvailable: boolean=false;
  link: any='';
  form:FormGroup;
  invoiceAcceptShow: boolean=false;

  constructor(private service:MainService, private fb:FormBuilder,private toastr: ToastrService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("kdp_survey") != "yes"){
      this.router.navigateByUrl('/kap-survey')
    }
 this.form = this.fb.group({
   declare: new FormControl(''),
   user_id: new FormControl('')
   
 })
   this.getInvoice()
  
  }
  submit(){
    let formdata = new FormData();
    formdata.append('user_id',JSON.parse(localStorage.getItem('doctor_id')));
    formdata.append('status','1');
    this.service.checkinvoice(formdata).subscribe(res=>{
      console.log(res);
      this.toastr.info("Invoice updated successfully");
      this.router.navigateByUrl('/dashboard')
    })
  }
 
  
  getInvoice(){
    let formData = new FormData();
    formData.append('user_id',JSON.parse(localStorage.getItem('doctor_id')))
    this.service.invoicemedia(formData).subscribe((res:any)=>{
      console.log(res);
      if(res.status == "1"){
        
        this.link = res.data.file;
        if(this.link != ""){
          this.invoiceAvailable = true;
        }
        
        if(res.data.invoicestatus == '0'){
          this.invoiceAcceptShow = true
        }else{
          this.invoiceAcceptShow=false
        }
      }
    })
  }

}

  


