import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-draft-view',
  templateUrl: './draft-view.component.html',
  styleUrls: ['./draft-view.component.css']
})
export class DraftViewComponent implements OnInit {
  //vascular: any = {};
  antidiabetes: any = {};
  hyperArray: any={};
  dyslipidemiaObj:any = {};
  coronaryObj: any = {};
  strokeObj: any = {};
  neuropathyObj:any = {}
  retinopathyObj: any = {};
  nephropathyObj: any ={};
  bloodInvetigateObj: any={};
  human_premixedfiftyArray: any={};
  human_premixedthirtyArray: any={};
  regular_insulinArray: any={};
  nph_insulinArray: any={};
  glargine_insulinArray: any={};
  vascularArray: any = {};
  // medical: any = {};
  // dyslipidemiaArrray: any = {}
  // coronaryArray: any = {}
  // strokeArray: any = {}
  // neuropathyArray: any = {}
  // retinopathyArray: any = {};
  // nephropathyArray: any = {};
  anti_diabetes: any = {};
  blood_investigation_obj: any = {}
  human_premixed_thirty_Obj: any = {}
  human_premixed_fifty_Obj: any = {}
  regular_insulin_Obj: any = {}
  nph_insulin_Obj: any = {}
  glargine_insulin_Obj: any = {}
  dobDate: string;
  isFormSubmitted: boolean;
  bmi: any;
  nowDate: string;
 
