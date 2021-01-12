import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  title = 'Begin Entry';
  firstFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isLinear = false;
  secondFormGroup: FormGroup;
  //complications: any;
  medication: any;
  hypertension: any;
  dyslipidemia: any;
  stroke: any;
  neuropathy: any;
  retinopathy: any;
  nephropathy: any;
  coronary: any;
  anti_diabetes_medication:any={};
  Complications:any={};
  dyslipidemiaobj:any={};
  coronaryartery:any={};
  strokeobj:any={};
  neuropathyobj:any={};
  retinopathyobj:any={};
  nephropathyobj:any={};
  glargineinsulinobj:any={};

  glargine_condition: boolean;
  //nph: boolean;
  glargine: boolean;

  constructor(private _formBuilder: FormBuilder, private service: MainService) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      user_id: new FormControl('12345'),
      // mobile: new FormControl('89578898989'),
      pen_serial: new FormControl(''),
      date_visit: new FormControl(''),
      sex: new FormControl(''),
      date_of_birth: new FormControl(''),
      weight: new FormControl(''),
      height: new FormControl(''),
      bmi: new FormControl(''),
      age: new FormControl(''),
      education: new FormControl(''),
      employment: new FormControl('')
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
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
     
      fasting_plasma: new FormControl(''),
      postprandial_plasma: new FormControl(''),
      glycosylated: new FormControl(''),
      hbac_lab: new FormControl(''),
      s_creatinine: new FormControl(''),
      dose_insulin: new FormControl(''),
      glargine_insulin: new FormControl(''),
      glargine_insulin_breakfast:new FormControl(''),
      glargine_insulin_lunch:new FormControl(''),
      glargine_insulin_dinner:new FormControl(''),
      thirdCtrl: ['', Validators.required],

    })
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
      this.hypertension = true

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
  oncheked3(event: any) {
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
  oncheked5(event: any) {
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

  oncheked10(event: any) {
    if (event.checked == true) {
      this.glargine_condition = true
    }
    else {
      this.glargine_condition = false
    }
  }
  submit() {
    var formData: any = new FormData();

    this.anti_diabetes_medication.Biguanides= (this.secondFormGroup.value.Biguanides==true)?this.secondFormGroup.value.Biguanides:false;
    this.anti_diabetes_medication.Sulphonylureas= (this.secondFormGroup.value.Sulphonylureas==true)?this.secondFormGroup.value.Sulphonylureas:false;
    this.anti_diabetes_medication.Meglitinides= (this.secondFormGroup.value.Meglitinides==true)?this.secondFormGroup.value.Meglitinides:false;
    this.anti_diabetes_medication.Thiazolidendiones= (this.secondFormGroup.value.Thiazolidendiones==true)?this.secondFormGroup.value.Thiazolidendiones:false;
    this.anti_diabetes_medication.GLP_Analogues= (this.secondFormGroup.value.GLP_Analogues==true)?this.secondFormGroup.value.GLP_Analogues:false;
    this.anti_diabetes_medication.DPP4_Inhibitors= (this.secondFormGroup.value.DPP4_Inhibitors==true)?this.secondFormGroup.value.DPP4_Inhibitors:false;
    this.anti_diabetes_medication.DoubleDrugFixed= (this.secondFormGroup.value.DoubleDrugFixed==true)?this.secondFormGroup.value.DoubleDrugFixed:false;
    this.anti_diabetes_medication.TripleDrugFixed= (this.secondFormGroup.value.TripleDrugFixed==true)?this.secondFormGroup.value.TripleDrugFixed:false;
    this.Complications.hypertension_dur=this.secondFormGroup.value.hypertension_dur;
    this.Complications.duration=this.secondFormGroup.value.duration;
    this.Complications.medications=this.secondFormGroup.value.medications;
    this.dyslipidemiaobj.dyslipidemia_dur=this.secondFormGroup.value.dyslipidemia_dur;
    this.dyslipidemiaobj.duration=this.secondFormGroup.value.duration;
    this.dyslipidemiaobj.medications=this.secondFormGroup.value.medications;
    this.coronaryartery.coronary_artery_dur=this.secondFormGroup.value.coronary_artery_dur;
    this.coronaryartery.duration=this.secondFormGroup.value.duration;
    this.coronaryartery.medications=this.secondFormGroup.value.medications;
    this.strokeobj.stroke_dur=this.secondFormGroup.value.stroke_dur;
    this.strokeobj.duration=this.secondFormGroup.value.duration;
    this.strokeobj.medications=this.secondFormGroup.value.medications;
    this.neuropathyobj.neuropathy_dur=this.secondFormGroup.value.neuropathy_dur;
    this.neuropathyobj.duration=this.secondFormGroup.value.duration;
    this.neuropathyobj.medications=this.secondFormGroup.value.medications;
    this.retinopathyobj.retinopathy_dur=this.secondFormGroup.value.retinopathy_dur;
    this.retinopathyobj.duration=this.secondFormGroup.value.duration;
    this.retinopathyobj.medications=this.secondFormGroup.value.medications;
    this.nephropathyobj.nephropathy_dur=this.secondFormGroup.value.nephropathy_dur;
    this.nephropathyobj.duration=this.secondFormGroup.value.duration;
    this.nephropathyobj.medications=this.secondFormGroup.value.medications;
     this.glargineinsulinobj.glargine_insulin=this.thirdFormGroup.value.glargine_insulin;

     this.glargineinsulinobj.glargine_insulin_breakfast=this.thirdFormGroup.value.glargine_insulin_breakfast;
     console.log( this.glargineinsulinobj.breakfast)
     this.glargineinsulinobj.glargine_insulin_lunch=this.thirdFormGroup.value.glargine_insulin_lunch;
    this.glargineinsulinobj.glargine_insulin_dinner=this.thirdFormGroup.value.glargine_insulin_dinner;
    console.log(this.glargineinsulinobj)

    console.log(this.Complications)


    console.log('this.anti_diabetes_medication',this.anti_diabetes_medication)
    formData.append('pen_serial', this.firstFormGroup.value.pen_serial);
    formData.append('date_visit', this.firstFormGroup.value.date_visit);
    formData.append('sex', this.firstFormGroup.value.sex);
    formData.append('weight', this.firstFormGroup.value.weight);
    formData.append('height', this.firstFormGroup.value.height);
    formData.append('bmi', this.firstFormGroup.value.bmi);
    formData.append('education', this.firstFormGroup.value.education);
    formData.append('employment', this.firstFormGroup.value.employment);
     //second form
    formData.append('duration_diabetes', this.secondFormGroup.value.duration_diabetes);
    formData.append('treated_diabetes', this.secondFormGroup.value.treated_diabetes);
    formData.append('family_diabetes', this.secondFormGroup.value.family_diabetes);
    formData.append('hypertension', this.secondFormGroup.value.hypertension);
    //formData.append('dyslipidemia_dur', this.secondFormGroup.value.dyslipidemia_dur);
    formData.append('blood_pressure', this.secondFormGroup.value.blood_pressure);
    formData.append('smoking', this.secondFormGroup.value.smoking);
    formData.append('alcohol', this.secondFormGroup.value.alcohol);
    formData.append('hypertension_dur', JSON.stringify(this.Complications));
    formData.append('dyslipidemia_dur', JSON.stringify(this.dyslipidemiaobj));
    formData.append('coronary_artery_dur', JSON.stringify(this.coronaryartery));
    formData.append('stroke_dur', JSON.stringify(this.strokeobj));
    formData.append('neuropathy_dur', JSON.stringify(this.neuropathyobj));
    formData.append('retinopathy_dur', JSON.stringify(this.retinopathyobj));
    formData.append('nephropathy_dur', JSON.stringify(this.nephropathyobj));
    formData.append('glargine_insulin',JSON.stringify(this.glargineinsulinobj));

    // formData.append('stroke_dur', this.secondFormGroup.value.stroke_dur);
    // formData.append('neuropathy_dur', this.secondFormGroup.value.neuropathy_dur);
    // formData.append('retinopathy_dur', this.secondFormGroup.value.retinopathy_dur);
    // formData.append('nephropathy_dur', this.secondFormGroup.value.nephropathy_dur);
    // formData.append('anti_diabetes_medication',JSON.stringify(this.anti_diabetes_medication));
    
    this.service.postAddBegin(formData).subscribe(res => {
      //this.login =res
     
      console.log(res)
    })

  }
}
