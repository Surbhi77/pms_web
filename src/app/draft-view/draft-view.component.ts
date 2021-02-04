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
  //routeParams: any;
 
  constructor(private service:MainService,private _formBuilder:FormBuilder,private route:ActivatedRoute, private toastr: ToastrService, private router:Router) { }
  viewData:any = []
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  isLinear = false;
  complications: any;
  medication: any;
  hypertension: any;
  dyslipidemia: any;
  stroke: any;
  neuropathy: any;
  retinopathy: any;
  nephropathy: any;
  coronary: any;
  bloodInvestigation: any;
  human_premixedthirty: any;
  human_premixedfifty: boolean;
  regular: boolean;
  nph: boolean;
  glargine: boolean;
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      user_id: new FormControl(''),
      id:new FormControl(''),
    // mobile: new FormControl(''),
      pen_serial: new FormControl(),
      date_visit: new FormControl(''),
      sex: new FormControl(''),
      weight: new FormControl(''),
      height: new FormControl(''),
      bmi: new FormControl(''),
      age: new FormControl(''),
      education: new FormControl(''),
      employment: new FormControl(''),
      form_id :new FormControl(''),
      status:new FormControl('')
    });

    this.secondFormGroup = this._formBuilder.group({
      duration_diabetes: new FormControl(''),
      treated_diabetes: new FormControl(''),
      age_at_diabetes: new FormControl(''),
      family_diabetes: new FormControl(''),
      hypertension: new FormControl(''),
      duration_hypertension: new FormControl(''),
     // blood_pressure: new FormControl(''),
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
      anti_diabetes_medication: new FormControl(''),
      medical_condition: new FormControl(''),
      Biguanides:new FormControl(''),
      Sulphonylureas: new FormControl(''),
      Meglitinides: new FormControl(''),
      Thiazolidendiones: new FormControl(''),
      GLP_Analogues: new FormControl(''),
      DPP4_Inhibitors: new FormControl(''),
      DoubleDrugFixed: new FormControl(''),
      TripleDrugFixed: new FormControl(''),
      complication: new FormControl(''),
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
      fasting_plasma:new FormControl(''),
      postprandial_plasma:new FormControl(''),
      glyscolated:new FormControl(''),
      hba1_c:new FormControl(''),
      s_creatinine:new FormControl('')
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
      human_premixed_thirty_dinner: new FormControl(''),
      human_premixed_fifty_breakfast: new FormControl(''),
      human_premixed_fifty_dinner: new FormControl(''),
      regular_insulin_breakfast: new FormControl(''),
      regular_insulin_dinner: new FormControl(''),
      nph_insulin_breakfast: new FormControl(''),
      nph_insulin_dinner: new FormControl(''),
      glargine_insulin_breakfast: new FormControl(''),
      glargine_insulin_dinner: new FormControl('')

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
      'anti_diabetes_medication':this.antidiabetes.anti_diabetes_medication
    })
    this.secondFormGroup.updateValueAndValidity();
   }  
  if(this.viewData && this.viewData.blood_investigation!=''){
    this.bloodInvetigateObj = JSON.parse(this.viewData.blood_investigation)
    this.blood_investigation_obj = JSON.parse(this.viewData.blood_investigation)
    this.thirdFormGroup.patchValue({
      'fasting_plasma':this.bloodInvetigateObj.fasting_plasma,
      'postprandial_plasma':this.bloodInvetigateObj.postprandial_plasma,
      'glyscolated':this.bloodInvetigateObj.glyscolated,
      'hba1_c':this.bloodInvetigateObj.hba1_c,
      's_creatinine':this.bloodInvetigateObj.s_creatinine
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
       "human_premixed_thirty_dinner":this.human_premixedthirtyArray.human_premixed_thirty_dinner,
    });
    this.fourthFormGroup.updateValueAndValidity()
  }
  if(this.viewData && this.viewData.human_premixed_fifty!=''){
    
    this.human_premixedfiftyArray  = JSON.parse(this.viewData.human_premixed_fifty);
    if(this.human_premixedfiftyArray.human_premixed_fifty){
      this.human_premixedfifty = true
    }
    else{
      this.human_premixedfifty = false
    }
    this.fourthFormGroup.patchValue({
      "human_premixed_fifty":this.human_premixedfiftyArray.human_premixed_fifty,
       "human_premixed_fifty_breakfast":this.human_premixedfiftyArray.human_premixed_fifty_breakfast,
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
      "glargine_insulin_dinner": this.glargine_insulinArray.glargine_insulin_dinner
    });
    this.fourthFormGroup.updateValueAndValidity();
  }
}



