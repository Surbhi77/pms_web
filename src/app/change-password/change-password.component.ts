import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder) { }
   
  ngOnInit(): void {
    this.form =  this.fb.group({
      old_pass: new FormControl(),
      new_pass: new FormControl(),
      cnew_pass:new FormControl()
    })
  }

}
