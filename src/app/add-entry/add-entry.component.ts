import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MainService } from '../main.service';

@Component({ 
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  title = 'Add Entry';

  firstFormGroup: FormGroup; 
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
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
  vascular:any = {};
  medical:any={};
  dyslipidemiaArrray:any={}
  coronaryArray:any={}
  strokeArray:any={}
  neuropathyArray:any={}
  retinopathyArray:any={};
  nephropathyArray:any={};
  anti_diabetes:any = {};
  blood_investigation_obj:any = {}
  //isEditable = false;

  constructor(private _formBuilder: FormBuilder, private service:MainService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      user_id: new FormControl('123'),
      mobile: new FormControl('8957889'),
      pen_serial: new FormControl(''),
      date_visit:new FormControl(''),
      sex:new FormControl(''),
      date_of_birth:new FormControl(''),  
      weight:new FormControl(''),
      height:new FormControl(''),
      bmi:new FormControl(''),
      age:new FormControl(''),
      education:new FormControl(''),
      employment:new FormControl('')
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      duration_diabetes:new FormControl(''),
      treated_diabetes:new FormControl(''),
      age_at_diabetes:new FormControl(''),
      family_diabetes:new FormControl(''),
      hypertension:new FormControl(''),
      duration_hypertension:new FormControl(''),
      blood_pressure:new FormControl(''),
      systolic:new FormControl(''),
      diastolic:new FormControl(''),
      smoking:new FormControl(''),
      alcohol:new FormControl(''),
      vascular_dignosis:new FormControl(''),
      hypertension_dur:new FormControl(''),
      dyslipidemia_dur:new FormControl(''),
      coronary_artery_dur:new FormControl(''),
      stroke_dur:new FormControl(''),
      neuropathy_dur:new FormControl(''),
      retinopathy_dur:new FormControl(''),
      nephropathy_dur:new FormControl(''),
      anti_diabetes_medication:new FormControl(''),
      medical_condition:new FormControl(''),
      Sulphonylureas:new FormControl(''),
      Meglitinides:new FormControl(''),
      Thiazolidendiones:new FormControl(''),
      GLP_Analogues:new FormControl(''),
      DPP4_Inhibitors:new FormControl(''),
      DoubleDrugFixed:new FormControl(''),
      TripleDrugFixed:new FormControl(''),
      complication:new FormControl(''),
      duration:new FormControl(''),
      medications:new FormControl(''),
      dyslipidemia_duration:new FormControl(''),
      dyslipidemia_medication:new FormControl('') ,
      coronary_artery_duration:new FormControl(''),
      coronary_artery_medication:new FormControl(''),
      stroke_duration:new FormControl(''),
      stroke_medication:new FormControl(''),
      neuropathy_duration:new FormControl(''),
      neuropathy_medication:new FormControl(''),
      retinopathy_duration:new FormControl(''),
      retinopathy_medication:new FormControl(''),
      nephropathy_duration:new FormControl(''),
      nephropathy_medication:new FormControl(''),
      
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
      blood_investigation:new FormControl(''),
      fourty_iu_vial:new FormControl(''),
      hundred_iu_vial:new FormControl(''),
      refill:new FormControl(''),
      human_premixed_thirty:new FormControl(''),
      human_premixed_fifty:new FormControl(''),
      regular_insulin:new FormControl(''),
      nph_insulin:new FormControl(''),
      glargine_insulin:new FormControl(''),
      blood_investigation_Creatinine:new FormControl(''),
      blood_investigation_HPLC:new FormControl(''),
      blood_investigation_hba1c:new FormControl(''),
      blood_investigation_ppgnew:new FormControl(''),
      blood_investigation_durationnew:new FormControl(''),
     
    })
  }
  onclick(event:any){
    console.log(event)
    if(event.value == 'yes'){
      console.log(event.value)
      this.complications='yes';
      this.complications=true;
    }
    else{
      this.complications='no';
      this.complications=false;
        
    }  
  }
  onchange(event:any){
    
    if( event.value == 'yes'){
      this.medication='yes';
     
      this.medication = true
    
    }
    else{
      this.medication='no';  
      event.value = 'no'
      this.medication = false
    }
   
  }
  oncheked(event:any){
    if(event.checked== true ){   
      this.hypertension = true
    
    }
    else{  
      this.hypertension = false
    }  
  }
  oncheked2(event:any){
    if(event.checked== true ){  
      this.dyslipidemia = true
    
    }
    else{      
      this.dyslipidemia = false
    }
   
  }
  oncheked3(event:any){
    if(event.checked == true ){
      this.coronary = true
    }
    else{
      this.coronary = false
    }
   
  }
  oncheked4(event:any){
    if(event.checked == true ){ 
      this.stroke = true
    }
    else{
      this.stroke  = false
    } 
  }
  oncheked5(event:any){
    if(event.checked== true ){
       this.neuropathy = true
    }
    else{
      this.neuropathy  = false
    }
   
  }
  oncheked6(event:any){
    if(event.checked== true ){
      this.retinopathy = true
    }
    else{
      this.retinopathy  = false
    }   
  }
  oncheked7(event:any){
    if(event.checked== true ){
      this.nephropathy = true  
    }
    else{
      this.nephropathy  = false
    }
  }
  bloodinvestigate(event:any){
    console.log(event.value)
    if(event.value == 'yes'){
      this.bloodInvestigation='yes';
      this.bloodInvestigation=true;
    }
    else{
      this.bloodInvestigation='no';
      this.bloodInvestigation=false;
       
    } 
  }
  oncheked8(event:any){
    if(event.checked== true ){
      this.human_premixedthirty = true  
    }
    else{
      this.human_premixedthirty  = false
    }
   
  }
  oncheked9(event:any){
    if(event.checked== true ){
      this.human_premixedfifty = true  
    }
    else{
      this.human_premixedfifty  = false
    }  
  }
  oncheked10(event:any){
    if(event.checked== true ){
      this.regular = true   
    }
    else{
      this.regular  = false
    }  
  }
  oncheked11(event:any){
    if(event.checked== true ){
      this.nph = true  
    }
    else{
      this.nph  = false
    }  
  }
  oncheked12(event:any){
    if(event.checked== true ){
      this.glargine = true  
    }
    else{
      this.glargine  = false
    }   
  }
  submit(){
    this.vascular.vascular_dignosis = this.secondFormGroup.value.vascular_dignosis;
      this.vascular.complication = this.secondFormGroup.value.complication;
       console.log('vascular',this.vascular)
      this.medical.hypertension_dur = this.secondFormGroup.value.hypertension_dur;
      this.medical.duration_hypertension= this.secondFormGroup.value.duration;
      this.medical.hypertension_medi= this.secondFormGroup.value.medications;
      
      console.log('this.medical',this.medical);
      
      this.dyslipidemiaArrray.dyslipidemia_dur = this.secondFormGroup.value.dyslipidemia_dur;
      this.dyslipidemiaArrray.dyslipidemia_duration =this.secondFormGroup.value.dyslipidemia_duration;
      this.dyslipidemiaArrray.dyslipidemia_medication = this.secondFormGroup.value.dyslipidemia_medication;
      console.log(this.dyslipidemiaArrray)
      this.coronaryArray.coronary_artery_dur = this.secondFormGroup.value.coronary_artery_dur;
      this.coronaryArray.coronary_artery_duration = this.secondFormGroup.value.coronary_artery_duration;
      this.coronaryArray.coronary_artery_medication = this.secondFormGroup.value.coronary_artery_medication;
      console.log(this.coronaryArray);
      this.strokeArray.stroke_dur = this.secondFormGroup.value.stroke_dur;
      this.strokeArray.stroke_duration = this.secondFormGroup.value.stroke_duration;
      this.strokeArray.stroke_medication = this.secondFormGroup.value.stroke_medication;
      console.log(this.strokeArray);
      this.neuropathyArray.neuropathy_dur = this.secondFormGroup.value.neuropathy_dur;
      this.neuropathyArray.neuropathy_duration = this.secondFormGroup.value.neuropathy_duration;
      this.neuropathyArray.neuropathy_medication = this.secondFormGroup.value.neuropathy_medication;
      console.log(this.neuropathyArray);
      this.retinopathyArray.retinopathy_dur = this.secondFormGroup.value.retinopathy_dur;
      this.retinopathyArray.retinopathy_duration = this.secondFormGroup.value.retinopathy_duration;
      this.retinopathyArray.retinopathy_medication = this.secondFormGroup.value.retinopathy_medication;
      console.log(this.retinopathyArray);
      this.nephropathyArray.nephropathy_dur=this.secondFormGroup.value.nephropathy_dur;
      this.nephropathyArray.nephropathy_duration=this.secondFormGroup.value.nephropathy_duration;
      this.nephropathyArray.nephropathy_medication=this.secondFormGroup.value.nephropathy_medication;
      console.log(this.nephropathyArray);
      this.anti_diabetes.anti_diabetes_medication = this.secondFormGroup.value.anti_diabetes_medication
      this.anti_diabetes.Sulphonylureas = this.secondFormGroup.value.Sulphonylureas;
      this.anti_diabetes.Meglitinides = this.secondFormGroup.value.Meglitinides;
      this.anti_diabetes.Thiazolidendiones = this.secondFormGroup.value.Thiazolidendiones;
      this.anti_diabetes.GLP_Analogues = this.secondFormGroup.value.GLP_Analogues;
      this.anti_diabetes.DPP4_Inhibitors = this.secondFormGroup.value.DPP4_Inhibitors;
      this.anti_diabetes.DoubleDrugFixed = this.anti_diabetes.DoubleDrugFixed
      this.anti_diabetes.TripleDrugFixed = this.anti_diabetes.TripleDrugFixed
      console.log(this.anti_diabetes)
      this.blood_investigation_obj.blood_investigation =  this.thirdFormGroup.value.blood_investigation
      this.blood_investigation_obj. blood_investigation_Creatinine =  this.thirdFormGroup.value. blood_investigation_Creatinine
      this.blood_investigation_obj. blood_investigation_HPLC =  this.thirdFormGroup.value. blood_investigation_HPLC
      this.blood_investigation_obj. blood_investigation_hba1c =  this.thirdFormGroup.value. blood_investigation_hba1c
      this.blood_investigation_obj. blood_investigation_ppgnew =  this.thirdFormGroup.value. blood_investigation_ppgnew
      this.blood_investigation_obj. blood_investigation_durationnew =  this.thirdFormGroup.value. blood_investigation_durationnew
      const formData = new FormData()
      // var obj:any = [{'vascular_dignosis':this.initiateForm.value.vascular_dignosis,'complication':this.initiateForm.value.complication}]; 
     formData.append(" user_id", this.firstFormGroup.value.user_id);
     formData.append("mobile", this.firstFormGroup.value.mobile);
     formData.append("pen_serial", this.firstFormGroup.value.pen_serial);
     formData.append("sex", this.firstFormGroup.value.sex);
     formData.append("date_of_birth", this.firstFormGroup.value.date_of_birth);
     formData.append("date_visit", this.firstFormGroup.value.date_visit);
     formData.append("age", this.firstFormGroup.value.age);
     formData.append("weight", this.firstFormGroup.value.weight);
     formData.append("height", this.firstFormGroup.value.height);
     formData.append("bmi", this.firstFormGroup.value.bmi);
     formData.append("education", this.firstFormGroup.value.education);
     formData.append("employment", this.firstFormGroup.value.employment);
     formData.append("duration_diabetes", this.secondFormGroup.value.duration_diabetes);
     formData.append("treated_diabetes", this.secondFormGroup.value.treated_diabetes);
     formData.append("age_at_diabetes", this.secondFormGroup.value.age_at_diabetes);
     formData.append("family_diabetes", this.secondFormGroup.value.family_diabetes);
     formData.append("hypertension", this.secondFormGroup.value.hypertension);
     formData.append("duration_hypertension", this.secondFormGroup.value.duration_hypertension);
     formData.append("blood_pressure", this.secondFormGroup.value.blood_pressure);
     formData.append("systolic",this.secondFormGroup.value.systolic );
     formData.append(" diastolic",this.secondFormGroup.value.diastolic);
     formData.append("smoking", this.secondFormGroup.value.smoking);
     formData.append("alcohol", this.secondFormGroup.value.alcohol);
     formData.append("vascular_dignosis",JSON.stringify(this.vascular))
     formData.append("hypertension_dur", JSON.stringify(this.medical));
     formData.append("dyslipidemia_dur", JSON.stringify(this.dyslipidemiaArrray));
     formData.append("coronary_artery_dur", JSON.stringify(this.coronaryArray));
     formData.append("stroke_dur", JSON.stringify(this.strokeArray));
     formData.append("neuropathy_dur", JSON.stringify(this.neuropathyArray));
     formData.append("retinopathy_dur",JSON.stringify(this.retinopathyArray));
     formData.append("nephropathy_dur", JSON.stringify(this.nephropathyArray));
     formData.append("anti_diabetes_medication", JSON.stringify(this.anti_diabetes));
     formData.append("blood_investigation", JSON.stringify(this.blood_investigation_obj));
     formData.append("fourty_iu_vial", this.thirdFormGroup.value.fourty_iu_vial);
     formData.append("hundred_iu_vial", this.thirdFormGroup.value.hundred_iu_vial);
     formData.append("refill", this.thirdFormGroup.value.refill);
     formData.append("human_premixed_thirty", this.thirdFormGroup.value.human_premixed_thirty);
     formData.append("human_premixed_fifty", this.thirdFormGroup.value.human_premixed_fifty);
     formData.append("regular_insulin", this.thirdFormGroup.value.regular_insulin);
     formData.append("nph_insulin", this.thirdFormGroup.value.nph_insulin);
     formData.append("glargine_insulin", this.thirdFormGroup.value.glargine_insulin);
     console.log(formData)

    
     this.service.addInitiate(formData).subscribe(res=>{
     
     console.log(res)
     
      })

         
      }
  }
 


  

