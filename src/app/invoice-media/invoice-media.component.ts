import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-invoice-media',
  templateUrl: './invoice-media.component.html',
  styleUrls: ['./invoice-media.component.css']
})
export class InvoiceMediaComponent implements OnInit {
  invoiceAvailable: boolean;
  link:any=[];
  form:FormGroup;

  constructor(private service:MainService, private fb:FormBuilder) { }

  ngOnInit(): void {

 this.form = this.fb.group({
   declare: new FormControl('')
 })
   this.getInvoice()
  }
  getInvoice(){
    let formData = new FormData();
    formData.append('user_id',JSON.parse(localStorage.getItem('doctor_id')))
    this.service.invoicemedia(formData).subscribe((res:any)=>{
      console.log(res);
      if(res.status == "1"){
        this.invoiceAvailable = true;
        this.link = res.data
      }
    })
  }

}

  


