
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../main.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

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
  fourthFormGroup: FormGroup;
  
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
  status:any;
  format3: string = "";
  format2: string = "";
  title = 'Begin Entry';
  anti_diabetes_medication: any = {};
  Complications: any = {};
  dyslipidemiaobj: any = {};
  coronaryartery: any = {};
  strokeobj: any = {};
  neuropathyobj: any = {};
  retinopathyobj: any = {};
  nephropathyobj: any = {};
  glargineinsulinobj: any = {};
  completed: boolean;
  now2: any;
  now3: any;
  bmi:any;
  glargine: boolean;
  formId: any;
  response: any;
  beginDetails: boolean;
  date_visit: Date;
  isEditScreen: boolean;
  listingId: any;
  check: boolean = false;
  constructor( private _formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,private service:MainService,private toastr: ToastrService) { }

  ngOnInit(): void {
    if(localStorage.getItem("kdp_survey") != "yes"){
      this.router.navigateByUrl('/kap-survey')
    }
    this.form = this._formBuilder.group({
      id: new FormControl('')
      
    })
   
    this.firstFormGroup = this._formBuilder.group({
     
      user_id: new FormControl(''),
    // form_id:new FormControl(''),
     mobile: new FormControl(''),
      pen_serial: new FormControl(''),
      date_visit: new FormControl('', [Validators.required]),
      sex: new FormControl('', [Validators.required]),
      status:new FormControl(''),
      weight: new FormControl('', [Validators.required]),
      height: new FormControl('', [Validators.required]),
      bmi: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      education: new FormControl('', [Validators.required]),
      employment: new FormControl('', [Validators.required])
    });
    this.secondFormGroup = this._formBuilder.group({
     
      duration_diabetes: new FormControl('',[Validators.required]),
      treated_diabetes: new FormControl('',[Validators.required]),
      family_diabetes: new FormControl('',[Validators.required]),
      anti_diabetes_medication:new FormControl(''),
      hypertension: new FormControl('',[Validators.required]),
      duration_hypertension: new FormControl('',[Validators.required]),
      blood_pressure: new FormControl(''),
      systolic: new FormControl('',[Validators.required]),
      diastolic: new FormControl('',[Validators.required]),
      smoking: new FormControl('',[Validators.required]),
      alcohol: new FormControl('',[Validators.required]),
      hypertension_dur: new FormControl('',),
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


      fasting_plasma: new FormControl('',[Validators.required]),
      postprandial_plasma: new FormControl('',[Validators.required]),
      glycosylated: new FormControl('',[Validators.required]),
      glycosylated_decimal:new FormControl(''),
      hbac_lab: new FormControl('',[Validators.required]),
      s_creatinine: new FormControl(''),
      
      

    })
    this.fourthFormGroup =this._formBuilder.group({
      dose_insulin: new FormControl('',[Validators.required]),
      glargine_insulin: new FormControl('',[Validators.required]),
      glargine_insulin_breakfast: new FormControl('',[Validators.required]),
      glargine_insulin_lunch: new FormControl('',[Validators.required]),
      glargine_insulin_dinner: new FormControl('',[Validators.required]),
      status: new FormControl('',[Validators.required]),
      
      // thirdCtrl: ['gg', Validators.required],

    })
    
    
    // if(this.neuropathycheck.neuropathy_dur){
    //   this.neuropathy=true

    // }
    // else{
    //  this.neuropathy=false
    // }
    // if(this.retinopathycheck.retinopathy_dur){
    //   this.retinopathy=true

    // }
    // else{
    //  this.retinopathy=false
    // }
    //  if(this.nephrocheck.nephropathy_dur){
    //    this.nephropathy=true

    //  }
    //  else{
    //   this.nephropathy=false
    //  }

    //  this.secondFormGroup.patchValue({
    // "hypertension_dur":this.hypercheck.hypertension_dur,
    // "duration":this.hypercheck.duration,
    // "medications":this.hypercheck.medications,
    // "dyslipidemia_dur":this.dysncheck.dyslipidemia_dur,
    // "dyslipidemia_duration":this.dysncheck.dyslipidemia_duration,
    // "dyslipidemia_medication":this.dysncheck.dyslipidemia_medication,
    // "coronary_artery_dur":this.coroncheck.coronary_artery_dur,
    // "coronary_artery_duration":this.coroncheck.coronary_artery_duration,
    // "coronary_artery_medication":this.coroncheck.coronary_artery_medication,
    // "stroke_dur":this.strokecheck.stroke_dur,
    // "stroke_duration":this.strokecheck.stroke_duration,
    // "stroke_medication":this.strokecheck.stroke_medication,
    // "neuropathy_dur":this.neuropathycheck.neuropathy_dur,
    // "neuropathy_duration":this.neuropathycheck.neuropathy_duration,
    // "neuropathy_medication":this.neuropathycheck.neuropathy_medication,
    // "retinopathy_dur":this.retinopathycheck.retinopathy_dur,
    // "retinopathy_duration":this.retinopathycheck.retinopathy_duration,
    // "retinopathy_medication":this.retinopathycheck.retinopathy_medication,
    // "nephropathy_dur":this.nephrocheck.nephropathy_dur,
    // "nephropathy_duration":this.nephrocheck.nephropathy_duration,
    // "nephropathy_medication":this.nephrocheck.nephropathy_medication,
    //   })
    // this.secondFormGroup.updateValueAndValidity();

    //   this.fourthFormGroup.patchValue({
    //   "glargine_insulin_breakfast":this.garglineArray.glargine_insulin_breakfast,
      
    //   "glargine_insulin_dinner":this.garglineArray.glargine_insulin_dinner


    //  })
    //  this.fourthFormGroup.updateValueAndValidity();

    // })

    let routeParams = this.route.snapshot.params;
   if( routeParams != undefined && Object.keys( routeParams).length>0){
    console.log(routeParams)
    this.isEditScreen =  true;
  this.listingId =  routeParams.id;
  console.log("routeparams compledte",routeParams , this.route.snapshot)
    if(routeParams && routeParams.completed){
     // alert("here")
      this.completed = true;
      this.firstFormGroup.disable();
      this.secondFormGroup.disable();
      this.thirdFormGroup.disable();
      this.fourthFormGroup.disable();
    }else{
      this.completed = false
    }
    this.getDetails()
    
  }else{
    this.isEditScreen = false;
    this.completed = false;
  }
  
  }
  btnClick(){
    this.router.navigateByUrl('/dashboard');
  }

  
  getDetails(){
    var formData: any = new FormData();
    formData.append('id',  this.listingId);
    this.service.beginview(formData).subscribe((res:any) => {
      this.beginview =res.data
      this.updatevalue()
      console.log(res)
  
    if(this.beginview.medical_condition=="yes"){
      this.medication=true

    }
    else{
     this.medication=false
    }

    if(this.beginview && this.beginview.medical_condition){
      this.secondFormGroup.patchValue({
        'medical_condition':this.beginview.medical_condition
      })
      this.secondFormGroup.updateValueAndValidity()
    }
  })
}

