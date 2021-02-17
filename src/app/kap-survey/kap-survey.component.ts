import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MainService } from '../main.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { RatePopupComponent } from '../rate-popup/rate-popup.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-kap-survey',
  templateUrl: './kap-survey.component.html',
  styleUrls: ['./kap-survey.component.css']
})
export class KapSurveyComponent implements OnInit {
  title = 'KAP Survey';
  checklimiterro: boolean = false;
  checkmulti: boolean = false;
  gridsize: number = 30;
  impacts: any = [];
  patients: any = [];

  count: number = 0;
  isChecked = false;
  oneTotwo: boolean = false;
  threeTofive: boolean = false;
  fiveyears: boolean = false;
  sum:any;

  updateSetting(event) {
    this.gridsize = event.value;
    this.sum = this.forthFormGroup.value.six_months+this.forthFormGroup.value.one_to_two_year+this.forthFormGroup.value.three_to_five_year+this.forthFormGroup.value.five_years;
    this.forthFormGroup.patchValue({
      'six_months':this.forthFormGroup.value.six_months
    })
    this.forthFormGroup.updateValueAndValidity(); 
 
  }
  grid: number = 30;
  updateSet(event) {
    this.grid = event.value;
    this.sum = this.forthFormGroup.value.six_months+this.forthFormGroup.value.one_to_two_year+this.forthFormGroup.value.three_to_five_year+this.forthFormGroup.value.five_years;
    this.forthFormGroup.patchValue({
      'one_to_two_year':this.forthFormGroup.value.one_to_two_year
    })
    this.forthFormGroup.updateValueAndValidity(); 
   
  
  }
  value: number = 30;
  updatevalue(event) {
    this.value = event.value;
    this.sum = this.forthFormGroup.value.six_months+this.forthFormGroup.value.one_to_two_year+this.forthFormGroup.value.three_to_five_year+this.forthFormGroup.value.five_years;
    this.forthFormGroup.patchValue({
      'three_to_five_year':this.forthFormGroup.value.three_to_five_year
    })
    this.forthFormGroup.updateValueAndValidity(); 
   
    
  }
  setvalue: number = 30;
  setvalues(event) {
    this.setvalue = event.value;
    this.sum = this.forthFormGroup.value.six_months+this.forthFormGroup.value.one_to_two_year+this.forthFormGroup.value.three_to_five_year+this.forthFormGroup.value.five_years;
    this.forthFormGroup.patchValue({
      'five_years':this.forthFormGroup.value.five_years
    })
    this.forthFormGroup.updateValueAndValidity(); 
   
  }

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  kdpsurvey: any;
  //insulin_to_tdmpatients:{};
  // people_with_tdm:{};
  people_with_tdm: any = {};
  insulin_to_tdmpatients: any = {};
  reluctant_insulin: any = [];
  fear_injection: any = [];




  constructor(private _formBuilder: FormBuilder, private service: MainService,private router:Router, public dialog: MatDialog, private toastr: ToastrService ) { }

