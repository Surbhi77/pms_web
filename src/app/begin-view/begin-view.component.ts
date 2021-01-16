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
  //beginview: ;
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


  constructor( private _formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,private service:MainService) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      id: new FormControl('')
    })
   
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['g'],
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
      secondCtrl: ['g'],
      duration_diabetes: new FormControl(''),
      treated_diabetes: new FormControl(''),
      family_diabetes: new FormControl(''),
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
      // complication: new FormControl(''),
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
      thirdCtrl: ['gg'],

    })
    var formData: any = new FormData();
    formData.append('id', '86');
    this.service.beginview(formData).subscribe((res:any) => {
      this.beginview =res.data
      console.log(res.data)
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
  checkIfSelectedCharacteristics(value){
    var index = this.anti.indexOf(value);
    console.log(value,this.anti)
    // console.log(index)
    if(index<0){
      return false;
    }else{
      return true;
    }
  }

  antiDiabetesChange(event, name) {
    console.log(name)
    if (event.checked) {
      this.anti.push(name)
    } else {
      let i = this.anti.indexOf(name);
      this.anti.splice(i, 1)
    }
    if (this.anti.length) {
      this.secondFormGroup.patchValue({
        'people_with_tdm': this.anti.toString()
      });
      this.secondFormGroup.updateValueAndValidity()
    } else {
      this.secondFormGroup.patchValue({
        'people_with_tdm': ''
      })
    }
  }
  
  
    
  

}