checkAntiDiabetes(name){
    // console.log('checkAntiDiabetes name',name)
    
   
    if(this.antidiabetes.indexOf(name)>-1){
      // if(this.anti_diabetes.indexOf(name)==-1){
      //   // return true
      //   this.anti_diabetes.push(name)
      //   console.log('anti_diabetes', this.anti_diabetes)
      // }
      // else{
      //   var i = this.anti_diabetes.indexOf(name);
      // this.anti_diabetes.splice(i,1);
      // }
     
      return true
    }else{
      // var i = this.anti_diabetes.indexOf(name);

      // this.anti_diabetes.splice(i,1);
      // console.log(this.anti_diabetes)
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
    return Array.from({length:51 }, (_value , k) => k  );
  }
  getTreateddiabeties(){
    return Array.from({length:51 }, (_value , k) => k  );
  }
  getHyperdur(){
    return Array.from({length:51 }, (_value , k) => k  );
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
  antiDiabetes(event,name){
    if(event.checked){
      this.anti_diabetes.push(name)
     
    }else{
      var i = this.anti_diabetes.indexOf(name);
      this.anti_diabetes.splice(i,1);
     
    }
  }
  onclick(event: any) {
    console.log(event)
    if (event.value == 'yes' ) {
      console.log(event.value)
    
      this.complications = 'yes';
      this.complications = true;
    }
    else {
      this.complications = 'no';
      this.complications = false;
     

    }
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
      
      this.hypertension = true;
    }
    else {
      
      this.hypertension = false
    }

  }
  oncheked2(event: any) {
    if (event.checked == true) {
      this.dyslipidemia = true
     

    }
    else {
      this.dyslipidemia = false
      
    }
  }
  oncheked3(event: any){
    if (event.checked == true) {

      this.coronary = true
     
    }
    else {
      this.coronary = false
      
    }

  }
  oncheked4(event: any) {
    if (event.checked == true) {
      this.stroke = true
     
    }
    else {
      this.stroke = false
      
    }
  }
  oncheked5(event: any, name: any) {
    if (event.checked == true) {
      this.neuropathy = true
      
    }
    else {
      this.neuropathy = false
      
    }

  }
  oncheked6(event: any) {
    if (event.checked == true) {
      this.retinopathy = true
     
    }
    else {
      this.retinopathy = false
     
    }
  }
  oncheked7(event: any) {
    if (event.checked == true) {

     
      this.nephropathy = true
    }
    else {
      this.nephropathy = false
   
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
     
    }
    else {
      this.human_premixedthirty = false
     
    }

  }
  oncheked9(event: any, name: any) {
    if (event.checked == true) {
      this.human_premixedfifty = true
      
    }
    else {
      this.human_premixedfifty = false
     
    }
  }
  oncheked10(event: any) {
    if (event.checked == true) {
      this.regular = true
     
    }
    else {
      this.regular = false
     
    }
  }
  oncheked11(event: any) {
    if (event.checked == true) {
      this.nph = true
     
    }
    else {
      this.nph = false
     
    }
  }
  oncheked12(event: any) {
    if (event.checked == true) {
      this.glargine = true
      
    }
    else {
      this.glargine = false
     
    }
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
      console.log(this.nowDate)
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
            this.toastr.success("The draft has been saved successfully")
            this.router.navigateByUrl('/dashboard')
          }
        }

      })
    }
  }
  secondForm(event: any) {

    console.log(event)
    if (!this.secondFormGroup.valid ) {
    
      this.secondFormGroup.markAllAsTouched()
      console.log("not valid")
      this.toastr.error("Please fill all the fields")
    }
    else {
      const formData = new FormData()
      this.medical.hypertension_dur = (this.secondFormGroup.value.hypertension_dur==true)?this.secondFormGroup.value.hypertension_dur:false;
      this.medical.duration_hypertension = this.secondFormGroup.value.duration;
      this.medical.hypertension_medications = this.secondFormGroup.value.medications;
      console.log('this.medical', this.medical);
      this.dyslipidemiaArrray.dyslipidemia_dur = (this.secondFormGroup.value.dyslipidemia_dur==true) ? this.secondFormGroup.value.dyslipidemia_dur:false;
      this.dyslipidemiaArrray.dyslipidemia_duration = this.secondFormGroup.value.dyslipidemia_duration;
      this.dyslipidemiaArrray.dyslipidemia_medication = this.secondFormGroup.value.dyslipidemia_medication;
      console.log(this.dyslipidemiaArrray)
      this.coronaryArray.coronary_artery_dur = (this.secondFormGroup.value.coronary_artery_dur==true) ? this.secondFormGroup.value.coronary_artery_dur:false;
      this.coronaryArray.coronary_artery_duration = this.secondFormGroup.value.coronary_artery_duration;
      this.coronaryArray.coronary_artery_medication = this.secondFormGroup.value.coronary_artery_medication;
      console.log(this.coronaryArray);
      this.strokeArray.stroke_dur = (this.secondFormGroup.value.stroke_dur==true) ? this.secondFormGroup.value.stroke_dur:false;
      this.strokeArray.stroke_duration = this.secondFormGroup.value.stroke_duration;
      this.strokeArray.stroke_medication = this.secondFormGroup.value.stroke_medication;
      console.log(this.strokeArray);
      this.neuropathyArray.neuropathy_dur = (this.secondFormGroup.value.neuropathy_dur==true) ? this.secondFormGroup.value.neuropathy_dur:false;
      this.neuropathyArray.neuropathy_duration = this.secondFormGroup.value.neuropathy_duration;
      this.neuropathyArray.neuropathy_medication = this.secondFormGroup.value.neuropathy_medication;
      console.log(this.neuropathyArray);
      this.retinopathyArray.retinopathy_dur = (this.secondFormGroup.value.retinopathy_dur==true) ? this.secondFormGroup.value.retinopathy_dur:false;
      this.retinopathyArray.retinopathy_duration = this.secondFormGroup.value.retinopathy_duration;
      this.retinopathyArray.retinopathy_medication = this.secondFormGroup.value.retinopathy_medication;
      console.log(this.retinopathyArray);
      this.nephropathyArray.nephropathy_dur = (this.secondFormGroup.value.nephropathy_dur==true) ? this.secondFormGroup.value.nephropathy_dur:false;
      this.nephropathyArray.nephropathy_duration = this.secondFormGroup.value.nephropathy_duration;
      this.nephropathyArray.nephropathy_medication = this.secondFormGroup.value.nephropathy_medication;
      console.log(this.nephropathyArray);
      formData.append("duration_diabetes", this.secondFormGroup.value.duration_diabetes);
      formData.append("treated_diabetes", this.secondFormGroup.value.treated_diabetes);
      formData.append("family_diabetes", this.secondFormGroup.value.family_diabetes);
      formData.append("hypertension", this.secondFormGroup.value.hypertension);
      formData.append("duration_hypertension", this.secondFormGroup.value.duration_hypertension);
      //formData.append("blood_pressure", this.secondFormGroup.value.blood_pressure);
      formData.append("systolic", this.secondFormGroup.value.systolic);
      formData.append(" diastolic", this.secondFormGroup.value.diastolic);
      formData.append("smoking", this.secondFormGroup.value.smoking);
      formData.append("alcohol", this.secondFormGroup.value.alcohol);
     
      formData.append("hypertension_dur", JSON.stringify(this.medical));
      formData.append("dyslipidemia_dur", JSON.stringify(this.dyslipidemiaArrray));
      formData.append("coronary_artery_dur", JSON.stringify(this.coronaryArray));
      formData.append("stroke_dur", JSON.stringify(this.strokeArray));
      formData.append("neuropathy_dur", JSON.stringify(this.neuropathyArray));
      formData.append("retinopathy_dur", JSON.stringify(this.retinopathyArray));
      formData.append("nephropathy_dur", JSON.stringify(this.nephropathyArray));
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
        this.initiateres = res
        if(event){
         this.toastr.success("The draft has been saved successfully")
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
      this.blood_investigation_obj.glyscolated = this.thirdFormGroup.value.glyscolated
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
          this.toastr.success("The draft has been saved successfully")
         this.router.navigateByUrl("/dashboard");
        }
      })
    }
  }
 
  submit(event:any) {
     
    if(this.fourthFormGroup.valid){
      // this.vascular.vascular_dignosis = this.secondFormGroup.value.vascular_dignosis;
      // this.vascular.complication = this.secondFormGroup.value.complication;
      // console.log('vascular', this.vascular)
      this.human_premixed_thirty_Obj.human_premixed_thirty = (this.fourthFormGroup.value.human_premixed_thirty==true) ?this.fourthFormGroup.value.human_premixed_thirty :false ;
      this.human_premixed_thirty_Obj.human_premixed_thirty_breakfast = this.fourthFormGroup.value.human_premixed_thirty_breakfast;
      this.human_premixed_thirty_Obj.human_premixed_thirty_dinner = this.fourthFormGroup.value.human_premixed_thirty_dinner;
      this.human_premixed_fifty_Obj.human_premixed_fifty = (this.fourthFormGroup.value.human_premixed_fifty==true) ? this.fourthFormGroup.value.human_premixed_fifty:false;
      this.human_premixed_fifty_Obj.human_premixed_fifty_breakfast = this.fourthFormGroup.value.human_premixed_fifty_breakfast;
      this.human_premixed_fifty_Obj.human_premixed_fifty_dinner = this.fourthFormGroup.value.human_premixed_fifty_dinner;
      this.regular_insulin_Obj.regular_insulin = (this.fourthFormGroup.value.regular_insulin == true) ? this.fourthFormGroup.value.regular_insulin:false ;
      this.regular_insulin_Obj.regular_insulin_breakfast = this.fourthFormGroup.value.regular_insulin_breakfast;
      this.regular_insulin_Obj.regular_insulin_dinner = this.fourthFormGroup.value.regular_insulin_dinner;
      this.nph_insulin_Obj.nph_insulin = (this.fourthFormGroup.value.nph_insulin == true) ? this.fourthFormGroup.value.nph_insulin : false;
      this.nph_insulin_Obj.nph_insulin_breakfast = this.fourthFormGroup.value.nph_insulin_breakfast;
      this.nph_insulin_Obj.nph_insulin_dinner = this.fourthFormGroup.value.nph_insulin_dinner;
      this.glargine_insulin_Obj.glargine_insulin = (this.fourthFormGroup.value.glargine_insulin==true) ?this.fourthFormGroup.value.glargine_insulin:false ;
      this.glargine_insulin_Obj.glargine_insulin_breakfast = this.fourthFormGroup.value.glargine_insulin_breakfast;
      this.glargine_insulin_Obj.glargine_insulin_dinner = this.fourthFormGroup.value.glargine_insulin_dinner;
      const formData = new FormData()
      // formData.append("id",this.route.snapshot.params.id)
      // formData.append("form_id", this.formId)
      formData.append("status", 'yes')
      formData.append("human_premixed_thirty", JSON.stringify(this.human_premixed_thirty_Obj));
      formData.append("human_premixed_fifty", JSON.stringify(this.human_premixed_fifty_Obj));
      formData.append("regular_insulin", JSON.stringify(this.regular_insulin_Obj));
      formData.append("nph_insulin", JSON.stringify(this.nph_insulin_Obj));
      formData.append("glargine_insulin", JSON.stringify(this.glargine_insulin_Obj));
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
        alert("The draft has been saved successfully")
        this.router.navigateByUrl("/dashboard");
       }

      })
    }
    else{
      console.log('not valid')
       this.fourthFormGroup.markAllAsTouched()
     }
    }

  
}