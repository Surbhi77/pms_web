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
  vascular: any = [];
  antidiabetes: any = [];
  hyperArray: any=[];
  dyslipidemiaArray:any = [];
  coronaryArray: any = [];
  strokeArray: any = [];
  neuropathyArray:any = []
  retinopathyArray: any = [];
  nephropathyArray: any =[];
  bloodInvetigateArray: any=[];
  human_premixedfiftyArray: any=[];
  human_premixedthirtyArray: any=[];
  regular_insulinArray: any=[];
  nph_insulinArray: any=[];
  glargine_insulinArray: any=[];
  checkboxArray: any=[];
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
      mobile: new FormControl(''),
      pen_serial: new FormControl(''),
      date_visit: new FormControl(''),
      sex: new FormControl(''),
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
      age_at_diabetes: new FormControl(''),
      family_diabetes: new FormControl(''),
      hypertension: new FormControl(''),
      duration_hypertension: new FormControl(''),
      blood_pressure: new FormControl(''),
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
      fourty_iu_vial: new FormControl(''),
      hundred_iu_vial: new FormControl(''),
      refill: new FormControl(''),
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
    this.vascular = JSON.parse(this.viewData.vascular_dignosis)
    console.log(this.vascular)
    if(this.vascular.vascular_dignosis=='yes'){
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
    if(this.viewData.blood_investigation=='yes'){
      this.bloodInvestigation = true;
    }
    else{
      this.bloodInvestigation = false;
    }
   
   
    this.bloodInvetigateArray = JSON.parse(this.viewData.blood_investigation);
    console.log( this.bloodInvetigateArray)
    this.hyperArray = JSON.parse(this.viewData.hypertension_dur)
    console.log(this.hyperArray);
    this.dyslipidemiaArray = JSON.parse(this.viewData.dyslipidemia_dur)
    console.log(this.dyslipidemiaArray);
    this.coronaryArray = JSON.parse(this.viewData.coronary_artery_dur)
    console.log( this.coronaryArray)
    this.strokeArray = JSON.parse(this.viewData.stroke_dur);
    console.log(this.strokeArray);
    this.neuropathyArray = JSON.parse(this.viewData.neuropathy_dur);
    console.log( this.neuropathyArray)
    this.retinopathyArray = JSON.parse(this.viewData.retinopathy_dur)
    console.log( this.retinopathyArray );
    this.nephropathyArray = JSON.parse(this.viewData.nephropathy_dur)
    console.log( this.nephropathyArray )
    this.secondFormGroup.patchValue({
      "complication":this.vascular.complication,
      "hypertension_dur":this.hyperArray.hypertension_dur,
      "duration":this.hyperArray.duration_hypertension,
      "medications":this.hyperArray.hypertension_medications,
      "dyslipidemia_dur":this.dyslipidemiaArray.dyslipidemia_dur,
      "dyslipidemia_duration":this.dyslipidemiaArray.dyslipidemia_duration,
      "dyslipidemia_medication":this.dyslipidemiaArray.dyslipidemia_medication,
      "coronary_artery_dur":this.coronaryArray.coronary_artery_dur,
      "coronary_artery_duration":this.coronaryArray.coronary_artery_duration,
      "coronary_artery_medication":this.coronaryArray.coronary_artery_medication,
      "stroke_dur":this.strokeArray.stroke_dur,
      "stroke_duration":this.strokeArray.stroke_duration,
      "stroke_medication":this.strokeArray.stroke_medication,
      "neuropathy_dur":this.nephropathyArray.neuropathy_dur,
      "neuropathy_duration":this.neuropathyArray.neuropathy_duration,
      "neuropathy_medication":this.neuropathyArray.neuropathy_medication,
      "retinopathy_dur":this.retinopathyArray.retinopathy_dur,
      "retinopathy_duration":this.retinopathyArray.retinopathy_duration,
      "retinopathy_medication":this.retinopathyArray.retinopathy_medication,
      "nephropathy_dur":this.nephropathyArray.nephropathy_dur,
      "nephropathy_duration":this.nephropathyArray.nephropathy_duration,
      "nephropathy_medication":this.nephropathyArray.nephropathy_medication,
      
    })
    this.secondFormGroup.updateValueAndValidity();
    this.human_premixedfiftyArray = JSON.parse(this.viewData.human_premixed_fifty)
    console.log(this.human_premixedfiftyArray)
    this.human_premixedthirtyArray = JSON.parse(this.viewData.human_premixed_thirty);
    console.log(this.human_premixedthirtyArray);
    this.regular_insulinArray = JSON.parse(this.viewData.regular_insulin);
    console.log(this.regular_insulinArray);
    this.nph_insulinArray = JSON.parse(this.viewData.nph_insulin) ;
    console.log(this.nph_insulinArray);
    this.glargine_insulinArray = JSON.parse(this.viewData.glargine_insulin);
    console.log( this.glargine_insulinArray)
    //  this.checkboxArray.refill = JSON.parse(this.viewData.refill)
    //  this.checkboxArray.fourty_iu_vial =JSON.parse(this.viewData.fourty_iu_vial);
    // this.checkboxArray.hundred_iu_vial = JSON.parse(this.viewData.hundred_iu_vial);
    // console.log( this.checkboxArray)
    //this.checkboxArray=JSON.parse(this.checkboxArray)
    
    this.thirdFormGroup.patchValue({
      "blood_investigation":this.bloodInvetigateArray.blood_investigation,
      "blood_investigation_duration":this.bloodInvetigateArray.blood_investigation_duration,
      "blood_investigation_ppg":this.bloodInvetigateArray.blood_investigation_ppg,
      "blood_investigation_hba1c":this.bloodInvetigateArray.blood_investigation_hba1c,
      "blood_investigation_HPLC":this.bloodInvetigateArray.blood_investigation_HPLC,
      "blood_investigation_Creatinine":this.bloodInvetigateArray.blood_investigation_Creatinine,
      

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
    if(this.dyslipidemiaArray.dyslipidemia_dur){
      this.dyslipidemia = true
    }
    else{
      this.dyslipidemia = false
    }
    if(this.coronaryArray.coronary_artery_dur){
      this.coronary = true
    }
    else{
      this.coronary = false
    }
    if(this.strokeArray.stroke_dur){
      this.stroke = true
    }
    else{
      this.stroke = false
    }
    if(this.neuropathyArray.neuropathy_dur){
      this.neuropathy = true
    }
    else{
      this.neuropathy = false
    }
    if(this.retinopathyArray.retinopathy_dur){
      this.retinopathy = true
    }
    else{
      this.retinopathy = false
    }
    if(this.nephropathyArray.nephropathy_dur){
      this.nephropathy = true
    }
    else{
      this.nephropathy = false
    }
   
    
  
    this.antidiabetes = JSON.parse(this.viewData.anti_diabetes_medication)
    console.log( this.antidiabetes)
    console.log(this.viewData.refill)
    if(this.viewData.refil==true){
      return true;
    }
    else{
      return false;
    }
    })
  }
  getCreatinine() {
    return Array.from({length:50 }, (_value , k=1) => ((k / 10)+0.1).toFixed(1) );

  }
  
  onclick(event: any) {
    console.log(event)
    if (event.value == 'yes' && this.vascular) {
      console.log(event.value)
     console.log(this.vascular.complication)
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

}