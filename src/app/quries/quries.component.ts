import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-quries',
  templateUrl: './quries.component.html',
  styleUrls: ['./quries.component.css']
})
export class QuriesComponent implements OnInit {
  form:FormGroup;
  

  constructor(private fb:FormBuilder, private router:Router, private service: MainService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      user_id: new FormControl(''),
      message: new FormControl('',[Validators.required]),
    })
  }
  get g() {
    return this.form.controls;
  }
  public hasError = (controlName: string, errorName: string) => {
    
    return this.form.controls[controlName].hasError(errorName);
  }
  submit(){
    
    console.log(this.form.value.user_id)
     console.log(localStorage.getItem('userId'))
   
    const formData = new FormData()
   // formData.append("user_id", '9');
   formData.append("user_id",JSON.parse(localStorage.getItem('userId')));
    formData.append("message", this.form.value.message);
    console.log(formData)
    this.service.quries(formData).subscribe(res => {

      console.log(res)


    })

  }
}
