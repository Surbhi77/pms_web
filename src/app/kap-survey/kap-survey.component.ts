import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MainService } from '../main.service';
import { Router } from '@angular/router';
import { MatDialog} from '@angular/material/dialog';


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

  updateSetting(event) {
    this.gridsize = event.value;
    this.oneTotwo = true;
  }
  grid: number = 30;
  updateSet(event) {
    this.grid = event.value;
    this.threeTofive = true;
  }
  value: number = 30;
  updatevalue(event) {
    this.value = event.value;
    this.fiveyears = true
  }
  setvalue: number = 30;
  setvalues(event) {
    this.value = event.value;
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




  constructor(private _formBuilder: FormBuilder, private service: MainService,private router:Router, public dialog: MatDialog) { }

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      // user_id: [''],
     user_id: new FormControl(''),
      delay_insulin: new FormControl('', [Validators.required]),

      //delay_insulin: new FormControl('',[Validators.required]),
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
    this.forthFormGroup = this._formBuilder.group(
      {
        six_months: new FormControl('', [Validators.required]),
        one_to_two_year: new FormControl(''),
        three_to_five_year: new FormControl(''),
        five_years: new FormControl(''),
        people_with_tdm: new FormControl(''),
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
        //insulin_to_tdmpatients: new FormControl(''),
        forthform: ['', Validators.required]

      }
    );
  }




  reluctance = [
    '	Are reluctant to start it ',
    '	Do not adhere to their appointments and treatment regimen ',
    '	Do not adhere to their self-monitoring of blood sugar ',
    '	Are from a low socioeconomic level (poor patient’s cognitive abilities) ',
    '	Are ≥75 years of age because of the risk of hypoglycemia',
    '	Have excess weight (BMI ≥ 35) because of the risk for weight gain ',
    '	Have cardiovascular diseases ',
    '	I may be reluctant to initiate insulin therapy for my patients with T2DM because ',
    '	I do not follow the medical updates on insulin therapy ',
    '	I do not have enough staff for patient education and training'


  ];
  Physician = [
    "  The fear of the Injection",
    " The fear of hypoglycemia",
    " The fear of weight gain",
    " The cost of insulin",
    " Skepticism about Insulin efficacy",
    " The perception of the initiation of insulin as a personal failure in controlling T2DM ",
    " The perception of the initiation of insulin as worsening of the disease",
    " The worry about their ability to manage insulin therapy and to adhere to physicians recommendations ",
    " The perception of the initiation of insulin therapy as a threat to their quality of life"
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
    if (this.impacts.length) {
      this.forthFormGroup.patchValue({
        'people_with_tdm': this.impacts.toString()
      });
      this.forthFormGroup.updateValueAndValidity()
    } else {
      this.forthFormGroup.patchValue({
        'people_with_tdm': ''
      })

    }
    if (this.impacts.length > 2) {
      this.checkmulti = false
      console.log("check box ")
    } else {
      this.checkmulti = true;

    }
  }


  tdmpatientsChange(event, name) {
    console.log(event)

    if (event.checked) {
      this.patients.push(name)
    } else {
      let i = this.patients.indexOf(name);
      this.patients.splice(i, 1)

    }


    if (this.patients.length) {
      this.forthFormGroup.patchValue({
        'insulin_to_tdmpatients': this.patients.toString()
      });
      this.forthFormGroup.updateValueAndValidity()
    } else {
      this.forthFormGroup.patchValue({
        'insulin_to_tdmpatients': ''
      })
    }
    if (this.patients.length > 1) {
      this.checklimiterro = false
      
      console.log("check box ")
    } else {
      this.checklimiterro = true;
     

    }


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
    this.dialog.open(ratePopup);
  }
  popup2(){
    this.dialog.open(ratePopup);
  }

  submit() {
    var formData: any = new FormData();
    if (this.thirdFormGroup.valid && this.patients.length > 1 && this.impacts.length > 2) {
     

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

        //this.router.navigateByUrl('/add-entry')

      })
     
    }
    else {
      console.log('not valid')
      this.thirdFormGroup.markAllAsTouched()
     
    }
  }

}
@Component({
  selector: 'ratePopup',
  templateUrl: 'ratePopup.component.html',
})
export class ratePopup {}