getdigit() {
  return Array.from({ length: 10 }, (v, k) => k + 1);
}
  updatevalue(){
    if(this.beginview && this.beginview.pen_serial!=''){
      this.firstFormGroup.patchValue({
        "pen_serial":this.beginview.pen_serial
      });
      this.firstFormGroup.updateValueAndValidity();
    }
    if(this.beginview && this.beginview.date_visit!=''){
      this.firstFormGroup.patchValue({
        'date_visit':new Date(this.beginview.date_visit)
      });
      this.date_visit = new Date(this.beginview.date_visit);
      this.firstFormGroup.get('date_visit').updateValueAndValidity();
      this.firstFormGroup.updateValueAndValidity()
    }
    if(this.beginview && this.beginview.sex!=''){
      this.firstFormGroup.patchValue({
        "sex":this.beginview.sex
      });
      this.firstFormGroup.updateValueAndValidity()
    }
    if(this.beginview && this.beginview.age){
      this.firstFormGroup.patchValue({
        'age':this.beginview.age
      });
      this.firstFormGroup.updateValueAndValidity()
    }
    if(this.beginview && this.beginview.weight){
      this.firstFormGroup.patchValue({
        'weight':this.beginview.weight
      });
      this.firstFormGroup.updateValueAndValidity()
    }
    if(this.beginview && this.beginview.height){
      this.firstFormGroup.patchValue({
        'height':this.beginview.height 
      });
      this.firstFormGroup.updateValueAndValidity()
    }
    if(this.beginview && this.beginview.bmi){
      this.bmi=this.beginview.bmi
      this.firstFormGroup.patchValue({
        'bmi':this.beginview.bmi
      });
      this.firstFormGroup.updateValueAndValidity();
    }
    if(this.beginview && this.beginview.education){
      this.firstFormGroup.patchValue({
        'education':this.beginview.education
      })
      this.firstFormGroup.updateValueAndValidity();
    }
    if(this.beginview && this.beginview.employment){
      this.firstFormGroup.patchValue({
        'employment':this.beginview.employment
      });
      this.firstFormGroup.updateValueAndValidity();
    }
    if(this.beginview && this.beginview.duration_diabetes){
      this.secondFormGroup.patchValue({
        'duration_diabetes':this.beginview.duration_diabetes
      });
      this.secondFormGroup.updateValueAndValidity()
    }
    if(this.beginview && this.beginview.treated_diabetes){
      this.secondFormGroup.patchValue({
        'treated_diabetes':this.beginview.treated_diabetes
      })
      this.secondFormGroup.updateValueAndValidity()
    }
    if(this.beginview && this.beginview.family_diabetes){
      this.secondFormGroup.patchValue({
        'family_diabetes':this.beginview.family_diabetes
      })
      this.secondFormGroup.updateValueAndValidity()
    }
    
    if(this.beginview && this.beginview.duration_hypertension){
      this.secondFormGroup.patchValue({
        'duration_hypertension':this.beginview.duration_hypertension
      })
      this.secondFormGroup.updateValueAndValidity()
    }
    if(this.beginview && this.beginview.hypertension){
      this.secondFormGroup.patchValue({
        'hypertension':this.beginview.hypertension
      })
      this.secondFormGroup.updateValueAndValidity()
    }
    if(this.beginview && this.beginview.systolic){
      this.secondFormGroup.patchValue({
        'systolic':this.beginview.systolic
      });
      this.secondFormGroup.updateValueAndValidity();
    }
    if(this.beginview && this.beginview.diastolic){
      this.secondFormGroup.patchValue({
        'diastolic':this.beginview.diastolic
      });
      this.secondFormGroup.updateValueAndValidity()
    }
    if(this.beginview && this.beginview.smoking){
      this.secondFormGroup.patchValue({
        'smoking':this.beginview.smoking
      });
      this.secondFormGroup.updateValueAndValidity();
    }
    if(this.beginview && this.beginview.alcohol){
      this.secondFormGroup.patchValue({
        'alcohol':this.beginview.alcohol
      })
      this.secondFormGroup.updateValueAndValidity();
    }
   
    if(this.beginview && this.beginview.hypertension_dur != ''){
      this.hypercheck = JSON.parse(this.beginview.hypertension_dur)
      if(this.hypercheck.hypertension_dur){
        this.hypertension = true;
      }
      else{
        this.hypertension = false;
      }
      this.secondFormGroup.patchValue({
        'hypertension_dur':this.hypercheck.hypertension_dur
      });
      this.secondFormGroup.patchValue({
        "duration":this.hypercheck.duration_hypertension,
      })
      this.secondFormGroup.patchValue({
        "medications":this.hypercheck.hypertension_medications,
      })
      this.secondFormGroup.updateValueAndValidity();
    }
    if(this.beginview && this.beginview.dyslipidemia_dur != ''){
      this.dysncheck = JSON.parse(this.beginview.dyslipidemia_dur)
      if(this.dysncheck.dyslipidemia_dur){
        this.dyslipidemia = true;
      }
      else{
        this.dyslipidemia = false;
      }
      this.secondFormGroup.patchValue({
        'dyslipidemia_dur':this.dysncheck.dyslipidemia_dur
      });
      this.secondFormGroup.patchValue({
        "dyslipidemia_duration":this.dysncheck.dyslipidemia_duration,
      })
      this.secondFormGroup.patchValue({
        "dyslipidemia_medication":this.dysncheck.dyslipidemia_medication,
      })
      this.secondFormGroup.updateValueAndValidity();
    }

    if(this.beginview && this.beginview.coronary_artery_dur != ''){
      this.coroncheck = JSON.parse(this.beginview.coronary_artery_dur)
      if(this.coroncheck.coronary_artery_dur){
        this.coronary = true;
      }
      else{
        this.coronary = false;
      }
      this.secondFormGroup.patchValue({
        'coronary_artery_dur':this.coroncheck.coronary_artery_dur
      });
      this.secondFormGroup.patchValue({
        "coronary_artery_duration":this.coroncheck.coronary_artery_duration,
      })
      this.secondFormGroup.patchValue({
        "coronary_artery_medication":this.coroncheck.coronary_artery_medication,
      })
      this.secondFormGroup.updateValueAndValidity();
    }
   

    if(this.beginview && this.beginview.stroke_dur != ''){
      this.strokecheck = JSON.parse(this.beginview.stroke_dur)
      if(this.strokecheck.stroke_dur){
        this.stroke = true;
      }
      else{
        this.stroke = false;
      }
      this.secondFormGroup.patchValue({
        'stroke_dur':this.strokecheck.stroke_dur
      });
      this.secondFormGroup.patchValue({
        "stroke_duration":this.strokecheck.stroke_duration,
      })
      this.secondFormGroup.patchValue({
        "stroke_medication":this.strokecheck.stroke_medication,
      })
      this.secondFormGroup.updateValueAndValidity();
    }
    if(this.beginview && this.beginview.neuropathy_dur != ''){
      this.neuropathycheck = JSON.parse(this.beginview.neuropathy_dur)
      if(this.neuropathycheck.neuropathy_dur){
        this.neuropathy = true;
      }
      else{
        this.neuropathy = false;
      }
      this.secondFormGroup.patchValue({
        'neuropathy_dur':this.neuropathycheck.neuropathy_dur
      });
      this.secondFormGroup.patchValue({
        "neuropathy_duration":this.neuropathycheck.neuropathy_duration,
      })
      this.secondFormGroup.patchValue({
        "neuropathy_medication":this.neuropathycheck.neuropathy_medication,
      })
      this.secondFormGroup.updateValueAndValidity();
    }
    if(this.beginview && this.beginview.retinopathy_dur != ''){
      this.retinopathycheck = JSON.parse(this.beginview.retinopathy_dur)
      if(this.retinopathycheck.retinopathy_dur){
        this.retinopathy = true;
      }
      else{
        this.retinopathy = false;
      }
      this.secondFormGroup.patchValue({
        'retinopathy_dur':this.retinopathycheck.retinopathy_dur
      });
      this.secondFormGroup.patchValue({
        "retinopathy_duration":this.retinopathycheck.retinopathy_duration,
      })
      this.secondFormGroup.patchValue({
        "retinopathy_medication":this.retinopathycheck.retinopathy_medication,
      })
      this.secondFormGroup.updateValueAndValidity();
    }

    if(this.beginview && this.beginview.nephropathy_dur != ''){
      this.nephrocheck = JSON.parse(this.beginview.nephropathy_dur)
      if(this.nephrocheck.nephropathy_dur){
        this.nephropathy = true;
      }
      else{
        this.nephropathy = false;
      }
      this.secondFormGroup.patchValue({
        'nephropathy_dur':this.nephrocheck.nephropathy_dur
      });
      this.secondFormGroup.patchValue({
        "nephropathy_duration":this.nephrocheck.nephropathy_duration,
      })
      this.secondFormGroup.patchValue({
        "nephropathy_medication":this.nephrocheck.nephropathy_medication,
      })
      this.secondFormGroup.updateValueAndValidity();
    }

    if(this.beginview && this.beginview.anti_diabetes_medication!='')
    {
      this.antichecked =JSON.parse(this.beginview.anti_diabetes_medication)
      this.anti=JSON.parse(this.beginview.anti_diabetes_medication)
      console.log(this.antichecked)
      
      this.secondFormGroup.patchValue({
        'anti_diabetes_medication':this.antichecked.anti_diabetes_medication
      })
      this.secondFormGroup.updateValueAndValidity();
   
     }  

    if(this.beginview && this.beginview.fasting_plasma){
      this.thirdFormGroup.patchValue({
        'fasting_plasma':this.beginview.fasting_plasma
      });
      this.thirdFormGroup.updateValueAndValidity()
    }
    if(this.beginview && this.beginview.postprandial_plasma){
      this.thirdFormGroup.patchValue({
        'postprandial_plasma':this.beginview.postprandial_plasma
      });
      this.thirdFormGroup.updateValueAndValidity()
    }
    if(this.beginview && this.beginview.glycosylated){
      let arr = this.beginview.glycosylated.split(".");
      console.log(arr)
      this.thirdFormGroup.patchValue({
        'glycosylated':arr[0]
      });
      this.thirdFormGroup.updateValueAndValidity()
      this.thirdFormGroup.patchValue({
        'glycosylated_decimal':arr[1]?arr[1]:'0'
      });
      this.thirdFormGroup.updateValueAndValidity()
    }
    if(this.beginview && this.beginview.hbac_lab){
      this.thirdFormGroup.patchValue({
        'hbac_lab':this.beginview.hbac_lab
      })
      this.thirdFormGroup.updateValueAndValidity()
    }
    if(this.beginview && this.beginview.s_creatinine){
      this.thirdFormGroup.patchValue({
        's_creatinine':this.beginview.s_creatinine
      });
      this.thirdFormGroup.updateValueAndValidity()
    }

    if(this.beginview && this.beginview.dose_insulin){
      this.fourthFormGroup.patchValue({
        'dose_insulin':this.beginview.dose_insulin
      });
      this.fourthFormGroup.updateValueAndValidity()
    }
    if(this.beginview && this.beginview.glargine_insulin){
       this.garglineArray = JSON.parse(this.beginview.glargine_insulin)
      if(this.beginview.glargine_insulin){
        this.glargine_condition=true
 
      }
      else{
       this.glargine_condition=false
      }
      this.fourthFormGroup.patchValue({
        'glargine_insulin':this.garglineArray.glargine_insulin
      });
      this.fourthFormGroup.patchValue({
        'glargine_insulin_breakfast':this.garglineArray.glargine_insulin_breakfast
      });
      this.fourthFormGroup.patchValue({
        'glargine_insulin_lunch':this.garglineArray.glargine_insulin_lunch
      });
      this.fourthFormGroup.patchValue({
        'glargine_insulin_dinner':this.garglineArray.glargine_insulin_dinner
      });
      this.fourthFormGroup.updateValueAndValidity()
    }
  }
  checkAntiDiabetes(name){
    // console.log('checkAntiDiabetes name',name)
    // if (this.antichecked.length) {
    //   this.check=false
     
    // } else {
    //   this.check=true
      
    // }
   
    if(this.antichecked.indexOf(name)>-1){
    
      return true
    }else{
      return false
    }
    
   
  }

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
   
  
  getvalue() {
    return Array.from({ length: 451 }, (v, k) => k + 50);
  }
  getvalues() {
    return Array.from({ length: 20 }, (v, k) => k + 1);
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
 
  getvaluediabetes() {
    return Array.from({ length: 50 }, (v, k) => k + 1);
  }
  getmulvalues() {
    return Array.from({ length: 198 }, (v, k) => k + 3);
  }
  getCreatinine() {
    //return Array.from({length:50 }, (_value , k) =>  k / 10);
    return Array.from({length:50 }, (_value , k=1) => ((k / 10)+0.1).toFixed(1) );

  }
  public hasError = (controlName: string, errorName: string) => {
    return this.firstFormGroup.controls[controlName].hasError(errorName);
  }
  public hasError2 = (controlName: string, errorName: string) => {
    return this.secondFormGroup.controls[controlName].hasError(errorName);
  }
  public hasError3 = (controlName: string, errorName: string) => {
    return this.thirdFormGroup.controls[controlName].hasError(errorName);
  }
  public hasError4 = (controlName: string, errorName: string) => {
    return this.fourthFormGroup.controls[controlName].hasError(errorName);
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
  submitFirst(saveAsDraft:any) {
    if (this.firstFormGroup.valid) {
      let date = new Date(this.firstFormGroup.value.date_visit);
      var formData: any = new FormData();
      formData.append('id',this.route.snapshot.params.id)
      formData.append('form_id',this.formId)
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
      if(this.isEditScreen){
        formData.append('id',this.listingId);
      }
      this.service.postAddBegin(formData).subscribe((res:any) => {
        this.formId = res.data.from_id;
        this.response = res.data
        console.log(res)
        console.log(this.formId)
       if( saveAsDraft){
       this.toastr.info("The draft has been saved successfully");
       this.router.navigateByUrl("/dashboard");
      
       }
       
      })
     
    } else {
      this.firstFormGroup.markAllAsTouched();
     // this.toastr.error("Please fill all the fields")
    
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
    if (this.anti.length && this.antichecked.length) {
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
    }
  }
  onSecondSubmit(redirect) {

    if (!this.secondFormGroup.valid || this.anti.length==0 && this.antichecked.length==0) {
     // this.isLinear = true
     this.check = true
      console.log(this.secondFormGroup.value)
      this.secondFormGroup.markAllAsTouched();
      this.toastr.error("Please fill all the fields")
    }
    else {
      this.check = false
      //this.isLinear = false
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
      this.Complications.hypertension_dur = this.secondFormGroup.value.hypertension_dur;
      this.Complications.duration = this.secondFormGroup.value.duration;
      this.Complications.medications = this.secondFormGroup.value.medications;
      this.dyslipidemiaobj.dyslipidemia_dur = this.secondFormGroup.value.dyslipidemia_dur;
      this.dyslipidemiaobj.dyslipidemia_duration = this.secondFormGroup.value.dyslipidemia_duration;
      this.dyslipidemiaobj.dyslipidemia_medication = this.secondFormGroup.value.dyslipidemia_medication;
      this.coronaryartery.coronary_artery_dur = this.secondFormGroup.value.coronary_artery_dur;
      this.coronaryartery.coronary_artery_duration = this.secondFormGroup.value.coronary_artery_duration;
      this.coronaryartery.coronary_artery_medication = this.secondFormGroup.value.coronary_artery_medication;
      this.strokeobj.stroke_dur = this.secondFormGroup.value.stroke_dur;
      this.strokeobj.stroke_duration = this.secondFormGroup.value.stroke_duration;
      this.strokeobj.stroke_medication = this.secondFormGroup.value.stroke_medication;
      this.neuropathyobj.neuropathy_dur = this.secondFormGroup.value.neuropathy_dur;
      this.neuropathyobj.neuropathy_duration = this.secondFormGroup.value.neuropathy_duration;
      this.neuropathyobj.neuropathy_medication = this.secondFormGroup.value.neuropathy_medication;
      this.retinopathyobj.retinopathy_dur = this.secondFormGroup.value.retinopathy_dur;
      this.retinopathyobj.retinopathy_duration = this.secondFormGroup.value.retinopathy_duration;
      this.retinopathyobj.retinopathy_medication = this.secondFormGroup.value.retinopathy_medication;
      this.nephropathyobj.nephropathy_dur = this.secondFormGroup.value.nephropathy_dur;
      this.nephropathyobj.nephropathy_duration = this.secondFormGroup.value.nephropathy_duration;
      this.nephropathyobj.nephropathy_medication = this.secondFormGroup.value.nephropathy_medication;
      // this.anti_diabetes_medication.Biguanides = (this.secondFormGroup.value.Biguanides == true) ? this.secondFormGroup.value.Biguanides : false;
      // this.anti_diabetes_medication.Sulphonylureas = (this.secondFormGroup.value.Sulphonylureas == true) ? this.secondFormGroup.value.Sulphonylureas : false;
      // this.anti_diabetes_medication.Meglitinides = (this.secondFormGroup.value.Meglitinides == true) ? this.secondFormGroup.value.Meglitinides : false;
      // this.anti_diabetes_medication.Thiazolidendiones = (this.secondFormGroup.value.Thiazolidendiones == true) ? this.secondFormGroup.value.Thiazolidendiones : false;
      // this.anti_diabetes_medication.GLP_Analogues = (this.secondFormGroup.value.GLP_Analogues == true) ? this.secondFormGroup.value.GLP_Analogues : false;
      // this.anti_diabetes_medication.DPP4_Inhibitors = (this.secondFormGroup.value.DPP4_Inhibitors == true) ? this.secondFormGroup.value.DPP4_Inhibitors : false;
      // this.anti_diabetes_medication.DoubleDrugFixed = (this.secondFormGroup.value.DoubleDrugFixed == true) ? this.secondFormGroup.value.DoubleDrugFixed : false;
      // this.anti_diabetes_medication.TripleDrugFixed = (this.secondFormGroup.value.TripleDrugFixed == true) ? this.secondFormGroup.value.TripleDrugFixed : false;
      
      console.log('anti',this.anti);
      formData.append(' medical_condition', this.secondFormGroup.value.medical_condition);
      formData.append('hypertension_dur', JSON.stringify(this.Complications));
      formData.append('dyslipidemia_dur', JSON.stringify(this.dyslipidemiaobj));
      formData.append('coronary_artery_dur', JSON.stringify(this.coronaryartery));
      formData.append('stroke_dur', JSON.stringify(this.strokeobj));
      formData.append('neuropathy_dur', JSON.stringify(this.neuropathyobj));
      formData.append('retinopathy_dur', JSON.stringify(this.retinopathyobj));
      formData.append('nephropathy_dur', JSON.stringify(this.nephropathyobj));
      formData.append('anti_diabetes_medication', JSON.stringify(this.anti));
      if(this.isEditScreen){
        formData.append('id',this.listingId);
      }else{
        formData.append("id",this.formId);
      }
      formData.append('id',this.route.snapshot.params.id)
      formData.append('form_id',this.formId)
      this.service.postAddBegin(formData).subscribe((res:any) => {
       console.log(res)
       if(redirect){
       this.toastr.info("The draft has been saved successfully");
       this.router.navigateByUrl("/dashboard");
         }
       
      })
      
      
      console.log(this.secondFormGroup.value)
    }
  }
  thirdForm(event) {

    console.log(event,this.thirdFormGroup.valid)
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
      formData.append('id',this.route.snapshot.params.id)
      formData.append('form_id',this.formId)
      if(this.isEditScreen){
        formData.append('id',this.listingId);
      }else{
        formData.append("id",this.formId);
      }
      this.service.postAddBegin(formData).subscribe(res => {
       
       
        console.log(res)
        console.log(this.formId)
    
       if(event){
         this.toastr.info('The draft has been saved successfully')
        this.router.navigateByUrl("/dashboard");
         }//else{
        //   // alert('Please fill all the fields')
        // }

       
      })
    }
  }
  submit() {

    var formData: any = new FormData();
    if (this.fourthFormGroup.valid) {
      this.glargineinsulinobj.glargine_insulin = (this.fourthFormGroup.value.glargine_insulin == true) ? this.fourthFormGroup.value.glargine_insulin : false;
      console.log(this.glargineinsulinobj)
      this.glargineinsulinobj.glargine_insulin_breakfast = this.fourthFormGroup.value.glargine_insulin_breakfast;
     // console.log(this.glargineinsulinobj.breakfast)
       this.glargineinsulinobj.glargine_insulin_lunch = this.fourthFormGroup.value.glargine_insulin_lunch;
      this.glargineinsulinobj.glargine_insulin_dinner = this.fourthFormGroup.value.glargine_insulin_dinner;
      console.log(this.glargineinsulinobj)
      formData.append('dose_insulin', this.fourthFormGroup.value.dose_insulin);
      console.log(this.fourthFormGroup.value.dose_insulin);
      formData.append('glargine_insulin', JSON.stringify(this.glargineinsulinobj));
     // formData.append('id',this.formId);
     formData.append('id',this.route.snapshot.params.id)
      console.log(this.formId)
      formData.append('form_id',this.formId);
      formData.append('status','yes');
      if(this.isEditScreen){
        formData.append('id',this.listingId);
      }else{
        formData.append("id",this.formId);
      }
      this.service.postAddBegin(formData).subscribe(res => {
      console.log(res)
      this.toastr.success("The update data  successfully");
      this.router.navigateByUrl("/dashboard");
      })
    } else {
      console.log('not valid')
      this.toastr.error("Please fill all the fields")
      this.fourthFormGroup.markAllAsTouched()
    }


  }

}