  constructor(private service:MainService,private _formBuilder:FormBuilder,private router:ActivatedRoute) { }
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
      mobile: new FormControl(''),
      pen_serial: new FormControl(''),
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
      vascular_dignosis: new FormControl(''),
      hypertension_dur: new FormControl(''),
      dyslipidemia_dur: new FormControl(''),
      coronary_artery_dur: new FormControl(''),
      stroke_dur: new FormControl(''),
      neuropathy_dur: new FormControl(''),
      retinopathy_dur: new FormControl(''),
      nephropathy_dur: new FormControl(''),
      anti_diabetes_medication: new FormControl(''),
      medical_condition: new FormControl(''),
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
      blood_investigation: new FormControl(''),
      blood_investigation_Creatinine: new FormControl(''),
      blood_investigation_HPLC: new FormControl(''),
      blood_investigation_hba1c: new FormControl(''),
      blood_investigation_ppg: new FormControl(''),
      blood_investigation_duration: new FormControl(''),

      
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
      glargine_insulin_dinner: new FormControl('')

    })
    const formdata = new FormData();
    formdata.append('id',this.router.snapshot.params.id)
    this.service.draftView(formdata).subscribe((res:any)=>{
    console.log(res)
    this.viewData = res.data
    console.log(this.viewData.vascular_dignosis)
    this.vascularArray = this.viewData.vascular_dignosis
     console.log(this.vascularArray)
    if(this.vascularArray.vascular_dignosis=='yes'){
      this.complications = true 
    }
    else{
      this.complications = false
    }
    if(this.viewData.medical_condition='yes'){
      this.medication = true;
    }
    else{
      this.medication = false;
    }
    
    this.bloodInvetigateObj =this.viewData.blood_investigation;
    console.log( this.bloodInvetigateObj)
    if(this.bloodInvetigateObj.blood_investigation=='yes'){

      this.bloodInvestigation = true;
     // this.bloodInvetigateArray.blood_investigation='yes'
      console.log(this.bloodInvetigateObj.blood_investigation)
    }
    else{
      this.bloodInvestigation = false;
    }
    this.hyperArray = this.viewData.hypertension_dur
    console.log(this.hyperArray);
    this.dyslipidemiaObj = this.viewData.dyslipidemia_dur
    console.log(this.dyslipidemiaObj);
    this.coronaryObj = (this.viewData.coronary_artery_dur)
    console.log( this.coronaryObj)
    this.strokeObj = (this.viewData.stroke_dur);
    console.log(this.strokeObj);
    this.neuropathyObj = (this.viewData.neuropathy_dur);
    console.log( this.neuropathyObj)
    this.retinopathyObj = (this.viewData.retinopathy_dur)
    console.log( this.retinopathyObj );
    this.nephropathyObj = (this.viewData.nephropathy_dur)
    console.log( this.nephropathyObj )
    this.secondFormGroup.patchValue({
      "complication":this.vascularArray.complication,
      "hypertension_dur":this.hyperArray.hypertension_dur,
      "duration":this.hyperArray.duration_hypertension,
      "medications":this.hyperArray.hypertension_medications,
      "dyslipidemia_dur":this.dyslipidemiaObj.dyslipidemia_dur,
      "dyslipidemia_duration":this.dyslipidemiaObj.dyslipidemia_duration,
      "dyslipidemia_medication":this.dyslipidemiaObj.dyslipidemia_medication,
      "coronary_artery_dur":this.coronaryObj.coronary_artery_dur,
      "coronary_artery_duration":this.coronaryObj.coronary_artery_duration,
      "coronary_artery_medication":this.coronaryObj.coronary_artery_medication,
      "stroke_dur":this.strokeObj.stroke_dur,
      "stroke_duration":this.strokeObj.stroke_duration,
      "stroke_medication":this.strokeObj.stroke_medication,
      "neuropathy_dur":this.neuropathyObj.neuropathy_dur,
      "neuropathy_duration":this.neuropathyObj.neuropathy_duration,
      "neuropathy_medication":this.neuropathyObj.neuropathy_medication,
      "retinopathy_dur":this.retinopathyObj.retinopathy_dur,
      "retinopathy_duration":this.retinopathyObj.retinopathy_duration,
      "retinopathy_medication":this.retinopathyObj.retinopathy_medication,
      "nephropathy_dur":this.nephropathyObj.nephropathy_dur,
      "nephropathy_duration":this.nephropathyObj.nephropathy_duration,
      "nephropathy_medication":this.nephropathyObj.nephropathy_medication,
      
    })
    this.secondFormGroup.updateValueAndValidity();
    this.human_premixedfiftyArray = this.viewData.human_premixed_fifty
    console.log(this.human_premixedfiftyArray)
    this.human_premixedthirtyArray = this.viewData.human_premixed_thirty;
    console.log(this.human_premixedthirtyArray);
    this.regular_insulinArray = this.viewData.regular_insulin;
    console.log(this.regular_insulinArray);
    this.nph_insulinArray = this.viewData.nph_insulin ;
    console.log(this.nph_insulinArray);
    this.glargine_insulinArray = this.viewData.glargine_insulin;
    console.log( this.glargine_insulinArray)
    
    this.thirdFormGroup.patchValue({
      "blood_investigation":this.bloodInvetigateObj.blood_investigation,
      "blood_investigation_duration":this.bloodInvetigateObj.blood_investigation_duration,
      "blood_investigation_ppg":this.bloodInvetigateObj.blood_investigation_ppg,
      "blood_investigation_hba1c":this.bloodInvetigateObj.blood_investigation_hba1c,
      "blood_investigation_HPLC":this.bloodInvetigateObj.blood_investigation_HPLC,
      "blood_investigation_Creatinine":this.bloodInvetigateObj.blood_investigation_Creatinine,
    })
    this.thirdFormGroup.updateValueAndValidity();
    this.fourthFormGroup.patchValue({
      "human_premixed_thirty":this.human_premixedthirtyArray.human_premixed_thirty,
      "human_premixed_thirty_breakfast":this.human_premixedthirtyArray.human_premixed_thirty_breakfast,
      "human_premixed_thirty_lunch":this.human_premixedthirtyArray.human_premixed_thirty_lunch,
      "human_premixed_thirty_dinner":this.human_premixedthirtyArray.human_premixed_thirty_dinner,
      "human_premixed_fifty":this.human_premixedfiftyArray.human_premixed_fifty,
      "human_premixed_fifty_breakfast":this.human_premixedfiftyArray.human_premixed_fifty_breakfast,
      "human_premixed_fifty_lunch":this.human_premixedfiftyArray.human_premixed_fifty_lunch,
      "human_premixed_fifty_dinner":this.human_premixedfiftyArray.human_premixed_fifty_dinner,
      "regular_insulin":this.regular_insulinArray.regular_insulin,
      "regular_insulin_breakfast":this.regular_insulinArray.regular_insulin_breakfast,
      "regular_insulin_lunch":this.regular_insulinArray.regular_insulin_lunch,
      "regular_insulin_dinner":this.regular_insulinArray.regular_insulin_dinner,
      "nph_insulin":this.nph_insulinArray.nph_insulin,
      "nph_insulin_breakfast":this.nph_insulinArray.nph_insulin_breakfast,
      "nph_insulin_lunch":this.nph_insulinArray.nph_insulin_lunch,
      "nph_insulin_dinner":this.nph_insulinArray.nph_insulin_dinner,
      "glargine_insulin":this.glargine_insulinArray.glargine_insulin,
      "glargine_insulin_breakfast":this.glargine_insulinArray.glargine_insulin_breakfast,
      "glargine_insulin_lunch":this.glargine_insulinArray.glargine_insulin_lunch,
      "glargine_insulin_dinner":this.glargine_insulinArray.glargine_insulin_dinner

    })
    this.fourthFormGroup.updateValueAndValidity();
    if(this.human_premixedthirtyArray.human_premixed_thirty){
      this.human_premixedthirty = true
    }
    else{
      this.human_premixedthirty = false
    }
    if(this.human_premixedfiftyArray.human_premixed_fifty){
      this.human_premixedfifty = true
    }
    else{
      this.human_premixedfifty = false
    }
    if(this.regular_insulinArray.regular_insulin){
      this.regular = true
    }
    else{
      this.regular = false
    }
    if(this.nph_insulinArray.nph_insulin){
      this.nph = true
    }
    else{
      this.nph = false
    }
    if(this.glargine_insulinArray.glargine_insulin){
      this.glargine = true
    }
    else{
      this.glargine = false
    }
    if(this.hyperArray.hypertension_dur){
      this.hypertension = true;
    }
    else{
      this.hypertension = false;
    }
    if(this.dyslipidemiaObj.dyslipidemia_dur){
      this.dyslipidemia = true
    }
    else{
      this.dyslipidemia = false
    }
    if(this.coronaryObj.coronary_artery_dur){
      this.coronary = true
    }
    else{
      this.coronary = false
    }
    if(this.strokeObj.stroke_dur){
      this.stroke = true
    }
    else{
      this.stroke = false
    }
    if(this.neuropathyObj.neuropathy_dur){
      this.neuropathy = true
    }
    else{
      this.neuropathy = false
    }
    if(this.retinopathyObj.retinopathy_dur){
      this.retinopathy = true
    }
    else{
      this.retinopathy = false
    }
    if(this.nephropathyObj.nephropathy_dur){
      this.nephropathy = true
    }
    else{
      this.nephropathy = false
    }
   
    this.antidiabetes = this.viewData.anti_diabetes_medication
    console.log( this.antidiabetes)
    })
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
  bmicalc(){
    
    this.bmi =(this.firstFormGroup.value.weight/((this.firstFormGroup.value.height*this.firstFormGroup.value.height)/100))*100
   this.bmi = this.bmi.toFixed(2)
    console.log( this.bmi)
  }

  submit() {
      // this.vascularArray.vascular_dignosis = this.secondFormGroup.value.vascular_dignosis;
      // this.vascularArray.complication = this.secondFormGroup.value.complication;
      // console.log('vascular', this.vascular)
      // this.medical.hypertension_dur = (this.secondFormGroup.value.hypertension_dur==true)?this.secondFormGroup.value.hypertension_dur:false;
      // this.medical.duration_hypertension = this.secondFormGroup.value.duration;
      // this.medical.hypertension_medications = this.secondFormGroup.value.medications;

      // console.log('this.medical', this.medical);
 
      // this.dyslipidemiaArrray.dyslipidemia_dur = (this.secondFormGroup.value.dyslipidemia_dur==true) ? this.secondFormGroup.value.dyslipidemia_dur:false;
      // this.dyslipidemiaArrray.dyslipidemia_duration = this.secondFormGroup.value.dyslipidemia_duration;
      // this.dyslipidemiaArrray.dyslipidemia_medication = this.secondFormGroup.value.dyslipidemia_medication;
      // console.log(this.dyslipidemiaArrray)
      // this.coronaryArray.coronary_artery_dur = (this.secondFormGroup.value.coronary_artery_dur==true) ? this.secondFormGroup.value.coronary_artery_dur:false;
      // this.coronaryArray.coronary_artery_duration = this.secondFormGroup.value.coronary_artery_duration;
      // this.coronaryArray.coronary_artery_medication = this.secondFormGroup.value.coronary_artery_medication;
      // console.log(this.coronaryArray);
      // this.strokeArray.stroke_dur = (this.secondFormGroup.value.stroke_dur==true) ? this.secondFormGroup.value.stroke_dur:false;
      // this.strokeArray.stroke_duration = this.secondFormGroup.value.stroke_duration;
      // this.strokeArray.stroke_medication = this.secondFormGroup.value.stroke_medication;
      // console.log(this.strokeArray);
      // this.neuropathyArray.neuropathy_dur = (this.secondFormGroup.value.neuropathy_dur==true) ? this.secondFormGroup.value.neuropathy_dur:false;
      // this.neuropathyArray.neuropathy_duration = this.secondFormGroup.value.neuropathy_duration;
      // this.neuropathyArray.neuropathy_medication = this.secondFormGroup.value.neuropathy_medication;
      // console.log(this.neuropathyArray);
      // this.retinopathyArray.retinopathy_dur = (this.secondFormGroup.value.retinopathy_dur==true) ? this.secondFormGroup.value.retinopathy_dur:false;
      // this.retinopathyArray.retinopathy_duration = this.secondFormGroup.value.retinopathy_duration;
      // this.retinopathyArray.retinopathy_medication = this.secondFormGroup.value.retinopathy_medication;
      // console.log(this.retinopathyArray);
      // this.nephropathyArray.nephropathy_dur = (this.secondFormGroup.value.nephropathy_dur==true) ? this.secondFormGroup.value.nephropathy_dur:false;
      // this.nephropathyArray.nephropathy_duration = this.secondFormGroup.value.nephropathy_duration;
      // this.nephropathyArray.nephropathy_medication = this.secondFormGroup.value.nephropathy_medication;
      // console.log(this.nephropathyArray);
      // this.anti_diabetes.anti_diabetes_medication = (this.secondFormGroup.value.anti_diabetes_medication==true) ? this.secondFormGroup.value.anti_diabetes_medication : false;
      // this.anti_diabetes.Sulphonylureas = (this.secondFormGroup.value.Sulphonylureas == true) ? this.secondFormGroup.value.Sulphonylureas : false;
      // this.anti_diabetes.Meglitinides = (this.secondFormGroup.value.Meglitinides == true) ? this.secondFormGroup.value.Meglitinides : false;
      // this.anti_diabetes.Thiazolidendiones = (this.secondFormGroup.value.Thiazolidendiones == true) ? this.secondFormGroup.value.Thiazolidendiones : false;
      // this.anti_diabetes.GLP_Analogues = (this.secondFormGroup.value.GLP_Analogues == true) ? this.secondFormGroup.value.GLP_Analogues : false;
      // this.anti_diabetes.DPP4_Inhibitors = (this.secondFormGroup.value.DPP4_Inhibitors == true) ? this.secondFormGroup.value.DPP4_Inhibitors : false ;
      // this.anti_diabetes.DoubleDrugFixed = (this.secondFormGroup.value.DoubleDrugFixed == true) ? this.secondFormGroup.value.DoubleDrugFixed : false;
      // this.anti_diabetes.TripleDrugFixed = (this.secondFormGroup.value.TripleDrugFixed == true ) ? this.secondFormGroup.value.TripleDrugFixed : false;
      // console.log(this.anti_diabetes)
      // this.blood_investigation_obj.blood_investigation = this.thirdFormGroup.value.blood_investigation
      // this.blood_investigation_obj.blood_investigation_Creatinine = this.thirdFormGroup.value.blood_investigation_Creatinine
      // this.blood_investigation_obj.blood_investigation_HPLC = this.thirdFormGroup.value.blood_investigation_HPLC
      // this.blood_investigation_obj.blood_investigation_hba1c = this.thirdFormGroup.value.blood_investigation_hba1c
      // this.blood_investigation_obj.blood_investigation_ppg = this.thirdFormGroup.value.blood_investigation_ppg
      // this.blood_investigation_obj.blood_investigation_duration = this.thirdFormGroup.value.blood_investigation_duration;
      // this.human_premixed_thirty_Obj.human_premixed_thirty = (this.fourthFormGroup.value.human_premixed_thirty==true) ?this.fourthFormGroup.value.human_premixed_thirty :false ;
      // this.human_premixed_thirty_Obj.human_premixed_thirty_breakfast = this.fourthFormGroup.value.human_premixed_thirty_breakfast;
      // this.human_premixed_thirty_Obj.human_premixed_thirty_lunch = this.fourthFormGroup.value.human_premixed_thirty_lunch;
      // this.human_premixed_fifty_Obj.human_premixed_thirty_dinner = this.fourthFormGroup.value.human_premixed_thirty_dinner;
      // this.human_premixed_fifty_Obj.human_premixed_fifty = (this.fourthFormGroup.value.human_premixed_fifty==true) ? this.fourthFormGroup.value.human_premixed_fifty:false;
      // this.human_premixed_fifty_Obj.human_premixed_fifty_breakfast = this.fourthFormGroup.value.human_premixed_fifty_breakfast;
      // this.human_premixed_fifty_Obj.human_premixed_fifty_lunch = this.fourthFormGroup.value.human_premixed_fifty_lunch;
      // this.human_premixed_fifty_Obj.human_premixed_fifty_dinner = this.fourthFormGroup.value.human_premixed_fifty_dinner;
      // this.regular_insulin_Obj.regular_insulin = (this.fourthFormGroup.value.regular_insulin == true) ? this.fourthFormGroup.value.regular_insulin:false ;
      // this.regular_insulin_Obj.regular_insulin_breakfast = this.fourthFormGroup.value.regular_insulin_breakfast;
      // this.regular_insulin_Obj.regular_insulin_lunch = this.fourthFormGroup.value.regular_insulin_lunch;
      // this.regular_insulin_Obj.regular_insulin_dinner = this.fourthFormGroup.value.regular_insulin_dinner;
      // this.nph_insulin_Obj.nph_insulin = (this.fourthFormGroup.value.nph_insulin == true) ? this.fourthFormGroup.value.nph_insulin : false;
      // this.nph_insulin_Obj.nph_insulin_breakfast = this.fourthFormGroup.value.nph_insulin_breakfast;
      // this.nph_insulin_Obj.nph_insulin_lunch = this.fourthFormGroup.value.nph_insulin_lunch;
      // this.nph_insulin_Obj.nph_insulin_dinner = this.fourthFormGroup.value.nph_insulin_dinner;
      // this.glargine_insulin_Obj.glargine_insulin = (this.fourthFormGroup.value.glargine_insulin==true) ?this.fourthFormGroup.value.glargine_insulin:false ;
      // this.glargine_insulin_Obj.glargine_insulin_breakfast = this.fourthFormGroup.value.glargine_insulin_breakfast;
      // this.glargine_insulin_Obj.glargine_insulin_lunch = this.fourthFormGroup.value.glargine_insulin_lunch;
      // this.glargine_insulin_Obj.glargine_insulin_dinner = this.fourthFormGroup.value.glargine_insulin_dinner;
      const formData = new FormData()
      formData.append("user_id", JSON.parse(localStorage.getItem('doctor_id')));
      formData.append("mobile",JSON.parse(localStorage.getItem('mobile')));
      formData.append("pen_serial", this.firstFormGroup.value.pen_serial);
      formData.append("id", this.router.snapshot.params.id);
      formData.append('status','yes')
      formData.append("sex", this.firstFormGroup.value.sex);
      formData.append("date_visit", this.nowDate);
      formData.append("age", this.firstFormGroup.value.age);
      formData.append("weight", this.firstFormGroup.value.weight);
      formData.append("height", this.firstFormGroup.value.height);
      formData.append("bmi", this.bmi);
      formData.append("education", this.firstFormGroup.value.education);
      formData.append("employment", this.firstFormGroup.value.employment);
      formData.append("duration_diabetes", this.secondFormGroup.value.duration_diabetes);
      formData.append("treated_diabetes", this.secondFormGroup.value.treated_diabetes);
      formData.append("family_diabetes", this.secondFormGroup.value.family_diabetes);
      formData.append("hypertension", this.secondFormGroup.value.hypertension);
      formData.append("duration_hypertension", this.secondFormGroup.value.duration_hypertension);
     // formData.append("blood_pressure", this.secondFormGroup.value.blood_pressure);
      formData.append("systolic", this.secondFormGroup.value.systolic);
      formData.append(" diastolic", this.secondFormGroup.value.diastolic);
      formData.append("smoking", this.secondFormGroup.value.smoking);
      formData.append("alcohol", this.secondFormGroup.value.alcohol);
      formData.append("vascular_dignosis", JSON.stringify(this.vascularArray))
      formData.append("hypertension_dur", JSON.stringify(this.hyperArray));
      formData.append("dyslipidemia_dur", JSON.stringify(this.dyslipidemiaObj));
      formData.append("coronary_artery_dur", JSON.stringify(this.coronaryObj));
      formData.append("stroke_dur", JSON.stringify(this.strokeObj));
      formData.append("neuropathy_dur", JSON.stringify(this.neuropathyObj));
      formData.append("retinopathy_dur", JSON.stringify(this.retinopathyObj));
      formData.append("nephropathy_dur", JSON.stringify(this.nephropathyObj));
      formData.append("anti_diabetes_medication", JSON.stringify(this.anti_diabetes));
      formData.append("blood_investigation", JSON.stringify(this.blood_investigation_obj));
      formData.append("human_premixed_thirty", JSON.stringify(this.human_premixed_thirty_Obj));
      formData.append("human_premixed_fifty", JSON.stringify(this.human_premixed_fifty_Obj));
      formData.append("regular_insulin", JSON.stringify(this.regular_insulin_Obj));
      formData.append("nph_insulin", JSON.stringify(this.nph_insulin_Obj));
      formData.append("glargine_insulin", JSON.stringify(this.glargine_insulin_Obj));
      formData.append("medical_condition",this.secondFormGroup.value.medical_condition)
      console.log(formData)

     
      this.service.addInitiate(formData).subscribe(res => {

        console.log(res)
        


      })
    
    
    }

}