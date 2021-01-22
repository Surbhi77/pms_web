import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-entry-process',
  templateUrl: './add-entry-process.component.html',
  styleUrls: ['./add-entry-process.component.css']
})
export class AddEntryProcessComponent implements OnInit {
 
  form:FormGroup;
  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
 this.form = this.fb.group({
   mobile: new FormControl('',[Validators.required]),
   declare:new FormControl('',[Validators.required])
 })
  }
  public hasError = (controlName: string, errorName: string) => {
    
    return this.form.controls[controlName].hasError(errorName);
  }
  get g() {
    return this.form.controls;
  }
  submit(val:any){
    if(this.form.valid){
      
    localStorage.setItem('mobile',this.form.value.mobile)
    this.router.navigateByUrl('/add-entry')
   
    }
    else{
      console.log("not valid")
      this.form.markAllAsTouched()
    }
  }

}
