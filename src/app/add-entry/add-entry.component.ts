import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  title = 'Add Entry';
  nowDate: any;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  isLinear = true;
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
  vascular: any = {};
  medical: any = {};
  dyslipidemiaArrray: any = {}
  coronaryArray: any = {}
  strokeArray: any = {}
  neuropathyArray: any = {}
  retinopathyArray: any = {};
  nephropathyArray: any = {};
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
  resetform: any=[];


  //isEditable = false;

  constructor(private _formBuilder: FormBuilder, private service: MainService, private router:Router) { }

  ngOnInit() {
    // this.dateformatecommon();
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
    //  blood_pressure: new FormControl('', [Validators.required]),
      systolic: new FormControl('', [Validators.required]),
      diastolic: new FormControl('', [Validators.required]),
      smoking: new FormControl('', [Validators.required]),
      alcohol: new FormControl('', [Validators.required]),
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
    this.secondFormGroup.get("vascular_dignosis").valueChanges
      .subscribe(data => {
        this.changeValidators()


      })

    this.thirdFormGroup = this._formBuilder.group({
      blood_investigation: new FormControl(''),
      blood_investigation_Creatinine: new FormControl(''),
      blood_investigation_HPLC: new FormControl(''),
      blood_investigation_hba1c: new FormControl(''),
      blood_investigation_ppg: new FormControl(''),
      blood_investigation_duration: new FormControl(''),

      
    })
    this.fourthFormGroup = this._formBuilder.group({
      //fourty_iu_vial: new FormControl(''),
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
  }

  changeValidators() {
    if (this.secondFormGroup.get("vascular_dignosis").value == "yes") {
      this.secondFormGroup.controls["complication"].setValidators([Validators.required]);
    } else {
      this.secondFormGroup.controls["complication"].clearValidators();

    }
    this.secondFormGroup.get("complication").updateValueAndValidity();

  }
  firstForm(event: any) {
    console.log(event);
    if (event.value == null) {
      this.isLinear = true;
    }
    else {
      this.isLinear = false;
      console.log(this.firstFormGroup.value)
    }
  }
  secondForm(event: any) {

    console.log(event)
    if (event.value == null) {
      this.isLinear = true;
    }
    else {
      this.isLinear = false;
    }
  }
  thirdForm(event: any) {

    console.log(event)
    if (event.value == null ) {
      this.isLinear = true;

    }
    else {
      this.isLinear = false;
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
  ofbirth(e){
    var date = new Date(e.value),
      yr = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate(),
      newDate = yr + '-' + month + '-' + day;
    this.dobDate = newDate;
    console.log(newDate);

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
  public g =  (controlName: string, errorName: string)=> {
    return this.firstFormGroup.controls[controlName].hasError(errorName);;
  }
  onclick(event: any) {
    console.log(event)
    if (event.value == 'yes') {
      console.log(event.value)
      this.secondFormGroup.controls["complication"].setValidators([Validators.required]);
      this.complications = 'yes';
      this.complications = true;
    }
    else {
      this.complications = 'no';
      this.complications = false;
      this.secondFormGroup.controls["complication"].clearValidators();

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
  oncheked(event: any, name: any) {

    if (event.checked == true) {
      if (name == 'hypertension_dur') {
        this.secondFormGroup.controls["duration"].setValidators([Validators.required]);
        this.secondFormGroup.controls["duration"].updateValueAndValidity();
        this.secondFormGroup.controls["medications"].setValidators([Validators.required]);
        this.secondFormGroup.controls["medications"].updateValueAndValidity();
      }
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
  oncheked2(event: any, name: any) {
    if (event.checked == true) {
      this.dyslipidemia = true
      if (name == 'dyslipidemia_dur') {
        this.secondFormGroup.controls["dyslipidemia_duration"].setValidators([Validators.required]);
        this.secondFormGroup.controls["dyslipidemia_duration"].updateValueAndValidity();
        this.secondFormGroup.controls["dyslipidemia_medication"].setValidators([Validators.required]);
        this.secondFormGroup.controls["dyslipidemia_medication"].updateValueAndValidity();
      }

    }
    else {
      this.dyslipidemia = false
      this.secondFormGroup.controls["dyslipidemia_duration"].clearValidators();
      this.secondFormGroup.controls["dyslipidemia_duration"].updateValueAndValidity();
      this.secondFormGroup.controls["dyslipidemia_medication"].clearValidators();
      this.secondFormGroup.controls["dyslipidemia_medication"].updateValueAndValidity();
    }

  }
  oncheked3(event: any, name: any) {
    if (event.checked == true) {

      this.coronary = true
      if (name == 'coronary_artery_dur') {
        this.secondFormGroup.controls["coronary_artery_duration"].setValidators([Validators.required]);
        this.secondFormGroup.controls["coronary_artery_duration"].updateValueAndValidity();
        this.secondFormGroup.controls["coronary_artery_medication"].setValidators([Validators.required]);
        this.secondFormGroup.controls["coronary_artery_medication"].updateValueAndValidity();
      }
    }
    else {
      this.coronary = false
      this.secondFormGroup.controls["coronary_artery_duration"].clearValidators();
      this.secondFormGroup.controls["coronary_artery_duration"].updateValueAndValidity();
      this.secondFormGroup.controls["coronary_artery_medication"].clearValidators();
      this.secondFormGroup.controls["coronary_artery_medication"].updateValueAndValidity();
    }

  }
  oncheked4(event: any, name: any) {
    if (event.checked == true) {
      this.stroke = true
      if (name == 'stroke_dur')
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
      if (name == 'neuropathy_dur') {
        this.secondFormGroup.controls["neuropathy_duration"].setValidators([Validators.required]);
        this.secondFormGroup.controls["neuropathy_duration"].updateValueAndValidity();
        this.secondFormGroup.controls["neuropathy_medication"].setValidators([Validators.required]);
        this.secondFormGroup.controls["neuropathy_medication"].updateValueAndValidity();
      }
    }
    else {
      this.neuropathy = false
      this.secondFormGroup.controls["neuropathy_duration"].clearValidators();
      this.secondFormGroup.controls["neuropathy_duration"].updateValueAndValidity();
      this.secondFormGroup.controls["neuropathy_medication"].clearValidators();
      this.secondFormGroup.controls["neuropathy_medication"].updateValueAndValidity();
    }

  }
  oncheked6(event: any, name: any) {
    if (event.checked == true) {
      this.retinopathy = true
      if (name == 'retinopathy_dur') {
        this.secondFormGroup.controls["retinopathy_duration"].setValidators([Validators.required]);
        this.secondFormGroup.controls["retinopathy_duration"].updateValueAndValidity();
        this.secondFormGroup.controls["retinopathy_medication"].setValidators([Validators.required]);
        this.secondFormGroup.controls["retinopathy_medication"].updateValueAndValidity();
      }
    }
    else {
      this.retinopathy = false
      this.secondFormGroup.controls["retinopathy_duration"].clearValidators();
      this.secondFormGroup.controls["retinopathy_duration"].updateValueAndValidity();
      this.secondFormGroup.controls["retinopathy_medication"].clearValidators();
      this.secondFormGroup.controls["retinopathy_medication"].updateValueAndValidity();
    }
  }
  oncheked7(event: any, name: any) {
    if (event.checked == true) {

      if (name == 'nephropathy_dur') {
        this.secondFormGroup.controls["nephropathy_duration"].setValidators([Validators.required]);
        this.secondFormGroup.controls["nephropathy_duration"].updateValueAndValidity();
        this.secondFormGroup.controls["nephropathy_medication"].setValidators([Validators.required]);
        this.secondFormGroup.controls["nephropathy_medication"].updateValueAndValidity();
      }
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
      this.thirdFormGroup.controls["blood_investigation_duration"].setValidators([Validators.required]);
      this.thirdFormGroup.controls["blood_investigation_duration"].updateValueAndValidity();
      this.thirdFormGroup.controls["blood_investigation_ppg"].setValidators([Validators.required]);
      this.thirdFormGroup.controls["blood_investigation_ppg"].updateValueAndValidity();
      this.thirdFormGroup.controls["blood_investigation_hba1c"].setValidators([Validators.required]);
      this.thirdFormGroup.controls["blood_investigation_hba1c"].updateValueAndValidity();
      this.thirdFormGroup.controls["blood_investigation_HPLC"].setValidators([Validators.required]);
      this.thirdFormGroup.controls["blood_investigation_HPLC"].updateValueAndValidity();

    }
    else {
      this.bloodInvestigation = 'no';
      this.bloodInvestigation = false;
      this.thirdFormGroup.controls["blood_investigation_duration"].clearValidators();
      this.thirdFormGroup.controls["blood_investigation_duration"].updateValueAndValidity();
      this.thirdFormGroup.controls["blood_investigation_ppg"].clearValidators();
      this.thirdFormGroup.controls["blood_investigation_ppg"].updateValueAndValidity();
      this.thirdFormGroup.controls["blood_investigation_hba1c"].clearValidators();
      this.thirdFormGroup.controls["blood_investigation_hba1c"].updateValueAndValidity();
      this.thirdFormGroup.controls["blood_investigation_HPLC"].clearValidators();
      this.thirdFormGroup.controls["blood_investigation_HPLC"].updateValueAndValidity();

    }
  }
  oncheked8(event: any, name: any) {
    if (event.checked == true) {
      this.human_premixedthirty = true
      if (event.checked == true && name == 'human_premixed_thirty') {

        this.fourthFormGroup.controls["human_premixed_thirty_breakfast"].setValidators([Validators.required]);
        this.fourthFormGroup.controls["human_premixed_thirty_breakfast"].updateValueAndValidity();
        this.fourthFormGroup.controls["human_premixed_thirty_lunch"].setValidators([Validators.required]);
        this.fourthFormGroup.controls["human_premixed_thirty_lunch"].updateValueAndValidity();
        this.fourthFormGroup.controls["human_premixed_thirty_dinner"].setValidators([Validators.required]);
        this.fourthFormGroup.controls["human_premixed_thirty_dinner"].updateValueAndValidity();
      }
    }
    else {
      this.human_premixedthirty = false
      this.fourthFormGroup.controls["human_premixed_thirty_breakfast"].clearValidators();
      this.fourthFormGroup.controls["human_premixed_thirty_breakfast"].updateValueAndValidity();
      this.fourthFormGroup.controls["human_premixed_thirty_lunch"].clearValidators();
      this.fourthFormGroup.controls["human_premixed_thirty_lunch"].updateValueAndValidity();
      this.fourthFormGroup.controls["human_premixed_thirty_dinner"].clearValidators();
      this.fourthFormGroup.controls["human_premixed_thirty_dinner"].updateValueAndValidity();
    }

  }
  oncheked9(event: any, name: any) {
    if (event.checked == true) {
      this.human_premixedfifty = true
      if (event.checked == true && name == 'human_premixed_fifty') {
        this.fourthFormGroup.controls["human_premixed_fifty_breakfast"].setValidators([Validators.required]);
        this.fourthFormGroup.controls["human_premixed_fifty_breakfast"].updateValueAndValidity();
        this.fourthFormGroup.controls["human_premixed_fifty_lunch"].setValidators([Validators.required]);
        this.fourthFormGroup.controls["human_premixed_fifty_lunch"].updateValueAndValidity();
        this.fourthFormGroup.controls["human_premixed_fifty_dinner"].setValidators([Validators.required]);
        this.fourthFormGroup.controls["human_premixed_fifty_dinner"].updateValueAndValidity();
      }
    }
    else {
      this.human_premixedfifty = false
      this.fourthFormGroup.controls["human_premixed_fifty_breakfast"].clearValidators();
      this.fourthFormGroup.controls["human_premixed_fifty_breakfast"].updateValueAndValidity();
      this.fourthFormGroup.controls["human_premixed_fifty_lunch"].clearValidators();
      this.fourthFormGroup.controls["human_premixed_fifty_lunch"].updateValueAndValidity();
      this.fourthFormGroup.controls["human_premixed_fifty_dinner"].clearValidators();
      this.fourthFormGroup.controls["human_premixed_fifty_dinner"].updateValueAndValidity();
    }
  }
  oncheked10(event: any) {
    if (event.checked == true) {
      this.regular = true
      this.fourthFormGroup.get('regular_insulin_breakfast').setValidators(Validators.required)
      this.fourthFormGroup.controls["regular_insulin_breakfast"].updateValueAndValidity();
      this.fourthFormGroup.get('regular_insulin_lunch').setValidators(Validators.required)
      this.fourthFormGroup.controls["regular_insulin_lunch"].updateValueAndValidity();
      this.fourthFormGroup.get('regular_insulin_dinner').setValidators(Validators.required)
      this.fourthFormGroup.controls["regular_insulin_dinner"].updateValueAndValidity();
    }
    else {
      this.regular = false
      this.fourthFormGroup.get('regular_insulin_breakfast').clearValidators();
      this.fourthFormGroup.controls["regular_insulin_breakfast"].updateValueAndValidity();
      this.fourthFormGroup.get('regular_insulin_lunch').clearValidators();
      this.fourthFormGroup.controls["regular_insulin_lunch"].updateValueAndValidity();
      this.fourthFormGroup.get('regular_insulin_dinner').clearValidators();
      this.fourthFormGroup.controls["regular_insulin_dinner"].updateValueAndValidity();
    }
  }
  oncheked11(event: any) {
    if (event.checked == true) {
      this.nph = true
      this.fourthFormGroup.get('nph_insulin_breakfast').setValidators(Validators.required)
      this.fourthFormGroup.controls["nph_insulin_breakfast"].updateValueAndValidity();
      this.fourthFormGroup.get('nph_insulin_lunch').setValidators(Validators.required)
      this.fourthFormGroup.controls["nph_insulin_lunch"].updateValueAndValidity();
      this.fourthFormGroup.get('nph_insulin_dinner').setValidators(Validators.required)
      this.fourthFormGroup.controls["nph_insulin_dinner"].updateValueAndValidity();
    }
    else {
      this.nph = false
      this.fourthFormGroup.get('nph_insulin_breakfast').clearValidators();
      this.fourthFormGroup.controls["nph_insulin_breakfast"].updateValueAndValidity();
      this.fourthFormGroup.get('nph_insulin_lunch').clearValidators();
      this.fourthFormGroup.controls["nph_insulin_lunch"].updateValueAndValidity();
      this.fourthFormGroup.get('nph_insulin_dinner').clearValidators();
      this.fourthFormGroup.controls["nph_insulin_dinner"].updateValueAndValidity();
    }
  }
  oncheked12(event: any) {
    if (event.checked == true) {
      this.glargine = true
      this.fourthFormGroup.get('glargine_insulin_breakfast').setValidators(Validators.required)
      this.fourthFormGroup.controls["glargine_insulin_breakfast"].updateValueAndValidity();
      this.fourthFormGroup.get('glargine_insulin_lunch').setValidators(Validators.required);
      this.fourthFormGroup.controls["glargine_insulin_lunch"].updateValueAndValidity();
      this.fourthFormGroup.get('glargine_insulin_dinner').setValidators(Validators.required)
      this.fourthFormGroup.controls["glargine_insulin_dinner"].updateValueAndValidity();
    }
    else {
      this.glargine = false
      this.fourthFormGroup.get('glargine_insulin_breakfast').clearValidators();
      this.fourthFormGroup.controls["glargine_insulin_breakfast"].updateValueAndValidity();
      this.fourthFormGroup.get('glargine_insulin_lunch').clearValidators();
      this.fourthFormGroup.controls["glargine_insulin_lunch"].updateValueAndValidity();
      this.fourthFormGroup.get('glargine_insulin_dinner').clearValidators();
      this.fourthFormGroup.controls["glargine_insulin_dinner"].updateValueAndValidity();
    }
  }
  bmicalc(){
    
    this.bmi =(this.firstFormGroup.value.weight/((this.firstFormGroup.value.height*this.firstFormGroup.value.height)/100))*100
   this.bmi = this.bmi.toFixed(2)
    console.log( this.bmi)
  }
  getCreatinine() {
    return Array.from({length:50 }, (_value , k) => ((k / 10)+0.1).toFixed(1) );

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
  weight(event:any){
  console.log(event)
  
  }
  height(event:any){
    console.log(event)
  
  }
  submit() {
     
    if(this.fourthFormGroup.valid){
      this.vascular.vascular_dignosis = this.secondFormGroup.value.vascular_dignosis;
      this.vascular.complication = this.secondFormGroup.value.complication;
      console.log('vascular', this.vascular)
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
      this.anti_diabetes.anti_diabetes_medication = (this.secondFormGroup.value.anti_diabetes_medication==true) ? this.secondFormGroup.value.anti_diabetes_medication : false;
      this.anti_diabetes.Sulphonylureas = (this.secondFormGroup.value.Sulphonylureas == true) ? this.secondFormGroup.value.Sulphonylureas : false;
      this.anti_diabetes.Meglitinides = (this.secondFormGroup.value.Meglitinides == true) ? this.secondFormGroup.value.Meglitinides : false;
      this.anti_diabetes.Thiazolidendiones = (this.secondFormGroup.value.Thiazolidendiones == true) ? this.secondFormGroup.value.Thiazolidendiones : false;
      this.anti_diabetes.GLP_Analogues = (this.secondFormGroup.value.GLP_Analogues == true) ? this.secondFormGroup.value.GLP_Analogues : false;
      this.anti_diabetes.DPP4_Inhibitors = (this.secondFormGroup.value.DPP4_Inhibitors == true) ? this.secondFormGroup.value.DPP4_Inhibitors : false ;
      this.anti_diabetes.DoubleDrugFixed = (this.secondFormGroup.value.DoubleDrugFixed == true) ? this.secondFormGroup.value.DoubleDrugFixed : false;
      this.anti_diabetes.TripleDrugFixed = (this.secondFormGroup.value.TripleDrugFixed == true ) ? this.secondFormGroup.value.TripleDrugFixed : false;
      console.log(this.anti_diabetes)
      this.blood_investigation_obj.blood_investigation = this.thirdFormGroup.value.blood_investigation
      this.blood_investigation_obj.blood_investigation_Creatinine = this.thirdFormGroup.value.blood_investigation_Creatinine
      this.blood_investigation_obj.blood_investigation_HPLC = this.thirdFormGroup.value.blood_investigation_HPLC
      this.blood_investigation_obj.blood_investigation_hba1c = this.thirdFormGroup.value.blood_investigation_hba1c
      this.blood_investigation_obj.blood_investigation_ppg = this.thirdFormGroup.value.blood_investigation_ppg
      this.blood_investigation_obj.blood_investigation_duration = this.thirdFormGroup.value.blood_investigation_duration;
      this.human_premixed_thirty_Obj.human_premixed_thirty = (this.fourthFormGroup.value.human_premixed_thirty==true) ?this.fourthFormGroup.value.human_premixed_thirty :false ;
      this.human_premixed_thirty_Obj.human_premixed_thirty_breakfast = this.fourthFormGroup.value.human_premixed_thirty_breakfast;
      this.human_premixed_thirty_Obj.human_premixed_thirty_lunch = this.fourthFormGroup.value.human_premixed_thirty_lunch;
      this.human_premixed_fifty_Obj.human_premixed_thirty_dinner = this.fourthFormGroup.value.human_premixed_thirty_dinner;
      this.human_premixed_fifty_Obj.human_premixed_fifty = (this.fourthFormGroup.value.human_premixed_fifty==true) ? this.fourthFormGroup.value.human_premixed_fifty:false;
      this.human_premixed_fifty_Obj.human_premixed_fifty_breakfast = this.fourthFormGroup.value.human_premixed_fifty_breakfast;
      this.human_premixed_fifty_Obj.human_premixed_fifty_lunch = this.fourthFormGroup.value.human_premixed_fifty_lunch;
      this.human_premixed_fifty_Obj.human_premixed_fifty_dinner = this.fourthFormGroup.value.human_premixed_fifty_dinner;
      this.regular_insulin_Obj.regular_insulin = (this.fourthFormGroup.value.regular_insulin == true) ? this.fourthFormGroup.value.regular_insulin:false ;
      this.regular_insulin_Obj.regular_insulin_breakfast = this.fourthFormGroup.value.regular_insulin_breakfast;
      this.regular_insulin_Obj.regular_insulin_lunch = this.fourthFormGroup.value.regular_insulin_lunch;
      this.regular_insulin_Obj.regular_insulin_dinner = this.fourthFormGroup.value.regular_insulin_dinner;
      this.nph_insulin_Obj.nph_insulin = (this.fourthFormGroup.value.nph_insulin == true) ? this.fourthFormGroup.value.nph_insulin : false;
      this.nph_insulin_Obj.nph_insulin_breakfast = this.fourthFormGroup.value.nph_insulin_breakfast;
      this.nph_insulin_Obj.nph_insulin_lunch = this.fourthFormGroup.value.nph_insulin_lunch;
      this.nph_insulin_Obj.nph_insulin_dinner = this.fourthFormGroup.value.nph_insulin_dinner;
      this.glargine_insulin_Obj.glargine_insulin = (this.fourthFormGroup.value.glargine_insulin==true) ?this.fourthFormGroup.value.glargine_insulin:false ;
      this.glargine_insulin_Obj.glargine_insulin_breakfast = this.fourthFormGroup.value.glargine_insulin_breakfast;
      this.glargine_insulin_Obj.glargine_insulin_lunch = this.fourthFormGroup.value.glargine_insulin_lunch;
      this.glargine_insulin_Obj.glargine_insulin_dinner = this.fourthFormGroup.value.glargine_insulin_dinner;
      const formData = new FormData()
      formData.append("user_id", JSON.parse(localStorage.getItem('userId')));
      formData.append("mobile",JSON.parse(localStorage.getItem('mobile')));
      formData.append("pen_serial", this.firstFormGroup.value.pen_serial);
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
      //formData.append("blood_pressure", this.secondFormGroup.value.blood_pressure);
      formData.append("systolic", this.secondFormGroup.value.systolic);
      formData.append(" diastolic", this.secondFormGroup.value.diastolic);
      formData.append("smoking", this.secondFormGroup.value.smoking);
      formData.append("alcohol", this.secondFormGroup.value.alcohol);
      formData.append("vascular_dignosis", JSON.stringify(this.vascular))
      formData.append("hypertension_dur", JSON.stringify(this.medical));
      formData.append("dyslipidemia_dur", JSON.stringify(this.dyslipidemiaArrray));
      formData.append("coronary_artery_dur", JSON.stringify(this.coronaryArray));
      formData.append("stroke_dur", JSON.stringify(this.strokeArray));
      formData.append("neuropathy_dur", JSON.stringify(this.neuropathyArray));
      formData.append("retinopathy_dur", JSON.stringify(this.retinopathyArray));
      formData.append("nephropathy_dur", JSON.stringify(this.nephropathyArray));
      formData.append("anti_diabetes_medication", JSON.stringify(this.anti_diabetes));
      formData.append("blood_investigation", JSON.stringify(this.blood_investigation_obj));
      formData.append("human_premixed_thirty", JSON.stringify(this.human_premixed_thirty_Obj));
      formData.append("human_premixed_fifty", JSON.stringify(this.human_premixed_fifty_Obj));
      formData.append("regular_insulin", JSON.stringify(this.regular_insulin_Obj));
      formData.append("nph_insulin", JSON.stringify(this.nph_insulin_Obj));
      formData.append("glargine_insulin", JSON.stringify(this.glargine_insulin_Obj));
      formData.append("medical_condition",this.secondFormGroup.value.medical_condition)
      console.log(formData)

      // this.firstFormGroup.reset();
      // this.secondFormGroup.reset();
      // this.thirdFormGroup.reset();
      //  this.fourthFormGroup.reset();
    
      this.service.addInitiate(formData).subscribe(res => {

        console.log(res)
       // this.router.navigateByUrl('/add-entry-process')


      })
    }
    else{
      console.log('not valid')
       this.fourthFormGroup.markAllAsTouched()
     }
    }

  }
