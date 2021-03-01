import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { MainService } from '../main.service';


@Component({
  selector: 'app-draft-view',
  templateUrl: './draft-view.component.html',
  styleUrls: ['./draft-view.component.css']
})
export class DraftViewComponent implements OnInit {
  //vascular: any = {};
  isLinear = true;
  antidiabetes: any = [];
  hyperArray: any={};
  dyslipidemiaObj:any = {};
  coronaryObj: any = {};
  strokeObj: any = {};
  neuropathyObj:any = {}
  retinopathyObj: any = {};
  nephropathyObj: any ={};
  bloodInvetigateObj: any={};
  human_premixedfiftyArray: any=[];
  human_premixedthirtyArray: any={};
  regular_insulinArray: any={};
  nph_insulinArray: any={};
  glargine_insulinArray: any={};
  medical: any = {};
  dyslipidemiaArrray: any = {}
  coronaryArray: any = {}
  strokeArray: any = {}
  neuropathyArray: any = {}
  retinopathyArray: any = {};
  nephropathyArray: any = {};
  anti_diabetes: any = [];
  blood_investigation_obj: any = {}
  human_premixed_thirty_Obj: any = {}
  human_premixed_fifty_Obj: any = {}
  regular_insulin_Obj: any = {}
  nph_insulin_Obj: any = {}
  glargine_insulin_Obj: any = {}
  dobDate: string;
  isFormSubmitted: boolean;
  bmi: any;
  resetform: any=[];
  nowDate: any;
  formId: any;
  completed: boolean;
  listingId: any;
  isEditScreen: boolean;
  date_visit : Date;
  initiateres: any;
  humanArray: any=[];
  humancheck: boolean;
  check: boolean;
  humanchange: boolean;
  glargine_insulinchange: boolean;
  nph_insulinchange: boolean;
  regular_insulinchange: boolean;
  human50change: boolean;
  //routeParams: any;
 
