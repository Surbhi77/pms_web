import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


import * as moment from 'moment';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

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
  fourthFormGroup: FormGroup;
  isLinear = true;
  secondFormGroup: FormGroup;
  medication: any;
  hypertension: boolean =false;
  dyslipidemia: boolean =false;
  stroke: boolean =false;
  neuropathy: boolean =false;
  retinopathy:boolean =false;
  nephropathy:boolean =false;
  coronary: boolean =false;
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
  // date_of_visit: Date;
  now2: any;
  now3: any;
  bmi: any;
  formId:any;
  check: boolean = false;
  //showHypertensionDiv:boolean =false;

  glargine_condition: boolean;
  //nph: boolean;
  glargine: boolean;
  response: any;

  constructor(private _formBuilder: FormBuilder, private service: MainService,private toastr: ToastrService,private router:Router) { }

  ngOnInit(): void {

    if(localStorage.getItem("kdp_survey") != "yes"){
      this.router.navigateByUrl('/kap-survey')
    }

//this.toastr.success('submitted')
    this.firstFormGroup = this._formBuilder.group({

      user_id: new FormControl(''),
      mobile: new FormControl(''),

      pen_serial: new FormControl(''),
      date_visit: new FormControl('', [Validators.required]),
      sex: new FormControl('', [Validators.required]),
      // date_of_birth: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
      height: new FormControl('', [Validators.required]),
      bmi: new FormControl(''),
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
      //blood_pressure: new FormControl('', [Validators.required]),
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
      medical_condition: new FormControl('',[Validators.required]),
      Sulphonylureas: new FormControl(''),
      SGLT2Inhibitors: new FormControl(''),
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
      glycosylated_decimal: new FormControl('',Validators.required),
      hbac_lab: new FormControl('', [Validators.required]),
      s_creatinine: new FormControl(''),


    })
    this.fourthFormGroup = this._formBuilder.group({
      dose_insulin: new FormControl('', [Validators.required]),
      glargine_insulin: new FormControl(''),
      glargine_insulin_breakfast: new FormControl(''),
      glargine_insulin_lunch: new FormControl(''),
      glargine_insulin_dinner: new FormControl(''),
     

    })
    //this.firstFormGroup.disable();
  }
  getvaluefast() {
    return Array.from({ length: 361 }, (v, k) => k + 40);
  }
  getweight() {
    return Array.from({ length: 111 }, (v, k) => k + 40);
  }
  getheight() {
    return Array.from({ length: 81}, (v, k) => k + 120);
  }

  getvalue() {
    return Array.from({ length: 451 }, (v, k) => k + 50);
  }
  getvaluediabetes() {
    return Array.from({ length: 50 }, (v, k) => k + 1 );
  }
  getvalueset(num: number) {
    return Array.from({ length: num }, (v, k) => k + 1);
  }
  getvalues() {
    return Array.from({ length: 20 }, (v, k) => k + 1);
  }
  getmulvalues() {
    return Array.from({ length: 198 }, (v, k) => k + 3);
  }
  getdigit() {
    return Array.from({ length: 10 }, (v, k) => k + 1);
  }
  public hasError4 = (controlName: string, errorName: string) => {
    return this.fourthFormGroup.controls[controlName].hasError(errorName);
  }

  // bmicalc() {

  //   this.bmi = (this.firstFormGroup.value.weight / ((this.firstFormGroup.value.height * this.firstFormGroup.value.height) / 100)) * 100
  //   this.bmi = this.bmi.toFixed(2)
  //   console.log(this.bmi)
  // }
  weight(event:any){
    console.log(event.value)
    if(this.firstFormGroup.value.height && this.firstFormGroup.value.height!=''){
      var height = this.firstFormGroup.value.height
      if(height!=''){
        this.bmi =(this.firstFormGroup.value.weight/((this.firstFormGroup.value.height*this.firstFormGroup.value.height)/100))*100
        this.bmi = this.bmi.toFixed(1)
      }
    }else{
     console.log("please eneter height" )
     this.bmi=0
    }
    
    }
    height(event:any){
    
      console.log(event)
      if(this.firstFormGroup.value.weight && this.firstFormGroup.value.weight!=''){
        var weight = this.firstFormGroup.value.weight
        if(weight!=''){
      this.bmi =(this.firstFormGroup.value.weight/((this.firstFormGroup.value.height*this.firstFormGroup.value.height)/100))*100
      this.bmi = this.bmi.toFixed(1)
        }
      }else{
        console.log("please eneter height" )
        this.bmi=0
      }
       console.log( this.bmi)
    }
  getCreatinine() {
    //return Array.from({length:50 }, (_value , k) =>  k / 10);
    return Array.from({ length: 50 }, (_value, k = 1) => ((k / 10) + 0.1).toFixed(1));

  }

  get g() {
    return this.firstFormGroup.controls;
  }
  get f() {
    return this.secondFormGroup.controls;

  }
  get h() {
    return this.thirdFormGroup.controls;

  }
  get i() {
    return this.fourthFormGroup.controls;

  }
  public hasError = (controlName: string, errorName: string) => {
    return this.firstFormGroup.controls[controlName].hasError(errorName);
  }
  public hasError3 = (controlName: string, errorName: string) => {
    return this.thirdFormGroup.controls[controlName].hasError(errorName);
  }
  public hasError2 = (controlName: string, errorName: string) => {
    return this.secondFormGroup.controls[controlName].hasError(errorName);
  }

  submitFirst(saveAsDraft:any) {
    if (this.firstFormGroup.valid) {
      let date = new Date(this.firstFormGroup.value.date_visit);
      var formData: any = new FormData();
      formData.append('pen_serial', this.firstFormGroup.value.pen_serial);
      formData.append('date_visit',moment(date).format('YYYY-MM-DD'));
     // formData.append('date_visit', this.now2);
      console.log(this.now2)
      formData.append("user_id", JSON.parse(localStorage.getItem('doctor_id')));
      console.log(localStorage.getItem('doctor_id'))
      formData.append('age', this.firstFormGroup.value.age);
      formData.append('mobile', JSON.parse(localStorage.getItem('mobile')))
      formData.append('sex', this.firstFormGroup.value.sex);
      formData.append('weight', this.firstFormGroup.value.weight);
      formData.append('height', this.firstFormGroup.value.height);
      formData.append('bmi', this.bmi);
      formData.append('education', this.firstFormGroup.value.education);
      formData.append('employment', this.firstFormGroup.value.employment);
      this.service.postAddBegin(formData).subscribe((res:any) => {
        if(res.status == "0"){
          this.toastr.warning("mobile no. already exist");
          return false
        }else{
          this.formId =  res.data.from_id;
          console.log(this.formId)
          if(saveAsDraft){
            this.toastr.info("The draft has been saved successfully")
            this.router.navigateByUrl('/dashboard')
          }
        }
        // this.formId = res['data'].from_id;
        // this.response = res.data
        console.log(res)
      //   console.log(this.formId)
      //  if( saveAsDraft){
      //   this.toastr.info("The draft has been saved successfully");
      //   this.router.navigateByUrl("/dashboard");
      })
     
    } else {
      this.firstFormGroup.markAllAsTouched();
      this.toastr.error("Please fill all the fields")
    
        }
  }
  antiDiabetesChange(event, name) {
    console.log(event)
    if (event.checked) {
      this.anti.push(name)
      console.log(this.anti)
      
    } else {
      let i = this.anti.indexOf(name);
      this.anti.splice(i, 1)
      console.log(this.anti)
    }
    if (this.anti.length) {
      this.check=false
      this.secondFormGroup.patchValue({
        'people_with_tdm': this.anti.toString()
      });
      this.secondFormGroup.updateValueAndValidity()
    } else {
      this.check=true
      this.secondFormGroup.patchValue({
        'people_with_tdm': ''
      })
      this.secondFormGroup.updateValueAndValidity()
    }
    // if (this.anti.length < 1) {
    //   this.check = false
      
    //   console.log("check box ")
    // } else {
    //   this.check = true;
     

    // }
  }
  onSecondSubmit(redirect) {
    // if (this.anti.length < 1) {
    //   this.check = true
    
      
    //   console.log("check box ")
    // } else {
    //   this.check = false;
    // }
    
    
    console.log("check",this.check);

    if (!this.secondFormGroup.valid || this.anti.length==0) {
     // this.isLinear = true
     this.check = true
      console.log(this.secondFormGroup.value)
      this.secondFormGroup.markAllAsTouched();
      // this.toastr.error("Please fill all the fields")
    }
    else {
      this.check = false;
   
      var formData: any = new FormData();
      formData.append('duration_hypertension', this.secondFormGroup.value.duration_hypertension);
      formData.append('duration_diabetes', this.secondFormGroup.value.duration_diabetes);
      formData.append('treated_diabetes', this.secondFormGroup.value.treated_diabetes);
      formData.append('family_diabetes', this.secondFormGroup.value.family_diabetes);
      formData.append('hypertension', this.secondFormGroup.value.hypertension);
      formData.append('systolic', this.secondFormGroup.value.systolic);
      formData.append('diastolic', this.secondFormGroup.value.diastolic);
      formData.append('smoking', this.secondFormGroup.value.smoking);
      formData.append('alcohol', this.secondFormGroup.value.alcohol);
      if(this.hypertension){
      this.Complications.hypertension_dur = this.secondFormGroup.value.hypertension_dur;
      this.Complications.duration_hypertension = this.secondFormGroup.value.duration;
      this.Complications.hypertension_medications = this.secondFormGroup.value.medications;
      formData.append('hypertension_dur', JSON.stringify(this.Complications));
      }
      if(this.dyslipidemia){
      this.dyslipidemiaobj.dyslipidemia_dur = this.secondFormGroup.value.dyslipidemia_dur;
      this.dyslipidemiaobj.dyslipidemia_duration = this.secondFormGroup.value.dyslipidemia_duration;
      this.dyslipidemiaobj.dyslipidemia_medication = this.secondFormGroup.value.dyslipidemia_medication;
      formData.append('dyslipidemia_dur', JSON.stringify(this.dyslipidemiaobj));
      }
      if(this.coronary){
      this.coronaryartery.coronary_artery_dur = this.secondFormGroup.value.coronary_artery_dur;
      this.coronaryartery.coronary_artery_duration = this.secondFormGroup.value.coronary_artery_duration;
      this.coronaryartery.coronary_artery_medication = this.secondFormGroup.value.coronary_artery_medication;
      formData.append('coronary_artery_dur', JSON.stringify(this.coronaryartery));
    }if(this.stroke){
      this.strokeobj.stroke_dur = this.secondFormGroup.value.stroke_dur;
      this.strokeobj.stroke_duration = this.secondFormGroup.value.stroke_duration;
      this.strokeobj.stroke_medication = this.secondFormGroup.value.stroke_medication;
      formData.append('stroke_dur', JSON.stringify(this.strokeobj));
    }
    if(this.neuropathy){
      this.neuropathyobj.neuropathy_dur = this.secondFormGroup.value.neuropathy_dur;
      this.neuropathyobj.neuropathy_duration = this.secondFormGroup.value.neuropathy_duration;
      this.neuropathyobj.neuropathy_medication = this.secondFormGroup.value.neuropathy_medication;
      formData.append('neuropathy_dur', JSON.stringify(this.neuropathyobj));
    }
    if(this.retinopathy){
      this.retinopathyobj.retinopathy_dur = this.secondFormGroup.value.retinopathy_dur;
      this.retinopathyobj.retinopathy_duration = this.secondFormGroup.value.retinopathy_duration;
      this.retinopathyobj.retinopathy_medication = this.secondFormGroup.value.retinopathy_medication;
      formData.append('retinopathy_dur', JSON.stringify(this.retinopathyobj));
    }
    if(this.nephropathy){
      this.nephropathyobj.nephropathy_dur = this.secondFormGroup.value.nephropathy_dur;
      this.nephropathyobj.nephropathy_duration = this.secondFormGroup.value.nephropathy_duration;
      this.nephropathyobj.nephropathy_medication = this.secondFormGroup.value.nephropathy_medication;
      formData.append('nephropathy_dur', JSON.stringify(this.nephropathyobj));
    }
      // this.anti_diabetes_medication.Biguanides = (this.secondFormGroup.value.Biguanides == true) ? this.secondFormGroup.value.Biguanides : false;
      // this.anti_diabetes_medication.Sulphonylureas = (this.secondFormGroup.value.Sulphonylureas == true) ? this.secondFormGroup.value.Sulphonylureas : false;
      // this.anti_diabetes_medication.Meglitinides = (this.secondFormGroup.value.Meglitinides == true) ? this.secondFormGroup.value.Meglitinides : false;
      // this.anti_diabetes_medication.Thiazolidendiones = (this.secondFormGroup.value.Thiazolidendiones == true) ? this.secondFormGroup.value.Thiazolidendiones : false;
      // this.anti_diabetes_medication.GLP_Analogues = (this.secondFormGroup.value.GLP_Analogues == true) ? this.secondFormGroup.value.GLP_Analogues : false;
      // this.anti_diabetes_medication.DPP4_Inhibitors = (this.secondFormGroup.value.DPP4_Inhibitors == true) ? this.secondFormGroup.value.DPP4_Inhibitors : false;
      // this.anti_diabetes_medication.DoubleDrugFixed = (this.secondFormGroup.value.DoubleDrugFixed == true) ? this.secondFormGroup.value.DoubleDrugFixed : false;
      // this.anti_diabetes_medication.TripleDrugFixed = (this.secondFormGroup.value.TripleDrugFixed == true) ? this.secondFormGroup.value.TripleDrugFixed : false;
      formData.append(' medical_condition', this.secondFormGroup.value.medical_condition)
      formData.append('anti_diabetes_medication', JSON.stringify(this.anti));
      formData.append('id',this.formId)
      this.service.postAddBegin(formData).subscribe(res => {
        
        console.log(res)
        console.log(this.formId)
     
       if(redirect){
        this.toastr.info("The draft has been saved successfully");
        this.router.navigateByUrl("/dashboard");
         }
       
      })
      
      
      console.log(this.secondFormGroup.value)
    }
  }
  thirdForm(event) {

    console.log(event)
    if (!this.thirdFormGroup.valid) {
      this.thirdFormGroup.markAllAsTouched();
      ///this.isLinear = true
      this.toastr.error('Please fill all the fields')
      console.log(this.thirdFormGroup.value)
     
    }
    else {
     // this.isLinear = false;
      var formData: any = new FormData();
      formData.append('fasting_plasma', this.thirdFormGroup.value.fasting_plasma);
      formData.append('postprandial_plasma', this.thirdFormGroup.value.postprandial_plasma);
      formData.append('glycosylated', this.thirdFormGroup.value.glycosylated+'.'+this.thirdFormGroup.value.glycosylated_decimal);
      formData.append('hbac_lab', this.thirdFormGroup.value.hbac_lab);
      formData.append('s_creatinine', this.thirdFormGroup.value.s_creatinine);
      formData.append('id',this.formId)
      this.service.postAddBegin(formData).subscribe(res => {
       
        console.log(res)
        console.log(this.formId)
    
       if(event){
         this.toastr.info('The draft has been saved successfully')
         this.router.navigateByUrl("/dashboard");
         }

       
      })
    }
  }

  



  oncheked(event: any, name: any) {
    if (event.checked == true) {
      this.hypertension = true
      if (name == 'hypertension_dur') {
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
  oncheked2(event: any, name: any) {
    if (event.checked == true) {
      this.dyslipidemia = true
      if (name == "dyslipidemia_dur") {
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

  oncheked3(event: any, name: any) {
    if (event.checked == true) {
      this.coronary = true
      if (name == "coronary_artery_dur") {
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
  oncheked4(event: any, name: any) {
    if (event.checked == true) {
      this.stroke = true
      if (name == "stroke_dur") {
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
  oncheked5(event: any, name: any) {
    if (event.checked == true) {
      this.neuropathy = true
      if (name == "neuropathy_dur") {
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
  oncheked6(event: any, name: any) {
    if (event.checked == true) {
      this.retinopathy = true
      if (name == "retinopathy_dur") {
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
  oncheked7(event: any, name: any) {
    if (event.checked == true) {
      this.nephropathy = true
      if (name == "nephropathy_dur") {
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

      this.fourthFormGroup.controls['glargine_insulin_breakfast'].setValidators([Validators.required])
      this.fourthFormGroup.controls['glargine_insulin_breakfast'].updateValueAndValidity()
      this.fourthFormGroup.controls['glargine_insulin_lunch'].setValidators([Validators.required]);
      this.fourthFormGroup.controls['glargine_insulin_lunch'].updateValueAndValidity()
      this.fourthFormGroup.controls['glargine_insulin_dinner'].setValidators([Validators.required]);
      this.fourthFormGroup.controls['glargine_insulin_dinner'].updateValueAndValidity()
      this.fourthFormGroup.updateValueAndValidity()
      this.glargine_condition = true
    }
    else {

      this.fourthFormGroup.controls['glargine_insulin_breakfast'].clearValidators()
      this.fourthFormGroup.controls['glargine_insulin_breakfast'].updateValueAndValidity();
       this.fourthFormGroup.controls['glargine_insulin_lunch'].clearValidators();
       this.fourthFormGroup.controls['glargine_insulin_lunch'].updateValueAndValidity();
      this.fourthFormGroup.controls['glargine_insulin_dinner'].clearValidators();
      this.fourthFormGroup.controls['glargine_insulin_dinner'].updateValueAndValidity();
      this.fourthFormGroup.updateValueAndValidity()

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



  submit() {

    var formData: any = new FormData();
    if (this.fourthFormGroup.valid) {
      this.glargineinsulinobj.glargine_insulin = (this.fourthFormGroup.value.glargine_insulin == true) ? this.fourthFormGroup.value.glargine_insulin : false;
      console.log(this.glargineinsulinobj)
      this.glargineinsulinobj.glargine_insulin_breakfast = this.fourthFormGroup.value.glargine_insulin_breakfast;
   
      this.glargineinsulinobj.glargine_insulin_lunch = this.fourthFormGroup.value.glargine_insulin_lunch;
      this.glargineinsulinobj.glargine_insulin_dinner = this.fourthFormGroup.value.glargine_insulin_dinner;
      console.log(this.glargineinsulinobj)
      formData.append('dose_insulin', this.fourthFormGroup.value.dose_insulin);
      console.log(this.fourthFormGroup.value.dose_insulin);
      formData.append('glargine_insulin', JSON.stringify(this.glargineinsulinobj));
      formData.append('id',this.formId);
      formData.append('status','yes');
      this.service.postAddBegin(formData).subscribe(res => {
      console.log(res)
      this.toastr.info("The draft has been saved successfully");
      this.router.navigateByUrl("/dashboard");
      })
    } else {
      console.log('not valid')
      this.toastr.error("Please fill all the fields")
      this.fourthFormGroup.markAllAsTouched()
    }


  }
}
