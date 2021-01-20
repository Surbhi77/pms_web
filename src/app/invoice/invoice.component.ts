import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import * as moment from 'moment';
import { MainService } from '../main.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  format3: string = "";
  format2: string = "";
  title = 'Begin Entry';
  firstFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isLinear = true;
  secondFormGroup: FormGroup;
  medication: any;
  hypertension: any;
  dyslipidemia: any;
  stroke: any;
  neuropathy: any;
  retinopathy: any;
  nephropathy: any;
  coronary: any;
  anti_diabetes_medication: any = {};
  Complications: any = {};
  dyslipidemiaobj: any = {};
  coronaryartery: any = {};
  strokeobj: any = {};
  neuropathyobj: any = {};
  retinopathyobj: any = {};
  nephropathyobj: any = {};
  glargineinsulinobj: any = {};
  anti: any = [];
  now2: any;
  now3: any;

  glargine_condition: boolean;
  //nph: boolean;
  glargine: boolean;

  constructor(private _formBuilder: FormBuilder, private service: MainService) { }

  ngOnInit(): void {


    this.firstFormGroup = this._formBuilder.group({
     
      user_id: new FormControl('12345'),
      // mobile: new FormControl('89578898989'),
      pen_serial: new FormControl(''),
      date_visit: new FormControl('', [Validators.required]),
      sex: new FormControl('', [Validators.required]),
      // date_of_birth: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
      height: new FormControl('', [Validators.required]),
      bmi: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      education: new FormControl('', [Validators.required]),
      employment: new FormControl('', [Validators.required])
    });
    this.secondFormGroup = this._formBuilder.group({
     
      duration_diabetes: new FormControl('', [Validators.required]),
      treated_diabetes: new FormControl('', [Validators.required]),
//age_at_diabetes: new FormControl('', [Validators.required]),
      family_diabetes: new FormControl('', [Validators.required]),
      hypertension: new FormControl('', [Validators.required]),
      duration_hypertension: new FormControl('', [Validators.required]),
      blood_pressure: new FormControl('', [Validators.required]),
      systolic: new FormControl('', [Validators.required]),
      diastolic: new FormControl('', [Validators.required]),
      smoking: new FormControl('', [Validators.required]),
      alcohol: new FormControl('', [Validators.required]),
      // vascular_dignosis: new FormControl(''),
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
      // medications:new FormControl(''),

    });
   
    
    this.thirdFormGroup = this._formBuilder.group({


      fasting_plasma: new FormControl('', [Validators.required]),
      postprandial_plasma: new FormControl('', [Validators.required]),
      glycosylated: new FormControl('', [Validators.required]),
      hbac_lab: new FormControl('', [Validators.required]),
      s_creatinine: new FormControl('', [Validators.required]),
      dose_insulin: new FormControl('', [Validators.required]),
      glargine_insulin: new FormControl('', [Validators.required]),
      glargine_insulin_breakfast: new FormControl('', [Validators.required]),
      // glargine_insulin_lunch: new FormControl('', [Validators.required]),
      glargine_insulin_dinner: new FormControl('', [Validators.required]),
      thirdCtrl: ['gg', Validators.required],

    })
  }
 
  getvalue(num: number) {
    return Array.from({length: num}, (v, k) => k + 1);
  }
  getvalues(num: number) {
    return Array.from({length: num}, (v, k) => k + 1);
  }
  getCreatinine() {
    return Array.from({length:50 }, (_value , k) =>  k / 10);

  }
  
  get g() {
    return this.firstFormGroup.controls;
  }
  get f() {
    return this.secondFormGroup.controls;

  }
  public hasError = (controlName: string, errorName: string) => {
    return this.secondFormGroup.controls[controlName].hasError(errorName);
  }
  public hasError3 = (controlName: string, errorName: string) => {
    return this.thirdFormGroup.controls[controlName].hasError(errorName);
  }

  submitFirst() {
    if (!this.firstFormGroup.valid) {
     
      this.firstFormGroup.markAllAsTouched();
    } else {

    }

  }
  onSecondSubmit(){
 
    if(!this.secondFormGroup.valid){
      this.isLinear=true
     // return false;
      console.log(this.secondFormGroup)
      this.secondFormGroup.markAllAsTouched();
    }
    else{
      this.isLinear=false
      console.log(this.secondFormGroup.value)
    }
  }
  
  antiDiabetesChange(event, name) {
    console.log(event)
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

 

  oncheked(event: any,name:any) {
    if (event.checked == true) {
      this.hypertension = true
      if(name=='hypertension_dur'){
      this.secondFormGroup.controls['hypertension_dur'].setValidators([Validators.required]);
      this.secondFormGroup.controls['hypertension_dur'].updateValueAndValidity();
      this.secondFormGroup.controls['duration'].setValidators([Validators.required])
      this.secondFormGroup.controls['duration'].updateValueAndValidity()
      this.secondFormGroup.controls['medications'].setValidators([Validators.required]);
      this.secondFormGroup.controls['medications'].updateValueAndValidity()
    
    }
    }
    else {
      this.secondFormGroup.controls['hypertension_dur'].clearValidators()
      this.secondFormGroup.controls['hypertension_dur'].updateValueAndValidity();
      this.secondFormGroup.controls['duration'].clearValidators()
      this.secondFormGroup.controls['duration'].updateValueAndValidity();
      this.secondFormGroup.controls['medications'].clearValidators();
      this.secondFormGroup.controls['medications'].updateValueAndValidity();
    
      this.medication = 'no';

      //this.medication = false
      this.hypertension = false
    }
  }
  oncheked2(event: any, name:any) {
    if (event.checked == true) {
      this.dyslipidemia = true
      if(name == "dyslipidemia_dur"){
        this.secondFormGroup.controls['dyslipidemia_dur'].setValidators([Validators.required]);
           this.secondFormGroup.controls['dyslipidemia_dur'].updateValueAndValidity();
          this.secondFormGroup.controls['dyslipidemia_duration'].setValidators([Validators.required])
          this.secondFormGroup.controls['dyslipidemia_duration'].updateValueAndValidity()
          this.secondFormGroup.controls['dyslipidemia_medication'].setValidators([Validators.required]);
          this.secondFormGroup.controls['dyslipidemia_medication'].updateValueAndValidity()
      }

    }
    else {
      this.dyslipidemia = false
      this.secondFormGroup.controls['dyslipidemia_dur'].clearValidators()
      this.secondFormGroup.controls['dyslipidemia_dur'].updateValueAndValidity();
      this.secondFormGroup.controls['dyslipidemia_duration'].clearValidators()
      this.secondFormGroup.controls['dyslipidemia_duration'].updateValueAndValidity();
      this.secondFormGroup.controls['dyslipidemia_medication'].clearValidators();
      this.secondFormGroup.controls['dyslipidemia_medication'].updateValueAndValidity();
    }

  }
 
  oncheked3(event: any,name:any) {
    if (event.checked == true) {
      this.coronary = true
      if(name == "coronary_artery_dur"){
        this.secondFormGroup.controls['coronary_artery_dur'].setValidators([Validators.required]);
           this.secondFormGroup.controls['coronary_artery_dur'].updateValueAndValidity();
          this.secondFormGroup.controls['coronary_artery_duration'].setValidators([Validators.required])
          this.secondFormGroup.controls['coronary_artery_duration'].updateValueAndValidity()
          this.secondFormGroup.controls['coronary_artery_medication'].setValidators([Validators.required]);
          this.secondFormGroup.controls['coronary_artery_medication'].updateValueAndValidity()
      }

    }
    else {
      this.coronary = false
     // this.dyslipidemia = false
      this.secondFormGroup.controls['coronary_artery_dur'].clearValidators()
      this.secondFormGroup.controls['coronary_artery_dur'].updateValueAndValidity();
      this.secondFormGroup.controls['coronary_artery_duration'].clearValidators()
      this.secondFormGroup.controls['coronary_artery_duration'].updateValueAndValidity();
      this.secondFormGroup.controls['coronary_artery_medication'].clearValidators();
      this.secondFormGroup.controls['coronary_artery_medication'].updateValueAndValidity();
    }

  }
  oncheked4(event: any,name:any) {
    if (event.checked == true) {
      this.stroke = true
      if(name == "stroke_dur"){
        this.secondFormGroup.controls['stroke_dur'].setValidators([Validators.required]);
           this.secondFormGroup.controls['stroke_dur'].updateValueAndValidity();
          this.secondFormGroup.controls['stroke_duration'].setValidators([Validators.required])
          this.secondFormGroup.controls['stroke_duration'].updateValueAndValidity()
          this.secondFormGroup.controls['stroke_medication'].setValidators([Validators.required]);
          this.secondFormGroup.controls['stroke_medication'].updateValueAndValidity()
      }
    }
    else {
      this.stroke = false
      this.secondFormGroup.controls['stroke_dur'].clearValidators()
      this.secondFormGroup.controls['stroke_dur'].updateValueAndValidity();
      this.secondFormGroup.controls['stroke_duration'].clearValidators()
      this.secondFormGroup.controls['stroke_duration'].updateValueAndValidity();
      this.secondFormGroup.controls['stroke_medication'].clearValidators();
      this.secondFormGroup.controls['stroke_medication'].updateValueAndValidity();
    }
  }
  oncheked5(event: any,name:any) {
    if (event.checked == true) {
      this.neuropathy = true
      if(name == "neuropathy_dur"){
        this.secondFormGroup.controls['neuropathy_dur'].setValidators([Validators.required]);
           this.secondFormGroup.controls['neuropathy_dur'].updateValueAndValidity();
          this.secondFormGroup.controls['neuropathy_duration'].setValidators([Validators.required])
          this.secondFormGroup.controls['neuropathy_duration'].updateValueAndValidity()
          this.secondFormGroup.controls['neuropathy_medication'].setValidators([Validators.required]);
          this.secondFormGroup.controls['neuropathy_medication'].updateValueAndValidity()
      }
    }
    else {
      this.neuropathy = false
      this.secondFormGroup.controls['neuropathy_dur'].clearValidators()
      this.secondFormGroup.controls['neuropathy_dur'].updateValueAndValidity();
      this.secondFormGroup.controls['neuropathy_duration'].clearValidators()
      this.secondFormGroup.controls['neuropathy_duration'].updateValueAndValidity();
      this.secondFormGroup.controls['neuropathy_medication'].clearValidators();
      this.secondFormGroup.controls['neuropathy_medication'].updateValueAndValidity();
    }

  }
  oncheked6(event: any,name:any) {
    if (event.checked == true) {
      this.retinopathy = true
      if(name == "retinopathy_dur"){
        this.secondFormGroup.controls['retinopathy_dur'].setValidators([Validators.required]);
           this.secondFormGroup.controls['retinopathy_dur'].updateValueAndValidity();
          this.secondFormGroup.controls['retinopathy_duration'].setValidators([Validators.required])
          this.secondFormGroup.controls['retinopathy_duration'].updateValueAndValidity()
          this.secondFormGroup.controls['retinopathy_medication'].setValidators([Validators.required]);
          this.secondFormGroup.controls['retinopathy_medication'].updateValueAndValidity()
      }
    }
    else {
      this.retinopathy = false
      this.secondFormGroup.controls['retinopathy_dur'].clearValidators()
      this.secondFormGroup.controls['retinopathy_dur'].updateValueAndValidity();
      this.secondFormGroup.controls['retinopathy_duration'].clearValidators()
      this.secondFormGroup.controls['retinopathy_duration'].updateValueAndValidity();
      this.secondFormGroup.controls['retinopathy_medication'].clearValidators();
      this.secondFormGroup.controls['retinopathy_medication'].updateValueAndValidity();
    }
  }
  oncheked7(event: any,name:any) {
    if (event.checked == true) {
      this.nephropathy = true
      if(name == "nephropathy_dur"){
        this.secondFormGroup.controls['nephropathy_dur'].setValidators([Validators.required]);
           this.secondFormGroup.controls['nephropathy_dur'].updateValueAndValidity();
          this.secondFormGroup.controls['nephropathy_duration'].setValidators([Validators.required])
          this.secondFormGroup.controls['nephropathy_duration'].updateValueAndValidity()
          this.secondFormGroup.controls['nephropathy_medication'].setValidators([Validators.required]);
          this.secondFormGroup.controls['nephropathy_medication'].updateValueAndValidity()
      }
    }
    else {
      this.nephropathy = false
      this.secondFormGroup.controls['nephropathy_dur'].clearValidators()
      this.secondFormGroup.controls['nephropathy_dur'].updateValueAndValidity();
      this.secondFormGroup.controls['nephropathy_duration'].clearValidators()
      this.secondFormGroup.controls['nephropathy_duration'].updateValueAndValidity();
      this.secondFormGroup.controls['nephropathy_medication'].clearValidators();
      this.secondFormGroup.controls['nephropathy_medication'].updateValueAndValidity();
    }
  }

  oncheked10(event: any) {
    console.log(event)
    if (event.checked == true) {
      
      this.thirdFormGroup.controls['glargine_insulin_breakfast'].setValidators([Validators.required])
      this.thirdFormGroup.controls['glargine_insulin_breakfast'].updateValueAndValidity()
      // this.thirdFormGroup.controls['glargine_insulin_lunch'].setValidators([Validators.required]);
      // this.thirdFormGroup.controls['glargine_insulin_lunch'].updateValueAndValidity()
      this.thirdFormGroup.controls['glargine_insulin_dinner'].setValidators([Validators.required]);
      this.thirdFormGroup.controls['glargine_insulin_dinner'].updateValueAndValidity()
      this.thirdFormGroup.updateValueAndValidity()
      this.glargine_condition = true
    }
    else {
      
      this.thirdFormGroup.controls['glargine_insulin_breakfast'].clearValidators()
      this.thirdFormGroup.controls['glargine_insulin_breakfast'].updateValueAndValidity();
      // this.thirdFormGroup.controls['glargine_insulin_lunch'].clearValidators();
      // this.thirdFormGroup.controls['glargine_insulin_lunch'].updateValueAndValidity();
      this.thirdFormGroup.controls['glargine_insulin_dinner'].clearValidators();
      this.thirdFormGroup.controls['glargine_insulin_dinner'].updateValueAndValidity();
      this.thirdFormGroup.updateValueAndValidity()

      this.glargine_condition = false
    }
  }
  vistedate(e) {
    console.log(e.value)
    this.now2 = moment(e.value).format("YYYY-MM-DD");
    this.format2 = this.now2;
    console.log(this.now2)

  }
  birthdate(ev) {
    this.now3 = moment(ev.value).format("YYYY-MM-DD");
    this.format3 = this.now3;
    console.log(this.now3)

  }
  onchange($event: any) {
    console.log($event)
    if ($event.value == 'yes') {
      this.medication = true
    } else {
      this.medication = false
    }
  }



  submit() {
    
    var formData: any = new FormData();
    if(this.thirdFormGroup.valid){
      this.service.postAddBegin(formData).subscribe(res => {
        //this.login =res
  
    this.anti_diabetes_medication.Biguanides = (this.secondFormGroup.value.Biguanides == true) ? this.secondFormGroup.value.Biguanides : false;
    this.anti_diabetes_medication.Sulphonylureas = (this.secondFormGroup.value.Sulphonylureas == true) ? this.secondFormGroup.value.Sulphonylureas : false;
    this.anti_diabetes_medication.Meglitinides = (this.secondFormGroup.value.Meglitinides == true) ? this.secondFormGroup.value.Meglitinides : false;
    this.anti_diabetes_medication.Thiazolidendiones = (this.secondFormGroup.value.Thiazolidendiones == true) ? this.secondFormGroup.value.Thiazolidendiones : false;
    this.anti_diabetes_medication.GLP_Analogues = (this.secondFormGroup.value.GLP_Analogues == true) ? this.secondFormGroup.value.GLP_Analogues : false;
    this.anti_diabetes_medication.DPP4_Inhibitors = (this.secondFormGroup.value.DPP4_Inhibitors == true) ? this.secondFormGroup.value.DPP4_Inhibitors : false;
    this.anti_diabetes_medication.DoubleDrugFixed = (this.secondFormGroup.value.DoubleDrugFixed == true) ? this.secondFormGroup.value.DoubleDrugFixed : false;
    this.anti_diabetes_medication.TripleDrugFixed = (this.secondFormGroup.value.TripleDrugFixed == true) ? this.secondFormGroup.value.TripleDrugFixed : false;
    this.Complications.hypertension_dur = this.secondFormGroup.value.hypertension_dur;
    this.Complications.duration = this.secondFormGroup.value.duration;
    this.Complications.medications = this.secondFormGroup.value.medications;
    this.dyslipidemiaobj.dyslipidemia_dur = this.secondFormGroup.value.dyslipidemia_dur;
    this.dyslipidemiaobj.duration = this.secondFormGroup.value.duration;
    this.dyslipidemiaobj.medications = this.secondFormGroup.value.medications;
    this.coronaryartery.coronary_artery_dur = this.secondFormGroup.value.coronary_artery_dur;
    this.coronaryartery.duration = this.secondFormGroup.value.duration;
    this.coronaryartery.medications = this.secondFormGroup.value.medications;
    this.strokeobj.stroke_dur = this.secondFormGroup.value.stroke_dur;
    this.strokeobj.duration = this.secondFormGroup.value.duration;
    this.strokeobj.medications = this.secondFormGroup.value.medications;
    this.neuropathyobj.neuropathy_dur = this.secondFormGroup.value.neuropathy_dur;
    this.neuropathyobj.duration = this.secondFormGroup.value.duration;
    this.neuropathyobj.medications = this.secondFormGroup.value.medications;
    this.retinopathyobj.retinopathy_dur = this.secondFormGroup.value.retinopathy_dur;
    this.retinopathyobj.duration = this.secondFormGroup.value.duration;
    this.retinopathyobj.medications = this.secondFormGroup.value.medications;
    this.nephropathyobj.nephropathy_dur = this.secondFormGroup.value.nephropathy_dur;
    this.nephropathyobj.duration = this.secondFormGroup.value.duration;
    this.nephropathyobj.medications = this.secondFormGroup.value.medications;
    this.glargineinsulinobj.glargine_insulin = (this.thirdFormGroup.value.glargine_insulin==true) ? this.secondFormGroup.value.glargine_insulin : false;
    console.log(this.glargineinsulinobj)
    this.glargineinsulinobj.glargine_insulin_breakfast = this.thirdFormGroup.value.glargine_insulin_breakfast;
    console.log(this.glargineinsulinobj.breakfast)
    // this.glargineinsulinobj.glargine_insulin_lunch = this.thirdFormGroup.value.glargine_insulin_lunch;
    this.glargineinsulinobj.glargine_insulin_dinner = this.thirdFormGroup.value.glargine_insulin_dinner;
    console.log(this.glargineinsulinobj)

    console.log(this.Complications)


    console.log('this.anti_diabetes_medication', this.anti_diabetes_medication)
    formData.append('pen_serial', this.firstFormGroup.value.pen_serial);
    formData.append('date_visit', this.now2);
    console.log(this.now2)
    // formData.append('date_of_birth', this.now3);
    // console.log(this.now3)
    formData.append('age', this.firstFormGroup.value.age);

    formData.append('sex', this.firstFormGroup.value.sex);
    formData.append('weight', this.firstFormGroup.value.weight);
    formData.append('height', this.firstFormGroup.value.height);
    formData.append('bmi', this.firstFormGroup.value.bmi);
    formData.append('education', this.firstFormGroup.value.education);
    formData.append('employment', this.firstFormGroup.value.employment);
    //second form
    formData.append('duration_hypertension',this.secondFormGroup.value.duration_hypertension);
    formData.append('duration_diabetes', this.secondFormGroup.value.duration_diabetes);
    formData.append('treated_diabetes', this.secondFormGroup.value.treated_diabetes);
    formData.append('family_diabetes', this.secondFormGroup.value.family_diabetes);
    formData.append('hypertension', this.secondFormGroup.value.hypertension);
    formData.append('blood_pressure', this.secondFormGroup.value.blood_pressure);
    formData.append('systolic', this.secondFormGroup.value.systolic);
    formData.append('diastolic', this.secondFormGroup.value.diastolic);
    formData.append('smoking', this.secondFormGroup.value.smoking);
    formData.append('alcohol', this.secondFormGroup.value.alcohol);
    formData.append(' medical_condition',this.secondFormGroup.value.medical_condition);
    formData.append('hypertension_dur', JSON.stringify(this.Complications));
    formData.append('dyslipidemia_dur', JSON.stringify(this.dyslipidemiaobj));
    formData.append('coronary_artery_dur', JSON.stringify(this.coronaryartery));
    formData.append('stroke_dur', JSON.stringify(this.strokeobj));
    formData.append('neuropathy_dur', JSON.stringify(this.neuropathyobj));
    formData.append('retinopathy_dur', JSON.stringify(this.retinopathyobj));
    formData.append('nephropathy_dur', JSON.stringify(this.nephropathyobj));
    //third form
   
    formData.append('fasting_plasma', this.thirdFormGroup.value.fasting_plasma);
    formData.append('postprandial_plasma', this.thirdFormGroup.value.postprandial_plasma);
    formData.append('glycosylated', this.thirdFormGroup.value.glycosylated);
    formData.append('hbac_lab', this.thirdFormGroup.value.hbac_lab);
    formData.append('s_creatinine', this.thirdFormGroup.value.s_creatinine);
    formData.append('dose_insulin', this.thirdFormGroup.value.dose_insulin);
    console.log(this.thirdFormGroup.value.dose_insulin);
    formData.append('glargine_insulin', JSON.stringify(this.glargineinsulinobj));
     formData.append('anti_diabetes_medication',JSON.stringify(this.anti_diabetes_medication));
    
        console.log(res)
      })
     }else{
      console.log('not valid')
       this.thirdFormGroup.markAllAsTouched()
     }
    
      
  }
}