  constructor(private service:MainService,private _formBuilder:FormBuilder,private route:ActivatedRoute, private toastr: ToastrService, private router:Router) { }
  viewData:any = []
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  complications: any;
  medication: any;
  hypertension: any = false;
  dyslipidemia: any = false;
  stroke: any = false;
  neuropathy: any=false;
  retinopathy: any=false;
  nephropathy: any=false;
  coronary: any=false;
  bloodInvestigation: any=false;
  human_premixedthirty: any = false;
  human_premixedfifty: boolean = false;
  regular: boolean = false;
  nph: boolean = false;
  glargine: boolean = false;
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      user_id: new FormControl(''),
      id:new FormControl(''),
    // mobile: new FormControl(''),
      pen_serial: new FormControl(),
      date_visit: new FormControl('',[Validators.required]),
      sex: new FormControl('',[Validators.required]),
      weight: new FormControl('',[Validators.required]),
      height: new FormControl('',[Validators.required]),
      bmi: new FormControl(''),
      age: new FormControl('',[Validators.required]),
      education: new FormControl('',[Validators.required]),
      employment: new FormControl('',[Validators.required]),
      form_id :new FormControl(''),
      status:new FormControl('')
    });

    this.secondFormGroup = this._formBuilder.group({
      
      duration_diabetes: new FormControl('',[Validators.required]),
      treated_diabetes: new FormControl('',[Validators.required]),
      //age_at_diabetes: new FormControl(''),
      family_diabetes: new FormControl('',[Validators.required]),
      hypertension: new FormControl('',[Validators.required]),
      duration_hypertension: new FormControl('',[Validators.required]),
     // blood_pressure: new FormControl(''),
      systolic: new FormControl('', [Validators.required]),
      diastolic: new FormControl('', [Validators.required]),
      smoking: new FormControl('', [Validators.required]),
      alcohol: new FormControl('', [Validators.required]),
     
      hypertension_dur: new FormControl(''),
      dyslipidemia_dur: new FormControl(''),
      coronary_artery_dur: new FormControl(''),
      stroke_dur: new FormControl(''),
      neuropathy_dur: new FormControl(''),
      retinopathy_dur: new FormControl(''),
      nephropathy_dur: new FormControl(''),
      anti_diabetes_medication: new FormControl(''),
      medical_condition: new FormControl('',[Validators.required]),
      Biguanides:new FormControl(''),
      Sulphonylureas: new FormControl(''),
      //Meglitinides: new FormControl(''),
      Thiazolidendiones: new FormControl(''),
      sglt2_inhibitors:new FormControl(''),
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
      diabetes_valid:new FormControl('',Validators.required)

    });
    
    this.thirdFormGroup = this._formBuilder.group({
      fasting_plasma:new FormControl('', [Validators.required]),
      postprandial_plasma:new FormControl('', [Validators.required]),
      glyscolated:new FormControl('', [Validators.required]),
      hba1_c:new FormControl('', [Validators.required]),
      s_creatinine:new FormControl(''),
      glycosylated_decimal: new FormControl('',Validators.required)
    })
    this.fourthFormGroup = this._formBuilder.group({
      // fourty_iu_vial: new FormControl(''),
      // hundred_iu_vial: new FormControl(''),
      // refill: new FormControl(''),
      human_premixed_thirty: new FormControl(''),
     
      human_premixed_fifty: new FormControl(''),
      regular_insulin: new FormControl(''),
      nph_insulin: new FormControl(''),
      glargine_insulin: new FormControl(''),
     
      human_premixed_thirty_breakfast: new FormControl(''),
      human_premixed_thirty_lunch: new FormControl(''),
      human_premixed_thirty_dinner: new FormControl(''),
      human_premixed_fifty_breakfast: new FormControl(''),
      human_premixed_fifty_lunch: new FormControl(''),
      human_premixed_fifty_dinner: new FormControl(''),
      regular_insulin_breakfast: new FormControl(''),
      regular_insulin_lunch: new FormControl(''),
      regular_insulin_dinner: new FormControl(''),
      nph_insulin_breakfast: new FormControl(''),
      nph_insulin_lunch: new FormControl(''),
      nph_insulin_dinner: new FormControl(''),
      glargine_insulin_breakfast: new FormControl(''),
      glargine_insulin_lunch: new FormControl(''),
      glargine_insulin_dinner: new FormControl(''),
      human_premixed:new FormControl(0),
      human_premixed50:new FormControl(0),
      regularinsulin:new FormControl(0),
      nphcheck:new FormControl(0),
      glarginecheck:new FormControl(0)
     

    })

   let routeParams = this.route.snapshot.params;
   if( routeParams != undefined && Object.keys( routeParams).length>0){
    console.log(routeParams)
    this.isEditScreen =  true;
  this.listingId =  routeParams.id;
  console.log("routeparams compledte",routeParams , this.route.snapshot)
    if(routeParams && routeParams.completed){
      
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
back(){
  this.router.navigateByUrl('/dashboard')
}
//errors functions
get g() {
  return this.firstFormGroup.controls;
}
get f() {
  return this.secondFormGroup.controls;
}
get h(){
  return this.thirdFormGroup.controls;
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
getDetails(){
  const formdata = new FormData();
  formdata.append('id', this.listingId)
  
  this.service.draftView(formdata).subscribe((res:any)=>{
  console.log(res)

  this.viewData = res.data
  this.populateDetails()
  if(this.viewData.medical_condition=='yes'){
    this.medication = true;
  }
  else{
    this.medication = false;
 }
if(this.viewData && this.viewData.medical_condition)
{
   
    this.secondFormGroup.patchValue({
      'medical_condition':this.viewData.medical_condition
    })
}  
  })
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

populateDetails(){
  if(this.viewData && this.viewData.pen_serial!=''){
    this.firstFormGroup.patchValue({
      "pen_serial":this.viewData.pen_serial
    });
    this.firstFormGroup.updateValueAndValidity()
  }
  if(this.viewData && this.viewData.date_visit!=''){
    //JSON.parse(this.viewData.date_visit)
    
    this.firstFormGroup.patchValue({
      'date_visit':this.viewData.date_visit
    });
     this.date_visit = new Date(this.viewData.date_visit)
    this.firstFormGroup.get('date_visit').updateValueAndValidity();
    this.firstFormGroup.updateValueAndValidity()
  }
  if(this.viewData && this.viewData.sex!=''){
    this.firstFormGroup.patchValue({
      "sex":this.viewData.sex
    });
    this.firstFormGroup.updateValueAndValidity()
  }
  if(this.viewData && this.viewData.age){
    this.firstFormGroup.patchValue({
      'age':this.viewData.age
    });
    this.firstFormGroup.updateValueAndValidity()
  }
  if(this.viewData && this.viewData.weight){
    this.firstFormGroup.patchValue({
      'weight':this.viewData.weight
    });
    this.firstFormGroup.updateValueAndValidity()
  }
  if(this.viewData && this.viewData.height){
    this.firstFormGroup.patchValue({
      'height':this.viewData.height 
    });
    this.firstFormGroup.updateValueAndValidity()
  }
  if(this.viewData && this.viewData.bmi){
    this.bmi = this.viewData.bmi
    this.firstFormGroup.patchValue({
      'bmi':this.viewData.bmi
    });
    this.firstFormGroup.updateValueAndValidity();
  }
  if(this.viewData && this.viewData.education){
    this.firstFormGroup.patchValue({
      'education':this.viewData.education
    })
    this.firstFormGroup.updateValueAndValidity();
  }
  if(this.viewData && this.viewData.employment){
    this.firstFormGroup.patchValue({
      'employment':this.viewData.employment
    });
    this.firstFormGroup.updateValueAndValidity();
  }
  if(this.viewData && this.viewData.duration_diabetes){
    this.secondFormGroup.patchValue({
      'duration_diabetes':this.viewData.duration_diabetes
    });
    this.secondFormGroup.updateValueAndValidity()
  }
  if(this.viewData && this.viewData.treated_diabetes){
    this.secondFormGroup.patchValue({
      'treated_diabetes':this.viewData.treated_diabetes
    })
    this.secondFormGroup.updateValueAndValidity()
  }
  if(this.viewData && this.viewData.family_diabetes){
    this.secondFormGroup.patchValue({
      'family_diabetes':this.viewData.family_diabetes
    })
    this.secondFormGroup.updateValueAndValidity()
  }
  if(this.viewData && this.viewData.hypertension){
    this.secondFormGroup.patchValue({
      'hypertension':this.viewData.hypertension
    })
    this.secondFormGroup.updateValueAndValidity()
  }
  if(this.viewData && this.viewData.duration_hypertension !=''){
    this.secondFormGroup.patchValue({
      'duration_hypertension':this.viewData.duration_hypertension
    });
    this.secondFormGroup.updateValueAndValidity();
  }
  if(this.viewData && this.viewData.systolic){
    this.secondFormGroup.patchValue({
      'systolic':this.viewData.systolic
    });
    this.secondFormGroup.updateValueAndValidity();
  }
  if(this.viewData && this.viewData.diastolic){
    this.secondFormGroup.patchValue({
      'diastolic':this.viewData.diastolic
    });
    this.secondFormGroup.updateValueAndValidity()
  }
  if(this.viewData && this.viewData.smoking){
    this.secondFormGroup.patchValue({
      'smoking':this.viewData.smoking
    });
    this.secondFormGroup.updateValueAndValidity();
  }
  if(this.viewData && this.viewData.alcohol){
    this.secondFormGroup.patchValue({
      'alcohol':this.viewData.alcohol
    })
    this.secondFormGroup.updateValueAndValidity();
  }
  
  this.secondFormGroup.updateValueAndValidity();
  if(this.viewData && this.viewData.hypertension_dur != ''){
    this.hyperArray = JSON.parse(this.viewData.hypertension_dur)
    if(this.hyperArray.hypertension_dur){
      this.hypertension = true;
    }
    else{
      this.hypertension = false;
    }
    this.secondFormGroup.patchValue({
      'hypertension_dur':this.hyperArray.hypertension_dur
    });
    this.secondFormGroup.patchValue({
      "duration":this.hyperArray.duration_hypertension,
    })
    this.secondFormGroup.patchValue({
      "medications":this.hyperArray.hypertension_medications,
    })
    this.secondFormGroup.updateValueAndValidity();
  }
  if(this.viewData && this.viewData.dyslipidemia_dur !=''){
    this.dyslipidemiaObj = JSON.parse(this.viewData.dyslipidemia_dur);
    if(this.dyslipidemiaObj.dyslipidemia_dur){
      this.dyslipidemia = true
    }
    else{
      this.dyslipidemia = false
    }
    this.secondFormGroup.patchValue({
      'dyslipidemia_dur':this.dyslipidemiaObj.dyslipidemia_dur
    });
    this.secondFormGroup.patchValue({
      'dyslipidemia_duration':this.dyslipidemiaObj.dyslipidemia_duration
    });
    this.secondFormGroup.patchValue({
      'dyslipidemia_medication':this.dyslipidemiaObj.dyslipidemia_medication
    })
    this.secondFormGroup.updateValueAndValidity()
  }
  if(this.viewData && this.viewData.coronary_artery_dur!= ''){
    this.coronaryObj = JSON.parse(this.viewData.coronary_artery_dur)
    console.log(this.coronaryObj)
    if(this.coronaryObj.coronary_artery_dur){
      this.coronary = true
    }
    else{
      this.coronary = false
    }
    this.secondFormGroup.patchValue({
      "coronary_artery_dur":this.coronaryObj.coronary_artery_dur,  
    });
    this.secondFormGroup.patchValue({
      "coronary_artery_duration":this.coronaryObj.coronary_artery_duration
    });
    this.secondFormGroup.patchValue({
      "coronary_artery_medication":this.coronaryObj.coronary_artery_medication, 
    })
    this.secondFormGroup.updateValueAndValidity()
  }

  if(this.viewData && this.viewData.stroke_dur!=''){
    this.strokeObj= JSON.parse(this.viewData.stroke_dur);
    if(this.strokeObj.stroke_dur){
      this.stroke = true
    }
    else{
      this.stroke = false
    }
    this.secondFormGroup.patchValue({
      'stroke_dur':this.strokeObj.stroke_dur
    });
    this.secondFormGroup.patchValue({
      'stroke_duration':this.strokeObj.stroke_duration
    });
    this.secondFormGroup.patchValue({
      'stroke_medication':this.strokeObj.stroke_medication
    })
    this.secondFormGroup.updateValueAndValidity()
  }

  if(this.viewData && this.viewData.neuropathy_dur!=''){
    this.neuropathyObj = JSON.parse(this.viewData.neuropathy_dur);
    if(this.neuropathyObj.neuropathy_dur){
      this.neuropathy = true
    }
    else{
      this.neuropathy = false
    }
    this.secondFormGroup.patchValue({
      'neuropathy_dur':this.neuropathyObj.neuropathy_dur
    });
    this.secondFormGroup.patchValue({
      'neuropathy_duration':this.neuropathyObj.neuropathy_duration
    });
    this.secondFormGroup.patchValue({
      'neuropathy_medication':this.neuropathyObj.neuropathy_medication
    })
    this.secondFormGroup.updateValueAndValidity()
  }

  if(this.viewData && this.viewData.retinopathy_dur!=''){
    
    this.retinopathyObj= JSON.parse(this.viewData.retinopathy_dur)
    if(this.retinopathyObj.retinopathy_dur){
      this.retinopathy = true
    }
    else{
      this.retinopathy = false
    }
    this.secondFormGroup.patchValue({
      'retinopathy_dur':this.retinopathyObj.retinopathy_dur
    });
    this.secondFormGroup.patchValue({
      'retinopathy_duration':this.retinopathyObj.retinopathy_duration
    });
    this.secondFormGroup.patchValue({
      'retinopathy_medication':this.retinopathyObj.retinopathy_medication
    })
    this.secondFormGroup.updateValueAndValidity()
  }
  if(this.viewData && this.viewData.nephropathy_dur!=''){
    this.nephropathyObj= JSON.parse(this.viewData.nephropathy_dur);
    if(this.nephropathyObj.nephropathy_dur){
      this.nephropathy = true
    }
    else{
      this.nephropathy = false
    }
    this.secondFormGroup.patchValue({
      'nephropathy_dur':  this.nephropathyObj.nephropathy_dur
    });
    this.secondFormGroup.patchValue({
      'nephropathy_duration':this.nephropathyObj.nephropathy_duration
    })
    this.secondFormGroup.patchValue({
      'nephropathy_medication':this.nephropathyObj.nephropathy_medication
    })
    this.secondFormGroup.updateValueAndValidity();
    console.log(this.viewData.anti_diabetes_medication)
  }
  if(this.viewData && this.viewData.anti_diabetes_medication!='')
  {
    console.log("here",this.viewData.anti)
    this.antidiabetes = JSON.parse(this.viewData.anti_diabetes_medication);
    this.anti_diabetes = JSON.parse(this.viewData.anti_diabetes_medication);
    console.log(this.antidiabetes)
    this.secondFormGroup.patchValue({
      'anti_diabetes_medication':this.antidiabetes
    })
    this.secondFormGroup.updateValueAndValidity();
   }  
  if(this.viewData && this.viewData.blood_investigation!=''){
    this.bloodInvetigateObj = JSON.parse(this.viewData.blood_investigation)
    this.blood_investigation_obj = JSON.parse(this.viewData.blood_investigation)
    this.thirdFormGroup.patchValue({
      'fasting_plasma':this.bloodInvetigateObj.fasting_plasma,
      'postprandial_plasma':this.bloodInvetigateObj.postprandial_plasma,
      // 'glyscolated':this.bloodInvetigateObj.glyscolated + '.'+ this.bloodInvetigateObj.glycosylated_decimal,
      'hba1_c':this.bloodInvetigateObj.hba1_c,
      's_creatinine':this.bloodInvetigateObj.s_creatinine
      // this.blood_investigation_obj.glyscolated = this.thirdFormGroup.value.glyscolated+'.'+this.thirdFormGroup.value.glycosylated_decimal
    });
    this.thirdFormGroup.updateValueAndValidity()


  }
  console.log(this.bloodInvetigateObj)
    if(this.viewData && this.viewData.blood_investigation && this.bloodInvetigateObj.glyscolated){
      let arr = this.bloodInvetigateObj.glyscolated.split(".");
      console.log(arr)
      this.thirdFormGroup.patchValue({
        'glyscolated':arr[0]
      });
      this.thirdFormGroup.updateValueAndValidity()
      this.thirdFormGroup.patchValue({
        'glycosylated_decimal':arr[1]?arr[1]:'0'
      });
      this.thirdFormGroup.updateValueAndValidity()
    }
  
  if(this.viewData && this.viewData.human_premixed_thirty!=''){
    this.human_premixedthirtyArray = JSON.parse(this.viewData.human_premixed_thirty);
    if(this.human_premixedthirtyArray.human_premixed_thirty){
      this.human_premixedthirty = true
    }
    else{
      this.human_premixedthirty = false
    }
    this.fourthFormGroup.patchValue({
      "human_premixed_thirty":this.human_premixedthirtyArray.human_premixed_thirty,
        "human_premixed_thirty_breakfast":this.human_premixedthirtyArray.human_premixed_thirty_breakfast,
        "human_premixed_thirty_lunch":this.human_premixedthirtyArray.human_premixed_thirty_lunch,
       "human_premixed_thirty_dinner":this.human_premixedthirtyArray.human_premixed_thirty_dinner,
    });
    this.fourthFormGroup.updateValueAndValidity()
  }
  if(this.viewData && this.viewData.human_premixed_fifty!=''){
    
    this.human_premixedfiftyArray  = JSON.parse(this.viewData.human_premixed_fifty);
    console.log(this.human_premixedfiftyArray.human_premixed_50_breakfast)
    if(this.human_premixedfiftyArray.human_premixed_fifty){
      this.human_premixedfifty = true
    }
    else{
      this.human_premixedfifty = false
    }
    this.fourthFormGroup.patchValue({
      "human_premixed_fifty":this.human_premixedfiftyArray.human_premixed_fifty,
       "human_premixed_fifty_breakfast":this.human_premixedfiftyArray.human_premixed_50_breakfast,
       "human_premixed_fifty_lunch":this.human_premixedfiftyArray.human_premixed_fifty_lunch,
        "human_premixed_fifty_dinner":this.human_premixedfiftyArray.human_premixed_fifty_dinner,
    });
    this.fourthFormGroup.updateValueAndValidity()
  }
  if(this.viewData && this.viewData.regular_insulin!=''){
    this.regular_insulinArray = JSON.parse(this.viewData.regular_insulin);
    if(this.regular_insulinArray.regular_insulin){
      this.regular = true
    }
    else{
      this.regular = false
    }
    this.fourthFormGroup.patchValue({
      "regular_insulin":this.regular_insulinArray.regular_insulin,
      "regular_insulin_breakfast":this.regular_insulinArray.regular_insulin_breakfast,
      "regular_insulin_lunch":this.regular_insulinArray.regular_insulin_lunch,
      "regular_insulin_dinner":this.regular_insulinArray.regular_insulin_dinner,
    });
    this.fourthFormGroup.updateValueAndValidity()
  }
  if(this.viewData && this.viewData.nph_insulin){
    this.nph_insulinArray= JSON.parse(this.viewData.nph_insulin);
    if(this.nph_insulinArray.nph_insulin){
      this.nph = true
    }
    else{
      this.nph = false
    }
    this.fourthFormGroup.patchValue({
      "nph_insulin": this.nph_insulinArray.nph_insulin,
      "nph_insulin_breakfast": this.nph_insulinArray.nph_insulin_breakfast,
      "nph_insulin_lunch": this.nph_insulinArray.nph_insulin_lunch,
      "nph_insulin_dinner": this.nph_insulinArray.nph_insulin_dinner
    });
    this.fourthFormGroup.updateValueAndValidity();
  }
  if(this.viewData && this.viewData.glargine_insulin){
  
    this.glargine_insulinArray = JSON.parse(this.viewData.glargine_insulin);
    if(this.glargine_insulinArray.glargine_insulin){
      this.glargine = true
    }
    else{
      this.glargine = false
    }
    this.fourthFormGroup.patchValue({
      "glargine_insulin": this.glargine_insulinArray.glargine_insulin,
      "glargine_insulin_breakfast": this.glargine_insulinArray.glargine_insulin_breakfast,
      "glargine_insulin_lunch": this.glargine_insulinArray.glargine_insulin_lunch,
      "glargine_insulin_dinner": this.glargine_insulinArray.glargine_insulin_dinner
    });
    this.fourthFormGroup.updateValueAndValidity();
  }
}



checkAntiDiabetes(name){
    
   
  if(this.antidiabetes.indexOf(name)>-1){
    this.secondFormGroup.patchValue({
      'diabetes_valid':this.anti_diabetes.toString()
    });
    this.secondFormGroup.updateValueAndValidity()
    return true
  }else{
    // this.secondFormGroup.patchValue({
    //   'diabetes_valid':''
    // });
    // this.secondFormGroup.updateValueAndValidity()
    return false
  }
  
 
}
 
  getCreatinine() {
    return Array.from({length:50 }, (_value , k=1) => ((k / 10)+0.1).toFixed(1) );

  }
  getWeight() {
    return Array.from({length:111 }, (_value=40 , k) => (k + 40) );

  }
  getHeight() {
    return Array.from({length:81 }, (_value , k) => (k +120) );

  }
  getDurationdiabeties(){
    return Array.from({length:50 }, (_value , k) => k + 1 );
  }
  getTreateddiabeties(){
    return Array.from({length:50 }, (_value , k) => k + 1 );
  }
  getHyperdur(){
    return Array.from({length:50 }, (_value , k) => k + 1 );
  }
  getSystolic(){
    return Array.from({length:361 }, (_value , k) => k + 40  );
  }
  getDiastolic(){
    return Array.from({length:361 }, (_value , k) => k + 40  );
  }
  getPpg(){
    return Array.from({length:451 }, (_value , k) => k + 50  );
  }
  gethbalc(){
    return Array.from({length:20 }, (_value , k) => k + 1  );
  }
  getinsulin(){
    return Array.from({length:198 }, (_value , k) => k + 3  );
  }
  getvalues() {
    return Array.from({ length: 21 }, (v, k) => k );
  }
  getdigit() {
    return Array.from({ length: 11 }, (v, k) => k );
  }
  

  onchange(event: any) {

    if (event.value == 'yes') {
      this.medication = 'yes';
      this.medication = true

    }
    else {
      this.medication = 'no';
      event.value = 'no'
      this.medication = false

    }

  }
  oncheked(event: any) {

    if (event.checked == true) {
      this.secondFormGroup.controls["duration"].setValidators([Validators.required]);
      this.secondFormGroup.controls["duration"].updateValueAndValidity();
      this.secondFormGroup.controls["medications"].setValidators([Validators.required]);
      this.secondFormGroup.controls["medications"].updateValueAndValidity();
      this.hypertension = true;
    }
    else {
      this.secondFormGroup.controls["duration"].clearValidators();
      this.secondFormGroup.controls["duration"].updateValueAndValidity();
      this.secondFormGroup.controls["medications"].clearValidators();
      this.secondFormGroup.controls["medications"].updateValueAndValidity();
      this.hypertension = false
    }

  }
  oncheked2(event: any) {
    if (event.checked == true) {
      this.dyslipidemia = true
      this.secondFormGroup.controls["dyslipidemia_duration"].setValidators([Validators.required]);
      this.secondFormGroup.controls["dyslipidemia_duration"].updateValueAndValidity();
      this.secondFormGroup.controls["dyslipidemia_medication"].setValidators([Validators.required]);
      this.secondFormGroup.controls["dyslipidemia_medication"].updateValueAndValidity();

    }
    else {
      this.dyslipidemia = false
      this.secondFormGroup.controls["dyslipidemia_duration"].clearValidators();
      this.secondFormGroup.controls["dyslipidemia_duration"].updateValueAndValidity();
      this.secondFormGroup.controls["dyslipidemia_medication"].clearValidators();
      this.secondFormGroup.controls["dyslipidemia_medication"].updateValueAndValidity();
    }
  }
  oncheked3(event: any){
    if (event.checked == true) {
      this.secondFormGroup.controls["coronary_artery_duration"].setValidators([Validators.required]);
      this.secondFormGroup.controls["coronary_artery_duration"].updateValueAndValidity();
      this.secondFormGroup.controls["coronary_artery_medication"].setValidators([Validators.required]);
      this.secondFormGroup.controls["coronary_artery_medication"].updateValueAndValidity();
      this.coronary = true
     
    }
    else {
      this.coronary = false
      this.secondFormGroup.controls["coronary_artery_duration"].clearValidators();
      this.secondFormGroup.controls["coronary_artery_duration"].updateValueAndValidity();
      this.secondFormGroup.controls["coronary_artery_medication"].clearValidators();
      this.secondFormGroup.controls["coronary_artery_medication"].updateValueAndValidity();
    }

  }
  oncheked4(event: any) {
    if (event.checked == true) {
      this.stroke = true
      this.secondFormGroup.controls["stroke_duration"].setValidators([Validators.required]);
      this.secondFormGroup.controls["stroke_duration"].updateValueAndValidity();
      this.secondFormGroup.controls["stroke_medication"].setValidators([Validators.required]);
      this.secondFormGroup.controls["stroke_medication"].updateValueAndValidity();
    }
    else {
      this.stroke = false
      this.secondFormGroup.controls["stroke_duration"].clearValidators();
      this.secondFormGroup.controls["stroke_duration"].updateValueAndValidity();
      this.secondFormGroup.controls["stroke_medication"].clearValidators();
      this.secondFormGroup.controls["stroke_medication"].updateValueAndValidity();
    }
  }
  oncheked5(event: any, name: any) {
    if (event.checked == true) {
      this.neuropathy = true
      this.secondFormGroup.controls["neuropathy_duration"].setValidators([Validators.required]);
      this.secondFormGroup.controls["neuropathy_duration"].updateValueAndValidity();
      this.secondFormGroup.controls["neuropathy_medication"].setValidators([Validators.required]);
      this.secondFormGroup.controls["neuropathy_medication"].updateValueAndValidity();
    }
    else {
      this.neuropathy = false
      this.secondFormGroup.controls["neuropathy_duration"].clearValidators();
      this.secondFormGroup.controls["neuropathy_duration"].updateValueAndValidity();
      this.secondFormGroup.controls["neuropathy_medication"].clearValidators();
      this.secondFormGroup.controls["neuropathy_medication"].updateValueAndValidity();
    }

  }
  oncheked6(event: any) {
    if (event.checked == true) {
      this.retinopathy = true
      this.secondFormGroup.controls["retinopathy_duration"].setValidators([Validators.required]);
      this.secondFormGroup.controls["retinopathy_duration"].updateValueAndValidity();
      this.secondFormGroup.controls["retinopathy_medication"].setValidators([Validators.required]);
      this.secondFormGroup.controls["retinopathy_medication"].updateValueAndValidity();
    }
    else {
      this.retinopathy = false
      this.secondFormGroup.controls["retinopathy_duration"].clearValidators();
      this.secondFormGroup.controls["retinopathy_duration"].updateValueAndValidity();
      this.secondFormGroup.controls["retinopathy_medication"].clearValidators();
      this.secondFormGroup.controls["retinopathy_medication"].updateValueAndValidity();
    }
  }
  oncheked7(event: any) {
    if (event.checked == true) {
      this.secondFormGroup.controls["nephropathy_duration"].setValidators([Validators.required]);
      this.secondFormGroup.controls["nephropathy_duration"].updateValueAndValidity();
      this.secondFormGroup.controls["nephropathy_medication"].setValidators([Validators.required]);
      this.secondFormGroup.controls["nephropathy_medication"].updateValueAndValidity();
     
      this.nephropathy = true
    }
    else {
      this.nephropathy = false
      this.secondFormGroup.controls["nephropathy_duration"].clearValidators();
      this.secondFormGroup.controls["nephropathy_duration"].updateValueAndValidity();
      this.secondFormGroup.controls["nephropathy_medication"].clearValidators();
      this.secondFormGroup.controls["nephropathy_duration"].updateValueAndValidity();
    }
  }
  bloodinvestigate(event: any) {
    console.log(event.value)
    if (event.value == 'yes') {
      this.bloodInvestigation = 'yes';
      this.bloodInvestigation = true;
     
    }
    else {
      this.bloodInvestigation = 'no';
      this.bloodInvestigation = false;
     
    }
  }
  oncheked8(event: any, name: any) {
    if (event.checked == true) {
      this.human_premixedthirty = true
      this.humanArray.push('human_premixedthirty')
      this.humancheck=false

       this.fourthFormGroup.controls["human_premixed"].setValidators([Validators.required]);
       this.fourthFormGroup.controls["human_premixed"].updateValueAndValidity();
      //   this.fourthFormGroup.controls["human_premixed_thirty_lunch"].setValidators([Validators.required]);
      //   this.fourthFormGroup.controls["human_premixed_thirty_lunch"].updateValueAndValidity();
      //   this.fourthFormGroup.controls["human_premixed_thirty_dinner"].setValidators([Validators.required]);
      //   this.fourthFormGroup.controls["human_premixed_thirty_dinner"].updateValueAndValidity();
    }
    else {
      this.human_premixedthirty = false
      let index = this.humanArray.indexOf('human_premixedthirty');
      this.humanArray.splice(index,1)
      this.humancheck=true
      this.fourthFormGroup.controls["human_premixed"].clearValidators();
      this.fourthFormGroup.controls["human_premixed"].updateValueAndValidity();
      // this.fourthFormGroup.controls["human_premixed_thirty_lunch"].clearValidators();
      // this.fourthFormGroup.controls["human_premixed_thirty_lunch"].updateValueAndValidity();
      // this.fourthFormGroup.controls["human_premixed_thirty_dinner"].clearValidators();
      // this.fourthFormGroup.controls["human_premixed_thirty_dinner"].updateValueAndValidity();
    }

  }
  hp30val;
  humanChange1(event){
    if(event.value==0){
      this.hp30val = event.value
    }
    if(event.value==0 && this.hp30val!=0){
      this.fourthFormGroup.patchValue({
        'human_premixed':''
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.humanchange = true
    }
    else{
      this.fourthFormGroup.patchValue({
        'human_premixed':event.value
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.humanchange = false
    }
  }
  humanChange2(event){
     if(event.value==0){
      this.hp30val = event.value
    }
    if(event.value==0 && this.hp30val!=0){
      this.fourthFormGroup.patchValue({
        'human_premixed':''
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.humanchange = true
    }
    else{
      this.fourthFormGroup.patchValue({
        'human_premixed':event.value
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.humanchange = false
    }
  }
  humanChange3(event){
    if(event.value==0){
      this.hp30val = event.value
    }
    if(event.value==0 && this.hp30val!=0){
      this.fourthFormGroup.patchValue({
        'human_premixed':''
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.humanchange = true
    }
    else{
      this.fourthFormGroup.patchValue({
        'human_premixed':event.value
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.humanchange = false
    }
  }
  oncheked9(event: any, name: any) {
    if (event.checked == true) {
      this.human_premixedfifty = true
      this.humanArray.push('human_premixedfifty')
      this.humancheck=false
      this.fourthFormGroup.controls["human_premixed50"].setValidators([Validators.required]);
      this.fourthFormGroup.controls["human_premixed50"].updateValueAndValidity();
      // this.fourthFormGroup.controls["human_premixed_fifty_breakfast"].setValidators([Validators.required]);
      //   this.fourthFormGroup.controls["human_premixed_fifty_breakfast"].updateValueAndValidity();
      //   this.fourthFormGroup.controls["human_premixed_fifty_lunch"].setValidators([Validators.required]);
      //   this.fourthFormGroup.controls["human_premixed_fifty_lunch"].updateValueAndValidity();
      //   this.fourthFormGroup.controls["human_premixed_fifty_dinner"].setValidators([Validators.required]);
      //   this.fourthFormGroup.controls["human_premixed_fifty_dinner"].updateValueAndValidity();
      
    }
    else {
      this.human_premixedfifty = false
      let index = this.humanArray.indexOf('human_premixedfifty');
      this.humanArray.splice(index,1)
      this.humancheck=true
      this.fourthFormGroup.controls["human_premixed50"].clearValidators();
      this.fourthFormGroup.controls["human_premixed50"].updateValueAndValidity();
      // this.fourthFormGroup.controls["human_premixed_fifty_lunch"].clearValidators();
      // this.fourthFormGroup.controls["human_premixed_fifty_lunch"].updateValueAndValidity();
      // this.fourthFormGroup.controls["human_premixed_fifty_dinner"].clearValidators();
      // this.fourthFormGroup.controls["human_premixed_fifty_dinner"].updateValueAndValidity();
    }
  }
  hp50val;
  humanChange4(event){
    if(event.value==0){
      this.hp50val = event.value;
    }
    if(event.value==0 && this.hp50val!=0){
      this.fourthFormGroup.patchValue({
        'human_premixed50':''
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.human50change = true
    }
    else{
      this.fourthFormGroup.patchValue({
        'human_premixed50':event.value
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.human50change = false
    }
  }
  humanChange5(event){
    if(event.value==0){
      this.hp50val = event.value;
    }
    if(event.value==0 && this.hp50val!=0){
      this.fourthFormGroup.patchValue({
        'human_premixed50':''
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.human50change = true
    }
    else{
      this.fourthFormGroup.patchValue({
        'human_premixed50':event.value
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.human50change = false
    }
  }
  humanChange6(event){
    if(event.value==0){
      this.hp50val = event.value;
    }
    if(event.value==0 && this.hp50val!=0){
      this.fourthFormGroup.patchValue({
        'human_premixed50':''
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.human50change = true
    }
    else{
      this.fourthFormGroup.patchValue({
        'human_premixed50':event.value
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.human50change = false
    }
  }
  oncheked10(event: any) {
    if (event.checked == true) {
      this.regular = true
      this.humanArray.push('regular')
      this.humancheck=false
      this.fourthFormGroup.controls["regularinsulin"].setValidators([Validators.required]);
      this.fourthFormGroup.controls["regularinsulin"].updateValueAndValidity();
      // this.fourthFormGroup.get('regular_insulin_breakfast').setValidators(Validators.required)
      // this.fourthFormGroup.controls["regular_insulin_breakfast"].updateValueAndValidity();
      // this.fourthFormGroup.get('regular_insulin_lunch').setValidators(Validators.required)
      // this.fourthFormGroup.controls["regular_insulin_lunch"].updateValueAndValidity();
      // this.fourthFormGroup.get('regular_insulin_dinner').setValidators(Validators.required)
      // this.fourthFormGroup.controls["regular_insulin_dinner"].updateValueAndValidity();
    }
    else {
      this.regular = false
      let index = this.humanArray.indexOf('regular');
      this.humanArray.splice(index,1)
      this.humancheck=true
      this.fourthFormGroup.get('regularinsulin').clearValidators();
      this.fourthFormGroup.controls["regularinsulin"].updateValueAndValidity();
      // this.fourthFormGroup.get('regular_insulin_lunch').clearValidators();
      // this.fourthFormGroup.controls["regular_insulin_lunch"].updateValueAndValidity();
      // this.fourthFormGroup.get('regular_insulin_dinner').clearValidators();
      // this.fourthFormGroup.controls["regular_insulin_dinner"].updateValueAndValidity();
    }
  }
  regularinsuilinval;
  regularChange1(event){
    if(event.value==0){
      this.regularinsuilinval = event.value;
    }
    if(event.value==0 && this.regularinsuilinval!=0){
      this.fourthFormGroup.patchValue({
        'regularinsulin':''
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.regular_insulinchange = true
    }
    else{
      this.fourthFormGroup.patchValue({
        'regularinsulin':event.value
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.regular_insulinchange = false
    }
  }
  regularChange2(event){
    if(event.value==0){
      this.regularinsuilinval = event.value;
    }
    if(event.value==0 && this.regularinsuilinval!=0){
      this.fourthFormGroup.patchValue({
        'regularinsulin':''
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.regular_insulinchange = true
    }
    else{
      this.fourthFormGroup.patchValue({
        'regularinsulin':event.value
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.regular_insulinchange = false
    }
  }
  regularChange3(event){
    if(event.value==0){
      this.regularinsuilinval = event.value;
    }
    if(event.value==0 && this.regularinsuilinval!=0){
      this.fourthFormGroup.patchValue({
        'regularinsulin':''
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.regular_insulinchange = true
    }
    else{
      this.fourthFormGroup.patchValue({
        'regularinsulin':event.value
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.regular_insulinchange = false
    }
  }
  oncheked11(event: any) {
    if (event.checked == true) {
      this.nph = true
      this.humancheck=false
      this.humanArray.push('nph')
      this.fourthFormGroup.controls["nphcheck"].setValidators([Validators.required]);
      this.fourthFormGroup.controls["nphcheck"].updateValueAndValidity();
      // this.fourthFormGroup.get('nph_insulin_breakfast').setValidators(Validators.required)
      // this.fourthFormGroup.controls["nph_insulin_breakfast"].updateValueAndValidity();
      // this.fourthFormGroup.get('nph_insulin_lunch').setValidators(Validators.required)
      // this.fourthFormGroup.controls["nph_insulin_lunch"].updateValueAndValidity();
      // this.fourthFormGroup.get('nph_insulin_dinner').setValidators(Validators.required)
      // this.fourthFormGroup.controls["nph_insulin_dinner"].updateValueAndValidity();
    }
    else {
      this.nph = false
      this.humancheck=true
      let index = this.humanArray.indexOf('nph');
      this.humanArray.splice(index,1)
      this.fourthFormGroup.controls["nphcheck"].setValidators([Validators.required]);
      this.fourthFormGroup.controls["nphcheck"].updateValueAndValidity();
      // this.fourthFormGroup.get('nph_insulin_breakfast').clearValidators();
      // this.fourthFormGroup.controls["nph_insulin_breakfast"].updateValueAndValidity();
      // this.fourthFormGroup.get('nph_insulin_lunch').clearValidators();
      // this.fourthFormGroup.controls["nph_insulin_lunch"].updateValueAndValidity();
      // this.fourthFormGroup.get('nph_insulin_dinner').clearValidators();
      // this.fourthFormGroup.controls["nph_insulin_dinner"].updateValueAndValidity();
    }
  }
  nphval;
  nphChange1(event){
    if(event.value==0){
      this.nphval = event.value;
    }
    if(event.value==0 && this.nphval!=0){
      this.fourthFormGroup.patchValue({
        'nphcheck':''
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.nph_insulinchange = true
    }
    else{
      this.fourthFormGroup.patchValue({
        'nphcheck':event.value
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.nph_insulinchange = false
    }
  }
  nphChange2(event){
    if(event.value==0){
      this.nphval = event.value;
    }
    if(event.value==0 && this.nphval!=0){
      this.fourthFormGroup.patchValue({
        'nphcheck':''
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.nph_insulinchange = true
    }
    else{
      this.fourthFormGroup.patchValue({
        'nphcheck':event.value
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.nph_insulinchange = false
    }
  }
  nphChange3(event){
    if(event.value==0){
      this.nphval = event.value;
    }
    if(event.value==0 && this.nphval!=0){
      this.fourthFormGroup.patchValue({
        'nphcheck':''
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.nph_insulinchange = true
    }
    else{
      this.fourthFormGroup.patchValue({
        'nphcheck':event.value
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.nph_insulinchange = false
    }
  }
  oncheked12(event: any) {
    if (event.checked == true) {
      this.glargine = true
      this.humanArray.push('glargine')
      this.humancheck=false
      this.fourthFormGroup.controls["glarginecheck"].setValidators([Validators.required]);
      this.fourthFormGroup.controls["glarginecheck"].updateValueAndValidity();
     
    }
    else {
      this.glargine = false
     
      let index = this.humanArray.indexOf('glargine');
      this.humancheck=true
      this.humanArray.splice(index,1)
      this.fourthFormGroup.controls["glarginecheck"].setValidators([Validators.required]);
      this.fourthFormGroup.controls["glarginecheck"].updateValueAndValidity();
      
    }
  }
  glargineval = 0;
  glargineChange1(event){
    if(event.value==0){
      this.glargineval = event.value
      }
    if(event.value==0 && this.glargineval!=0){
      this.fourthFormGroup.patchValue({
        'glarginecheck':''
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.glargine_insulinchange = true
    }
    else{
      this.fourthFormGroup.patchValue({
        'glarginecheck':event.value
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.glargine_insulinchange = false
    }
    console.log('glargineval',this.glargineval);
  }
  glargineChange2(event){
    if(event.value==0){
      this.glargineval = event.value
      }
    if(event.value==0 &&  this.glargineval!=0){
      this.fourthFormGroup.patchValue({
        'glarginecheck':''
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.glargine_insulinchange = true
    }
    else{
      this.fourthFormGroup.patchValue({
        'glarginecheck':event.value
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.glargine_insulinchange = false
    }
    console.log('glargineval',this.glargineval);
  }
  glargineChange3(event){
    if(event.value==0){
      this.glargineval = event.value
      }
    if(event.value==0 &&  this.glargineval!=0){
      this.fourthFormGroup.patchValue({
        'glarginecheck':''
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.glargine_insulinchange = true
    }
    else{
      this.fourthFormGroup.patchValue({
        'glarginecheck':event.value
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.glargine_insulinchange = false
    }
    console.log('glargineval',this.glargineval);
  }
  date(e){
    var date = new Date(e.value),
      yr = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate(),
      newDate = yr + '-' + month + '-' + day;
    this.nowDate = newDate;
    console.log(newDate);

  }
  
  // bmicalc(){
    
  //   this.bmi =(this.firstFormGroup.value.weight/((this.firstFormGroup.value.height*this.firstFormGroup.value.height)/100))*100
  //  this.bmi = this.bmi.toFixed(2)
  //   console.log( this.bmi)
  // }
  firstForm(event: any) {
    console.log(event);
    if (!this.firstFormGroup.valid) {
      
      this.firstFormGroup.markAllAsTouched()
    this.toastr.error("Please fill all the fields")
    }
    else {
     
      const formData = new FormData()
      let date = new Date(this.firstFormGroup.value.date_visit)
     
      formData.append("user_id", JSON.parse(localStorage.getItem('doctor_id')));
      //formData.append("mobile",JSON.parse(localStorage.getItem('mobile')));
      formData.append("pen_serial", this.firstFormGroup.value.pen_serial);
      formData.append("sex", this.firstFormGroup.value.sex);
      formData.append("date_visit", moment(date).format('YYYY-MM-DD'));
      formData.append("age", this.firstFormGroup.value.age);
      formData.append("weight", this.firstFormGroup.value.weight);
      formData.append("height", this.firstFormGroup.value.height);
      formData.append("bmi", this.bmi);
      formData.append("education", this.firstFormGroup.value.education);
      formData.append("employment", this.firstFormGroup.value.employment);
      if(this.isEditScreen){
        formData.append('id',this.listingId);
      }
     
      console.log(this.firstFormGroup.value)
      this.service.addInitiate(formData).subscribe((res:any) => {
        // this.formId = res['data'].form_id;
        console.log(res)
        this.initiateres = res
        // if(event){
        //   this.toastr.success("The draft has been saved successfully")
        //  this.router.navigateByUrl('/dashboard')  
        // }
        if(res.status == "0"){
          this.toastr.warning(res.message);
          return false
        }else{
          this.formId = res['data'].id;
          if(event){
            this.toastr.info("The draft has been saved successfully")
            this.router.navigateByUrl('/dashboard')
          }
        }

      })
    }
  }
  
  // antiDiabetes(event,name){
  //   if(event.checked){
  //     this.anti_diabetes.push(name)
  //     console.log(this.anti_diabetes)
  //    // this.check=false
  //     this.secondFormGroup.patchValue({
  //       'diabetes_valid':this.anti_diabetes.toString()
  //     });
  //     this.secondFormGroup.updateValueAndValidity()
  //   }else{
  //     var i = this.anti_diabetes.indexOf(name);
  //     this.anti_diabetes.splice(i,1);
  //     if(this.anti_diabetes.length == 0){
  //      // this.check = true
  //       this.secondFormGroup.patchValue({
  //         'diabetes_valid':''
  //       })
  //       this.secondFormGroup.updateValueAndValidity()
  //     }
  //   }
  //   if (this.anti_diabetes.length ) {
  //     this.check=false
  //   }
  //   else{
      
  //     this.check = true
  //   }
  // }
  antiDiabetes(event,name){
    if(event.checked){
      this.anti_diabetes.push(name)
      console.log(this.anti_diabetes)
     // this.check=false
      this.secondFormGroup.patchValue({
        'diabetes_valid':this.anti_diabetes.toString()
      });
      this.secondFormGroup.updateValueAndValidity()
    }else{
      var i = this.anti_diabetes.indexOf(name);
      this.anti_diabetes.splice(i,1);
      if(this.anti_diabetes.length == 0){
       // this.check = true
        this.secondFormGroup.patchValue({
          'diabetes_valid':''
        })
        this.secondFormGroup.updateValueAndValidity()
      }
    }
    if (this.anti_diabetes.length ) {
      this.check=false
      
    }
    else{
      this.check = true
    }
  }
  secondForm(event: any) {

    console.log(event)
    if (!this.secondFormGroup.valid || this.anti_diabetes.length == 0 ) {  
     console.log(this.secondFormGroup.value)
      this.secondFormGroup.markAllAsTouched()
      if(this.anti_diabetes.length == 0 && this.antidiabetes.length==0){
      this.check = true
      }
      console.log("not valid")
      this.toastr.error("Please fill all the fields")
    }
    else {
      this.check = false
      
      this.secondFormGroup.updateValueAndValidity()
      const formData = new FormData()
      if(this.hypertension){
        this.medical.hypertension_dur = (this.secondFormGroup.value.hypertension_dur==true)?this.secondFormGroup.value.hypertension_dur:false;
        this.medical.duration_hypertension = this.secondFormGroup.value.duration;
        this.medical.hypertension_medications = this.secondFormGroup.value.medications;
        formData.append("hypertension_dur", JSON.stringify(this.medical));
        }
        console.log('this.medical', this.medical);
        if(this.dyslipidemia){
        this.dyslipidemiaArrray.dyslipidemia_dur = (this.secondFormGroup.value.dyslipidemia_dur==true) ? this.secondFormGroup.value.dyslipidemia_dur:false;
        this.dyslipidemiaArrray.dyslipidemia_duration = this.secondFormGroup.value.dyslipidemia_duration;
        this.dyslipidemiaArrray.dyslipidemia_medication = this.secondFormGroup.value.dyslipidemia_medication;
        console.log(this.dyslipidemiaArrray)
        formData.append("dyslipidemia_dur", JSON.stringify(this.dyslipidemiaArrray));
        }
        if(this.coronary){
        this.coronaryArray.coronary_artery_dur = (this.secondFormGroup.value.coronary_artery_dur==true) ? this.secondFormGroup.value.coronary_artery_dur:false;
        this.coronaryArray.coronary_artery_duration = this.secondFormGroup.value.coronary_artery_duration;
        this.coronaryArray.coronary_artery_medication = this.secondFormGroup.value.coronary_artery_medication;
        console.log(this.coronaryArray);
        formData.append("coronary_artery_dur", JSON.stringify(this.coronaryArray));
        }
        if(this.stroke){
        this.strokeArray.stroke_dur = (this.secondFormGroup.value.stroke_dur==true) ? this.secondFormGroup.value.stroke_dur:false;
        this.strokeArray.stroke_duration = this.secondFormGroup.value.stroke_duration;
        this.strokeArray.stroke_medication = this.secondFormGroup.value.stroke_medication;
        console.log(this.strokeArray);
        formData.append("stroke_dur", JSON.stringify(this.strokeArray));
        }
        if(this.neuropathy){
        this.neuropathyArray.neuropathy_dur = (this.secondFormGroup.value.neuropathy_dur==true) ? this.secondFormGroup.value.neuropathy_dur:false;
        this.neuropathyArray.neuropathy_duration = this.secondFormGroup.value.neuropathy_duration;
        this.neuropathyArray.neuropathy_medication = this.secondFormGroup.value.neuropathy_medication;
        console.log(this.neuropathyArray);
        formData.append("neuropathy_dur", JSON.stringify(this.neuropathyArray));
        }
        if(this.retinopathy){
        this.retinopathyArray.retinopathy_dur = (this.secondFormGroup.value.retinopathy_dur==true) ? this.secondFormGroup.value.retinopathy_dur:false;
        this.retinopathyArray.retinopathy_duration = this.secondFormGroup.value.retinopathy_duration;
        this.retinopathyArray.retinopathy_medication = this.secondFormGroup.value.retinopathy_medication;
        console.log(this.retinopathyArray);
        formData.append("retinopathy_dur", JSON.stringify(this.retinopathyArray));
        }
        if(this.nephropathy){
        this.nephropathyArray.nephropathy_dur = (this.secondFormGroup.value.nephropathy_dur==true) ? this.secondFormGroup.value.nephropathy_dur:false;
        this.nephropathyArray.nephropathy_duration = this.secondFormGroup.value.nephropathy_duration;
        this.nephropathyArray.nephropathy_medication = this.secondFormGroup.value.nephropathy_medication;
        console.log(this.nephropathyArray);
        formData.append("nephropathy_dur", JSON.stringify(this.nephropathyArray));
        }
      formData.append("duration_diabetes", this.secondFormGroup.value.duration_diabetes);
      formData.append("treated_diabetes", this.secondFormGroup.value.treated_diabetes);
      formData.append("family_diabetes", this.secondFormGroup.value.family_diabetes);
      console.log(this.secondFormGroup.value.family_diabetes)
      formData.append("hypertension", this.secondFormGroup.value.hypertension);
      formData.append("duration_hypertension", this.secondFormGroup.value.duration_hypertension);
      //formData.append("blood_pressure", this.secondFormGroup.value.blood_pressure);
      formData.append("systolic", this.secondFormGroup.value.systolic);
      formData.append(" diastolic", this.secondFormGroup.value.diastolic);
      formData.append("smoking", this.secondFormGroup.value.smoking);
      console.log(this.secondFormGroup.value.smoking)
      formData.append("alcohol", this.secondFormGroup.value.alcohol);
      console.log(this.secondFormGroup.value.alcohol)
     
     
      formData.append("medical_condition",this.secondFormGroup.value.medical_condition)
      formData.append("anti_diabetes_medication", JSON.stringify(this.anti_diabetes));
      console.log('anti_diabetes',this.anti_diabetes);
      if(this.isEditScreen){
        formData.append('id',this.listingId);
      }else{
        formData.append("id",this.formId);
      }
      this.service.addInitiate(formData).subscribe((res:any) => {
        console.log(res)
        console.log(this.secondFormGroup.valid)
        this.initiateres = res
        if(event){
         this.toastr.info("The draft has been saved successfully")
         this.router.navigateByUrl("/dashboard"); 
        }
        

      })
      
    }
  }
  thirdForm(event: any) {

    console.log(event)
    if (!this.thirdFormGroup.valid ) {
     
      this.thirdFormGroup.markAllAsTouched()
     this.toastr.error("Please fill all the fields")
    }
    else {
     
      const formData = new FormData()
      this.blood_investigation_obj.s_creatinine = this.thirdFormGroup.value.s_creatinine
      this.blood_investigation_obj.hba1_c = this.thirdFormGroup.value.hba1_c
      this.blood_investigation_obj.glyscolated = this.thirdFormGroup.value.glyscolated+'.'+this.thirdFormGroup.value.glycosylated_decimal
      this.blood_investigation_obj.postprandial_plasma = this.thirdFormGroup.value.postprandial_plasma
      this.blood_investigation_obj.fasting_plasma = this.thirdFormGroup.value.fasting_plasma;
      formData.append("blood_investigation", JSON.stringify(this.blood_investigation_obj));
      console.log(this.blood_investigation_obj)
      // formData.append("id",this.route.snapshot.params.id  )
      // formData.append("form_id",this.formId )
      if(this.isEditScreen){
        formData.append('id',this.listingId);
      }else{
        formData.append("id",this.formId);
      }
      this.service.addInitiate(formData).subscribe((res:any) => {
        console.log(res)
        this.initiateres = res
        if(event){
          this.toastr.info("The draft has been saved successfully")
         this.router.navigateByUrl("/dashboard");
        }
      })
    }
  }
 
  submit(event:any) {
     
    if(this.fourthFormGroup.valid && this.humanArray.length && this.fourthFormGroup.value.human_premixed!=0 || this.fourthFormGroup.value.human_premixed50!=0 || this.fourthFormGroup.value.regularinsulin!=0 || this.fourthFormGroup.value.nphcheck!=0 || this.fourthFormGroup.value.glarginecheck!=0 ){
    
      this.humancheck = false
      this.humanchange = false
      this.human50change= false
      this.regular_insulinchange = false
      this.nph_insulinchange = false
      this.glargine_insulinchange = false
      const formData = new FormData()
      // this.vascular.vascular_dignosis = this.secondFormGroup.value.vascular_dignosis;
      // this.vascular.complication = this.secondFormGroup.value.complication;
      // console.log('vascular', this.vascular)
      if(this.human_premixedthirty){
        this.human_premixed_thirty_Obj.human_premixed_thirty = (this.fourthFormGroup.value.human_premixed_thirty==true) ?this.fourthFormGroup.value.human_premixed_thirty :false ;
        this.human_premixed_thirty_Obj.human_premixed_thirty_breakfast = this.fourthFormGroup.value.human_premixed_thirty_breakfast;
        this.human_premixed_thirty_Obj.human_premixed_thirty_lunch = this.fourthFormGroup.value.human_premixed_thirty_lunch;
        this.human_premixed_thirty_Obj.human_premixed_thirty_dinner = this.fourthFormGroup.value.human_premixed_thirty_dinner;
        formData.append("human_premixed_thirty", JSON.stringify(this.human_premixed_thirty_Obj));
      }
        if(this.human_premixedfifty){
        this.human_premixed_fifty_Obj.human_premixed_fifty = (this.fourthFormGroup.value.human_premixed_fifty==true) ? this.fourthFormGroup.value.human_premixed_fifty:false;
        this.human_premixed_fifty_Obj.human_premixed_50_breakfast = this.fourthFormGroup.value.human_premixed_fifty_breakfast;
        this.human_premixed_fifty_Obj.human_premixed_fifty_lunch = this.fourthFormGroup.value.human_premixed_fifty_lunch;
        this.human_premixed_fifty_Obj.human_premixed_fifty_dinner = this.fourthFormGroup.value.human_premixed_fifty_dinner;
        formData.append("human_premixed_fifty", JSON.stringify(this.human_premixed_fifty_Obj));
      }
        if(this.regular){
        this.regular_insulin_Obj.regular_insulin = (this.fourthFormGroup.value.regular_insulin == true) ? this.fourthFormGroup.value.regular_insulin:false ;
        this.regular_insulin_Obj.regular_insulin_breakfast = this.fourthFormGroup.value.regular_insulin_breakfast;
        this.regular_insulin_Obj.regular_insulin_lunch = this.fourthFormGroup.value.regular_insulin_lunch;
        this.regular_insulin_Obj.regular_insulin_dinner = this.fourthFormGroup.value.regular_insulin_dinner;
        formData.append("regular_insulin", JSON.stringify(this.regular_insulin_Obj));
      }
        if(this.nph){
        this.nph_insulin_Obj.nph_insulin = (this.fourthFormGroup.value.nph_insulin == true) ? this.fourthFormGroup.value.nph_insulin : false;
        this.nph_insulin_Obj.nph_insulin_breakfast = this.fourthFormGroup.value.nph_insulin_breakfast;
        this.nph_insulin_Obj.nph_insulin_lunch = this.fourthFormGroup.value.nph_insulin_lunch;
        this.nph_insulin_Obj.nph_insulin_dinner = this.fourthFormGroup.value.nph_insulin_dinner;
        formData.append("nph_insulin", JSON.stringify(this.nph_insulin_Obj));
      }
        if(this.glargine){
        this.glargine_insulin_Obj.glargine_insulin = (this.fourthFormGroup.value.glargine_insulin==true) ?this.fourthFormGroup.value.glargine_insulin:false ;
        this.glargine_insulin_Obj.glargine_insulin_breakfast = this.fourthFormGroup.value.glargine_insulin_breakfast;
        this.glargine_insulin_Obj.glargine_insulin_lunch = this.fourthFormGroup.value.glargine_insulin_lunch;
        this.glargine_insulin_Obj.glargine_insulin_dinner = this.fourthFormGroup.value.glargine_insulin_dinner;
        formData.append("glargine_insulin", JSON.stringify(this.glargine_insulin_Obj));
      }
      
      // formData.append("id",this.route.snapshot.params.id)
      // formData.append("form_id", this.formId)
      formData.append("status", 'yes')
     
      if(this.isEditScreen){
        formData.append('id',this.listingId);
      }else{
        formData.append("id",this.formId);
      }
     
      console.log(formData)

      // this.firstFormGroup.reset();
      // this.secondFormGroup.reset();
      // this.thirdFormGroup.reset();
      //  this.fourthFormGroup.reset();
    
      this.service.addInitiate(formData).subscribe(res => {
       
        console.log(res)
        this.initiateres = res
       // this.router.navigateByUrl('/add-entry-process')
       if(event){
        this.toastr.info("Form Updated successfully")
        this.router.navigateByUrl("/dashboard");
       }

      })
    }
    else{
      console.log('not valid')
       this.humancheck = true
      if(this.fourthFormGroup.value.human_premixed==0 || this.fourthFormGroup.value.human_premixed50==0 || this.fourthFormGroup.value.regularinsulin==0 || this.fourthFormGroup.value.nphcheck==0 || this.fourthFormGroup.value.glarginecheck==0 ){
        this.humanchange = true
        this.human50change= true
        this.regular_insulinchange = true
        this.nph_insulinchange = true
        this.glargine_insulinchange = true
      }
      
      if(this.humanArray.length==0)
      {
      //this.humancheck = true
      this.toastr.error("Please Select Atleast one option")
      }
     
     // this.toastr.error("Please fill all fields")
       this.fourthFormGroup.markAllAsTouched()
     }
    }

  
}