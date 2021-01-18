import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-begin-view',
  templateUrl: './begin-view.component.html',
  styleUrls: ['./begin-view.component.css']
})
export class BeginViewComponent implements OnInit {
 
  form: FormGroup ;
  beginview: any=[];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isLinear = true;
  hypertension: boolean;
  medication: any;
  dyslipidemia: boolean;
  coronary: boolean;
  stroke: boolean;
  neuropathy: boolean;
  retinopathy: boolean;
  nephropathy: boolean;
  glargine_condition: boolean;
  anti: any=[];
  hyper:any;
  antichecked:any=[];
  regular:any=[];
  garglineArray: any=[];
  hypercheck: any=[];
  dysncheck: any=[];
  coroncheck: any=[];
  nephrocheck:any=[];
  strokecheck:any=[];
  neuropathycheck:any=[];
  retinopathycheck:any=[];



  
  


  constructor( private _formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,private service:MainService) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      id: new FormControl('')
    })
   
    this.firstFormGroup = this._formBuilder.group({
     
      user_id: new FormControl('12345'),
      // mobile: new FormControl('89578898989'),
      pen_serial: new FormControl('',),
      date_visit: new FormControl(''),
      sex: new FormControl(''),
      date_of_birth: new FormControl(''),
      weight: new FormControl(''),
      height: new FormControl(''),
      bmi: new FormControl(''),
      age: new FormControl(''),
      education: new FormControl(''),
      employment: new FormControl('')
    });
    this.secondFormGroup = this._formBuilder.group({
     
      duration_diabetes: new FormControl(''),
      treated_diabetes: new FormControl(''),
      family_diabetes: new FormControl(''),
      anti_diabetes_medication:new FormControl(''),
      hypertension: new FormControl(''),
      duration_hypertension: new FormControl('',),
      blood_pressure: new FormControl(''),
      systolic: new FormControl(''),
      diastolic: new FormControl(''),
      smoking: new FormControl(''),
      alcohol: new FormControl(''),
      hypertension_dur: new FormControl(''),
      dyslipidemia_dur: new FormControl(''),
      coronary_artery_dur: new FormControl(''),
      stroke_dur: new FormControl(''),
      neuropathy_dur: new FormControl(''),
      retinopathy_dur: new FormControl(''),
      nephropathy_dur: new FormControl(''),
      Biguanides: new FormControl(''),
      medical_condition: new FormControl(''),
      Sulphonylureas: new FormControl(''),
      Meglitinides: new FormControl(''),
      Thiazolidendiones: new FormControl(''),
      GLP_Analogues: new FormControl(''),
      DPP4_Inhibitors: new FormControl(''),
      DoubleDrugFixed: new FormControl(''),
      TripleDrugFixed: new FormControl(''),
      duration: new FormControl(''),
      medications: new FormControl(''),
      dyslipidemia_duration: new FormControl(''),
      dyslipidemia_medication: new FormControl(''),
      coronary_artery_duration: new FormControl(''),
      coronary_artery_medication: new FormControl(''),
      stroke_duration: new FormControl(''),
      stroke_medication: new FormControl(''),
      neuropathy_duration: new FormControl(''),
      neuropathy_medication: new FormControl(''),
      retinopathy_duration: new FormControl(''),
      retinopathy_medication: new FormControl(''),
      nephropathy_duration: new FormControl(''),
      nephropathy_medication: new FormControl(''),
     

    });
   
    
    this.thirdFormGroup = this._formBuilder.group({


      fasting_plasma: new FormControl(''),
      postprandial_plasma: new FormControl(''),
      glycosylated: new FormControl(''),
      hbac_lab: new FormControl(''),
      s_creatinine: new FormControl(''),
      dose_insulin: new FormControl(''),
      glargine_insulin: new FormControl(''),
      glargine_insulin_breakfast: new FormControl(''),
      glargine_insulin_lunch: new FormControl(''),
      glargine_insulin_dinner: new FormControl(''),
      

    })
    var formData: any = new FormData();
    formData.append('id', '93');
    this.service.beginview(formData).subscribe((res:any) => {
      this.beginview =res.data
      console.log(res)
     this.antichecked=JSON.parse(this.beginview.anti_diabetes_medication)
     console.log(this.antichecked)
     this.garglineArray=JSON.parse(this.beginview.glargine_insulin)
     console.log( this.garglineArray)
      this.hypercheck=JSON.parse(this.beginview.hypertension_dur)
      console.log( this.hypercheck)
      this.dysncheck=JSON.parse(this.beginview.dyslipidemia_dur)
      console.log( this.dysncheck)
      this.coroncheck=JSON.parse(this.beginview.coronary_artery_dur)
      console.log(this.coroncheck)
      this.strokecheck=JSON.parse(this.beginview.stroke_dur)
      console.log(this.strokecheck)
      this.neuropathycheck=JSON.parse(this.beginview.neuropathy_dur)
      console.log(this.neuropathycheck)
      this.retinopathycheck=JSON.parse(this.beginview.retinopathy_dur)
      console.log(this.retinopathycheck)
       this.nephrocheck=JSON.parse(this.beginview.nephropathy_dur)
       console.log(this.nephrocheck)

     if(this.beginview.glargine_insulin){
       this.glargine_condition=true

     }
     else{
      this.glargine_condition=false
     }
     if(this.beginview.medical_condition){
      this.medication=true

    }
    else{
     this.medication=false
    }
    if(this.beginview.hypertension_dur){
      this.hypertension=true

    }
    else{
     this.hypertension=false
    }
    if(this.beginview.dyslipidemia_dur){
      this.dyslipidemia=true

    }
    else{
     this.dyslipidemia=false
    }
    if(this.beginview.coronary_artery_dur){
      this.coronary=true

    }
    else{
     this.coronary=false
    }
    if(this.beginview.stroke_dur){
      this.stroke=true

    }
    else{
     this.stroke=false
    }
    if(this.beginview.neuropathy_dur){
      this.neuropathy=true

    }
    else{
     this.neuropathy=false
    }
    if(this.beginview.retinopathy_dur){
      this.retinopathy=true

    }
    else{
     this.retinopathy=false
    }
     if(this.beginview.nephropathy_dur){
       this.nephropathy=true

     }
     else{
      this.nephropathy=false
     }

     this.secondFormGroup.patchValue({
    "hypertension_dur":this.hypercheck.hypertension_dur,
    "duration":this.hypercheck.duration,
    "medications":this.hypercheck.medications,
    "dyslipidemia_dur":this.beginview.dyslipidemia_dur,
    "dyslipidemia_duration":this.dysncheck.duration,
    "dyslipidemia_medication":this.dysncheck.medications,
    "coronary_artery_dur":this.coroncheck.coronary_artery_dur,
    "coronary_artery_duration":this.coroncheck.duration,
    "coronary_artery_medication":this.coroncheck.medications,
    "stroke_dur":this.strokecheck.stroke_dur,
    "stroke_duration":this.strokecheck.duration,
    "stroke_medication":this.strokecheck.medications,
    "neuropathy_dur":this.neuropathycheck.neuropathy_dur,
    "neuropathy_duration":this.neuropathycheck.duration,
    "neuropathy_medication":this.neuropathycheck.medications,
    "retinopathy_dur":this.retinopathycheck.retinopathy_dur,
    "retinopathy_duration":this.retinopathycheck.duration,
    "retinopathy_medication":this.retinopathycheck.medications,
    "nephropathy_dur":this.nephrocheck.nephropathy_dur,
    "nephropathy_duration":this.nephrocheck.duration,
    "nephropathy_medication":this.nephrocheck.medications,
   


      })
    this.secondFormGroup.updateValueAndValidity();

     
      this.thirdFormGroup.patchValue({
      "glargine_insulin_breakfast":this.garglineArray.glargine_insulin_breakfast,
      "glargine_insulin_lunch":this.garglineArray.glargine_insulin_lunch,
      "glargine_insulin_dinner":this.garglineArray.glargine_insulin_dinner


     })
     this.thirdFormGroup.updateValueAndValidity();
   
    

    })

  
    
  }
  

  oncheked(event: any,name:any) {
    if (event.checked == true) {
      this.hypertension = true
     
      
    }
    else {
      
      this.medication = 'no';

    
      this.hypertension = false
    }
  }
  oncheked2(event: any, name:any) {
    if (event.checked == true) {
      this.dyslipidemia = true
      
    }
    else {
      this.dyslipidemia = false
     
    }

  }
 
  oncheked3(event: any,name:any) {
    if (event.checked == true) {
      this.coronary = true

    }
    else {
      this.coronary = false
    
     
    }

  }
  oncheked4(event: any,name:any) {
    if (event.checked == true) {
      this.stroke = true
     
    }
    else {
      this.stroke = false
     
    }
  }
  oncheked5(event: any,name:any) {
    if (event.checked == true) {
      this.neuropathy = true
      
    }
    else {
      this.neuropathy = false
      
    }

  }
  oncheked6(event: any,name:any) {
    if (event.checked == true) {
      this.retinopathy = true
     
    }
    else {
      this.retinopathy = false
      
    }
  }
  oncheked7(event: any,name:any) {
    if (event.checked == true) {
      this.nephropathy = true
     
    }
    else {
      this.nephropathy = false
    
    }
  }

  oncheked10(event: any) {
    console.log(event)
    if (event.checked == true) {
      this.glargine_condition = true
    }
    else {
      this.glargine_condition = false
    }
  }
  onchange($event: any) {
    console.log($event)
    if ($event.value == 'yes') {
      this.medication = true

    } else {
      this.medication = false
    }
  }
  // antiDiabetesChange(event, name) {
  //   console.log(name)
  //   if (event.checked) {
  //     this.anti.push(name)
  //   } else {
  //     let i = this.anti.indexOf(name);
  //     this.anti.splice(i, 1)
  //   }
  //   if (this.anti.length) {
  //     this.secondFormGroup.patchValue({
  //       'people_with_tdm': this.anti.toString()
  //     });
  //     this.secondFormGroup.updateValueAndValidity()
  //   } else {
  //     this.secondFormGroup.patchValue({
  //       'people_with_tdm': ''
  //     })
  //   }
  // }
  
  
    
  

}
