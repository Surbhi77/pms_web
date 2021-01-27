
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
 
  now2: any;
  now3: any;
  bmi:any;

 
  //nph: boolean;
  glargine: boolean;



  
  


  constructor( private _formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,private service:MainService) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      id: new FormControl('')
    })
   
    this.firstFormGroup = this._formBuilder.group({
     
      user_id: new FormControl(''),
    //  form_id:new FormControl(''),
      // mobile: new FormControl('89578898989'),
      pen_serial: new FormControl('',),
      date_visit: new FormControl(''),
      sex: new FormControl(''),
      status:new FormControl(''),
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
      // dose_insulin: new FormControl(''),
      // glargine_insulin: new FormControl(''),
      // glargine_insulin_breakfast: new FormControl(''),
     
      // glargine_insulin_dinner: new FormControl(''),
      // status: new FormControl(''),
      

    })
    this.fourthFormGroup =this._formBuilder.group({
      dose_insulin: new FormControl(''),
      glargine_insulin: new FormControl(''),
      glargine_insulin_breakfast: new FormControl(''),
      // glargine_insulin_lunch: new FormControl('', [Validators.required]),
      glargine_insulin_dinner: new FormControl(''),
      status: new FormControl(''),
      
      // thirdCtrl: ['gg', Validators.required],

    })
    var formData: any = new FormData();
    formData.append('id', this.route.snapshot.params.id);
    this.service.beginview(formData).subscribe((res:any) => {
      this.beginview =res.data
      console.log(res)
     this.antichecked=(this.beginview.anti_diabetes_medication)
     console.log(this.antichecked)
     this.garglineArray=(this.beginview.glargine_insulin)
     console.log( this.garglineArray)
      this.hypercheck=(this.beginview.hypertension_dur)
      console.log( this.hypercheck)
      this.dysncheck=(this.beginview.dyslipidemia_dur)
      console.log( this.dysncheck)
      this.coroncheck=(this.beginview.coronary_artery_dur)
      console.log(this.coroncheck)
      this.strokecheck=(this.beginview.stroke_dur)
      console.log(this.strokecheck)
      this.neuropathycheck=(this.beginview.neuropathy_dur)
      console.log(this.neuropathycheck)
      this.retinopathycheck=(this.beginview.retinopathy_dur)
      console.log(this.retinopathycheck)
       this.nephrocheck=(this.beginview.nephropathy_dur)
       console.log(this.nephrocheck)

     if(this.beginview.glargine_insulin){
       this.glargine_condition=true

     }
     else{
      this.glargine_condition=false
     }
     if(this.beginview.medical_condition=="yes"){
      this.medication=true

    }
    else{
     this.medication=false
    }
    if(this.hypercheck.hypertension_dur){
      this.hypertension=true

    }
    else{
     this.hypertension=false
    }
    if(this.dysncheck.dyslipidemia_dur){
      this.dyslipidemia=true

    }
    else{
     this.dyslipidemia=false
    }
    if(this.coroncheck.coronary_artery_dur){
      this.coronary=true

    }
    else{
     this.coronary=false
    }
    if(this.strokecheck.stroke_dur){
      this.stroke=true

    }
    else{
     this.stroke=false
    }
    if(this.neuropathycheck.neuropathy_dur){
      this.neuropathy=true

    }
    else{
     this.neuropathy=false
    }
    if(this.retinopathycheck.retinopathy_dur){
      this.retinopathy=true

    }
    else{
     this.retinopathy=false
    }
     if(this.nephrocheck.nephropathy_dur){
       this.nephropathy=true

     }
     else{
      this.nephropathy=false
     }

     this.secondFormGroup.patchValue({
    "hypertension_dur":this.hypercheck.hypertension_dur,
    "duration":this.hypercheck.duration,
    "medications":this.hypercheck.medications,
    "dyslipidemia_dur":this.dysncheck.dyslipidemia_dur,
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
      
      "glargine_insulin_dinner":this.garglineArray.glargine_insulin_dinner


     })
     this.thirdFormGroup.updateValueAndValidity();

    })
  }
  getvalue(num: number) {
    return Array.from({length: num}, (v, k) => k + 1);
  }
  getvalues(num: number) {
    return Array.from({length: num}, (v, k) => k + 1);
  }
  getvaluefast(num: number) {
    return Array.from({length: num}, (v, k) => k + 1);
  }
  getweight(num: number) {
    return Array.from({length: num}, (v, k) => k + 1);
  }
  getvaluediabetes(num: number) {
    return Array.from({length: num}, (v, k) => k + 1);
  }
  getmulvalues(num: number) {
    return Array.from({length: num}, (v, k) => k + 1);
  }
  getCreatinine() {
    //return Array.from({length:50 }, (_value , k) =>  k / 10);
    return Array.from({length:50 }, (_value , k=1) => ((k / 10)+0.1).toFixed(1) );

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
 submit(){
  var formData: any = new FormData();
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
  formData.append('id', this.route.snapshot.params.id);
  formData.append('pen_serial', this.firstFormGroup.value.pen_serial);
  formData.append('date_visit', this.now2);
  console.log(this.now2)
  formData.append("user_id",JSON.parse(localStorage.getItem('doctor_id')));
  console.log(localStorage.getItem('doctor_id'))
  //formData.append('user_id', '0');
  // console.log(this.now3)
  formData.append('age', this.firstFormGroup.value.age);
 formData.append('mobile', JSON.parse(localStorage.getItem('mobile')))
  formData.append('sex', this.firstFormGroup.value.sex);
  formData.append('weight', this.firstFormGroup.value.weight);
  formData.append('height', this.firstFormGroup.value.height);
  formData.append('bmi', this.bmi);
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
 //formData.append('form_id',this.firstFormGroup.value.form_id)
 formData.append('status','yes');
  formData.append('fasting_plasma', this.thirdFormGroup.value.fasting_plasma);
  formData.append('postprandial_plasma', this.thirdFormGroup.value.postprandial_plasma);
  formData.append('glycosylated', this.thirdFormGroup.value.glycosylated);
  formData.append('hbac_lab', this.thirdFormGroup.value.hbac_lab);
  formData.append('s_creatinine', this.thirdFormGroup.value.s_creatinine);
  formData.append('dose_insulin', this.thirdFormGroup.value.dose_insulin);
  console.log(this.thirdFormGroup.value.dose_insulin);
  formData.append('glargine_insulin', JSON.stringify(this.glargineinsulinobj));
   formData.append('anti_diabetes_medication',JSON.stringify(this.anti_diabetes_medication));
   this.service.postAddBegin(formData).subscribe(res => {
      console.log(res)
    })


 }
}
