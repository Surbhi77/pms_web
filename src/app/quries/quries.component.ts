import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quries',
  templateUrl: './quries.component.html',
  styleUrls: ['./quries.component.css']
})
export class QuriesComponent implements OnInit {
  form:FormGroup;
  

  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      qureies: new FormControl('',[Validators.required]),
     
    })
  }
  get g() {
    return this.form.controls;
  }
  public hasError = (controlName: string, errorName: string) => {
    
    return this.form.controls[controlName].hasError(errorName);
  }
}