  ngOnInit() {

    if(localStorage.getItem("kdp_survey") == "yes"){
      this.router.navigateByUrl('/dashboard')
    }

    this.firstFormGroup = this._formBuilder.group({
      user_id: new FormControl(''),
      delay_insulin: new FormControl('', [Validators.required]),
      insulin_tdm: new FormControl('', [Validators.required]),
      insulin_regardless: new FormControl('', [Validators.required]),
      benifit_insulin: new FormControl('', [Validators.required]),
      receiving_insulin: new FormControl('', [Validators.required]),
      success_insulin: new FormControl('', [Validators.required]),
      notcomplicated_insulin: new FormControl('', [Validators.required]),
      insulin_therapy: new FormControl('', [Validators.required]),
      firstCtrl: ['hf', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      aggreetype: new FormControl(''),
      secondCtrl: ['gh', Validators.required]
    });

    this.thirdFormGroup = this._formBuilder.group({
      agreedropped: new FormControl(''),
      thirdformCtrl: ['yhujy', Validators.required]
    });

    this.forthFormGroup = this._formBuilder.group({
        six_months: new FormControl('', [Validators.required]),
        one_to_two_year: new FormControl(''),
        three_to_five_year: new FormControl(''),
        five_years: new FormControl(''),
        people_with_tdm: new FormControl('',[Validators.required]),
        Beta: new FormControl(''),
        role: new FormControl(''),
        Reducing: new FormControl(''),
        risk: new FormControl(''),
        Micro: new FormControl(''),
        Reduce: new FormControl(''),
        Neuropathy: new FormControl(''),
        CIMT: new FormControl(''),
        Comorbid: new FormControl(''),
        High: new FormControl(''),
        Infections: new FormControl(''),
        HighA1c: new FormControl(''),
        forthform: ['', Validators.required],
        insulin_to_tdmpatients:new FormControl('',[Validators.required])
    });
  }




  reluctance = [
    '	Are reluctant to start it ',
    '	Do not adhere to their appointments and treatment regimen ',
    '	Do not adhere to their self-monitoring of blood glucose',
    '	Are from a low socioeconomic status',
    '	Are ≥75 years of age because of the risk of hypoglycemia',
    '	Have excess weight (BMI ≥ 35) because of the risk for weight gain ',
    '	Have cardiovascular diseases ',
    '	I do not follow the medical updates on insulin therapy ',
    '	I do not have enough staff for patient education and training'


  ];
  Physician = [
    " Fear of the Injection",
    " Fear of hypoglycemia",
    " Fear of weight gain",
    " Cost of insulin",
    " Skepticism about Insulin efficacy",
    " Perception of the initiation of insulin as a personal failure in controlling T2DM ",
    " Perception of the initiation of insulin as worsening of the disease",
    " Worry about their ability to manage insulin therapy and to adhere to physicians recommendations ",
    " Perception of the initiation of insulin therapy as a threat to their quality of life"
  ]

  drop(event: CdkDragDrop<string[]>) {
    var list = this.reluctance.toString()
    moveItemInArray(this.reluctance, event.previousIndex, event.currentIndex);

    this.reluctant_insulin = this.reluctance;
  }

  impactChange(event, name) {
    console.log(event)
    if (event.checked) {
      this.impacts.push(name)
    } else {
      let i = this.impacts.indexOf(name);
      this.impacts.splice(i, 1)
    }
    if (this.impacts.length>2) {
      this.checkmulti = false
      this.forthFormGroup.patchValue({
        'people_with_tdm': this.impacts.toString()
      });
      this.forthFormGroup.updateValueAndValidity()
    } else {
      this.checkmulti = true;
      this.forthFormGroup.patchValue({
        'people_with_tdm': ''
      })

    }
    // if (this.impacts.length > 2) {
    //   this.checkmulti = false
    //   console.log("check box ")
    // } else {
    //   this.checkmulti = true;

    // }
  }


  tdmpatientsChange(event, name) {
    console.log(event)

    if (event.checked){
      this.patients.push(name)
    } else {
      let i = this.patients.indexOf(name);
      this.patients.splice(i, 1)

    }


    if (this.patients.length > 1) {
      this.checklimiterro = false
      this.forthFormGroup.patchValue({
        'insulin_to_tdmpatients': this.patients.toString()
      });
      this.forthFormGroup.updateValueAndValidity()
    } else {
      this.checklimiterro = true;
      this.forthFormGroup.patchValue({
        'insulin_to_tdmpatients': ''
      })
    }
    // if (this.patients.length > 1) {
    //   this.checklimiterro = false
      
    //   console.log("check box ")
    // } else {
    //   this.checklimiterro = true;
    // }
  }
  dropped(event: CdkDragDrop<string[]>) {
    console.log(event)
    moveItemInArray(this.Physician, event.previousIndex, event.currentIndex)
    this.fear_injection = this.Physician;
  }

  get g() {
    return this.firstFormGroup.controls;
  }
  get f() {
    return this.forthFormGroup.controls;


  }
  submitFirst() {
    if (this.firstFormGroup.valid ) {
      this.isLinear = false

    } else {
      this.isLinear = true
      this.firstFormGroup.markAllAsTouched()
    }
  }
  popup1(){
    this.dialog.open(RatePopupComponent, {
      width: '40%'}); 

  }
  

  submit() {
    this.sum = this.forthFormGroup.value.six_months+this.forthFormGroup.value.one_to_two_year+this.forthFormGroup.value.three_to_five_year+this.forthFormGroup.value.five_years;
   
   
    var formData: any = new FormData();
    if (this.thirdFormGroup.valid && this.patients.length == 2 && this.impacts.length == 3 && this.sum ==100) {
     
     
        console.log(this.firstFormGroup.value)
        this.people_with_tdm.Beta = (this.forthFormGroup.value.Beta == true) ? this.forthFormGroup.value.Beta : false;
        this.people_with_tdm.role = (this.forthFormGroup.value.role == true) ? this.forthFormGroup.value.role : false;
        this.people_with_tdm.Reducing = (this.forthFormGroup.value.Reducing == true) ? this.forthFormGroup.value.Reducing : false;
        this.people_with_tdm.risk = (this.forthFormGroup.value.risk == true) ? this.forthFormGroup.value.risk : false;
        this.people_with_tdm.Micro = (this.forthFormGroup.value.Micro == true) ? this.forthFormGroup.value.Micro : false;
        this.people_with_tdm.Reduce = (this.forthFormGroup.value.Reduce == true) ? this.forthFormGroup.value.Reduce : false;
        this.people_with_tdm.Neuropathy = (this.forthFormGroup.value.Neuropathy == true) ? this.forthFormGroup.value.Neuropathy : false;
        this.people_with_tdm.CIMT = (this.forthFormGroup.value.CIMT == true) ? this.forthFormGroup.value.CIMT : false;
        //
        this.insulin_to_tdmpatients.Comorbid = (this.forthFormGroup.value.Comorbid == true) ? this.forthFormGroup.value.Comorbid : false;
        this.insulin_to_tdmpatients.High = (this.forthFormGroup.value.High == true) ? this.forthFormGroup.value.High : false;
        this.insulin_to_tdmpatients.Infections = (this.forthFormGroup.value.Infections == true) ? this.forthFormGroup.value.Infections : false;
        this.insulin_to_tdmpatients.HighA1c = (this.forthFormGroup.value.HighA1c == true) ? this.forthFormGroup.value.HighA1c : false;

        console.log('this.insulin_to_tdmpatients', this.insulin_to_tdmpatients)
        console.log('this.people_with_tdm', this.people_with_tdm)


        //firstform
        formData.append('delay_insulin', this.firstFormGroup.value.delay_insulin);
        formData.append('insulin_tdm', this.firstFormGroup.value.insulin_tdm);
        formData.append('insulin_regardless', this.firstFormGroup.value.insulin_regardless);
        formData.append('benifit_insulin', this.firstFormGroup.value.benifit_insulin);
        formData.append('receiving_insulin', this.firstFormGroup.value.receiving_insulin);
        formData.append('success_insulin', this.firstFormGroup.value.success_insulin);
        formData.append('notcomplicated_insulin', this.firstFormGroup.value.notcomplicated_insulin);
        formData.append('insulin_therapy', this.firstFormGroup.value.insulin_therapy);
        formData.append('user_id', JSON.parse(localStorage.getItem('doctor_id')));

        //secondform
        if (this.reluctant_insulin.length == 0) {
          this.reluctant_insulin = this.reluctance;
        }
        formData.append('reluctant_insulin', this.reluctant_insulin);
        console.log(this.reluctant_insulin);

        //thirdform
        if (this.fear_injection.length == 0) {
          this.fear_injection = this.Physician;
        }
        formData.append('fear_injection', this.fear_injection);
        console.log(this.fear_injection);
        formData.append('six_months', this.forthFormGroup.value.six_months);
        console.log(this.forthFormGroup.value.six_months)
        formData.append('one_to_two_year', this.forthFormGroup.value.one_to_two_year);
        // if(this.value > 0 && this.value){
        //   formData.append('three_to_five_year',0);

        // }else{
        formData.append('three_to_five_year', this.forthFormGroup.value.three_to_five_year);
        // }
        //if(this.value > 0 && this.value){
        // formData.append('five_years',0);

        // }else{
        formData.append('five_years', this.forthFormGroup.value.five_years);

        //}
        formData.append('people_with_tdm', JSON.stringify(this.people_with_tdm));
        formData.append('insulin_to_tdmpatients', JSON.stringify(this.insulin_to_tdmpatients));


        // localStorage.setItem("kdp_survey",'yes')
        // formData.append("kdp_survey", "yes")
        console.log(formData)
          this.service.postkdp_survey(formData).subscribe((res:any)=>{
          // this.krvey =res
        console.log(res)
        localStorage.setItem("kdp_survey",'yes')
       let kdp_survey = localStorage.getItem('kdp_survey')

        if(kdp_survey=='no'){
          this.router.navigateByUrl('/kap-survey')
        }
        else{
        this.router.navigateByUrl('/dashboard')
        this.toastr.info("Form submitted successfully")
        }
       
      })
     
    }
    else {
      console.log('not valid')
      if(this.sum != 100 ){
        this.toastr.error("Som of insulinisation barriers should be equal to 100");
        
      
       }
      // this.toastr.error("Please fill all fields")
      if( this.patients.length != 2){
      this.toastr.error('Choose two clinically relevant options')
      }
      if(this.impacts.length != 3 ){
       this.toastr.error("Choose three clinically impactful options");
       }
      
      this.thirdFormGroup.markAllAsTouched()
      }
     
    }
  }


