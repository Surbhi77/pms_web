import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MainService } from '../main.service';


@Component({
  selector: 'app-kap-survey',
  templateUrl: './kap-survey.component.html',
  styleUrls: ['./kap-survey.component.css']
})
export class KapSurveyComponent implements OnInit {
  title = 'Kap Survey';
  gridsize: number = 30;
 
  updateSetting(event) {
    this.gridsize = event.value;
  }
  grid: number = 30;
  updateSet(event) {
    this.grid = event.value;
  }
  value: number = 30;
  updatevalue(event){
    this.value = event.value;
  }
  setvalue: number = 30;
  setvalues(event){
    this.value = event.value;
  }

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  kdpsurvey: any;
  //insulin_to_tdmpatients:{};
 // people_with_tdm:{};
 people_with_tdm:any={};
 insulin_to_tdmpatients:any={};
  reluctant_insulin:any=[];
  fear_injection:any=[];

  
  

  constructor(private _formBuilder: FormBuilder,private service:MainService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
     // user_id: [''],
    //  user_id: new FormControl(''),
      delay_insulin: new FormControl(''),
     
      delay_insuinsulin_tdm: new FormControl(''),
      insulin_tdm: new FormControl(''),
      insulin_regardless: new FormControl(''),
      benifit_insulin: new FormControl(''),
      receiving_insulin: new FormControl(''),
      success_insulin: new FormControl(''),
      notcomplicated_insulin: new FormControl(''),
      insulin_therapy: new FormControl(''),

      
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
     
      aggreetype: new FormControl(''),
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      agreedropped: new FormControl(''),
      thirdformCtrl: ['', Validators.required]
    });
    this.forthFormGroup =this._formBuilder.group(
      {
         six_months: new FormControl(''),
         one_to_two_year: new FormControl(''),
         three_to_five_year: new FormControl(''),
         five_years: new FormControl(''),
         people_with_tdm: new FormControl(''),
         //
         Beta: new FormControl(''),
         role: new FormControl(''),
         Reducing: new FormControl(''),
         risk: new FormControl(''),
         Micro: new FormControl(''), 
         Reduce: new FormControl(''),
         Neuropathy: new FormControl(''),
         CIMT: new FormControl(''),
         //
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
  Physician =[
    "  The fear of the Injection", 
    " The fear of hypoglycemia",
    " The fear of weight gain", 
    " The cost of insulin",
    " Skepticism about Insulin efficacy",
    " The perception of the initiation of insulin as a personal failure in controlling T2DM ",
    " The perception of the initiation of insulin as worsening of the disease" ,                        
    " The worry about their ability to manage insulin therapy and to adhere to physicians recommendations ",                                                                                              
    " The perception of the initiation of insulin therapy as a threat to their quality of life" 
      ]

  drop(event: CdkDragDrop<string[]>) {
    var list=this.reluctance.toString()
    moveItemInArray(this.reluctance, event.previousIndex, event.currentIndex);
    // console.log('currentIndex',event.currentIndex);
    // console.log('reluctance',this.reluctance[event.currentIndex]);
    this.reluctant_insulin = this.reluctance;
  }
  dropped(event:CdkDragDrop<string[]>){
    console.log(event)
    moveItemInArray(this.Physician, event.previousIndex, event.currentIndex )
    this.fear_injection = this.Physician;
   }
   submit(){
     var formData: any = new FormData();
     console.log(this.firstFormGroup.value)
     this.people_with_tdm.Beta= (this.forthFormGroup.value.Beta==true)?this.forthFormGroup.value.Beta:false;
     this.people_with_tdm.role= (this.forthFormGroup.value.role==true)?this.forthFormGroup.value.role:false;
     this.people_with_tdm.Reducing= (this.forthFormGroup.value.Reducing==true)?this.forthFormGroup.value.Reducing:false;
     this.people_with_tdm.risk= (this.forthFormGroup.value.risk==true)?this.forthFormGroup.value.risk:false;
     this.people_with_tdm.Micro= (this.forthFormGroup.value.Micro==true)?this.forthFormGroup.value.Micro:false;
     this.people_with_tdm.Reduce= (this.forthFormGroup.value.Reduce==true)?this.forthFormGroup.value.Reduce:false;
     this.people_with_tdm.Neuropathy= (this.forthFormGroup.value.Neuropathy==true)?this.forthFormGroup.value.Neuropathy:false;
     this.people_with_tdm.CIMT= (this.forthFormGroup.value.CIMT==true)?this.forthFormGroup.value.CIMT:false;
     //
     this.insulin_to_tdmpatients.Comorbid= (this.forthFormGroup.value.Comorbid==true)?this.forthFormGroup.value.Comorbid:false;
     this.insulin_to_tdmpatients.High= (this.forthFormGroup.value.High==true)?this.forthFormGroup.value.High:false;
     this.insulin_to_tdmpatients.Infections= (this.forthFormGroup.value.Infections==true)?this.forthFormGroup.value.Infections:false;
     this.insulin_to_tdmpatients.HighA1c= (this.forthFormGroup.value.HighA1c==true) ? this.forthFormGroup.value.HighA1c : false;
    
    console.log('this.insulin_to_tdmpatients',this.insulin_to_tdmpatients)
    console.log('this.people_with_tdm',this.people_with_tdm)


    //firstform
    formData.append('delay_insulin',this.firstFormGroup.value.delay_insulin);
    // formData.append('delay_insuinsulin_tdm',this.firstFormGroup.value.delay_insuinsulin_tdm);
    formData.append('insulin_tdm',this.firstFormGroup.value.insulin_tdm);
    formData.append('insulin_regardless',this.firstFormGroup.value.insulin_regardless);
    formData.append('user_id',1);

    //secondform
    if(this.reluctant_insulin.length==0){
      this.reluctant_insulin = this.reluctance;
    }
    formData.append('reluctant_insulin',this.reluctant_insulin);
    console.log(this.reluctant_insulin);

    //thirdform
    if(this.fear_injection.length==0){
      this.fear_injection = this.Physician;
    }
    formData.append('fear_injection',this.fear_injection);
    console.log(this.fear_injection);
    //fourth form
    formData.append('six_months',this.forthFormGroup.value.six_months);
    formData.append('one_to_two_year',this.forthFormGroup.value.one_to_two_year);
    formData.append('three_to_five_year',this.forthFormGroup.value.three_to_five_year);
    formData.append('five_years',this.forthFormGroup.value.five_years);
   // formData.append('six_months',this.forthFormGroup.value.six_months);
    formData.append('people_with_tdm',JSON.stringify(this.people_with_tdm));
    formData.append('insulin_to_tdmpatients',JSON.stringify(this.insulin_to_tdmpatients));
    


    //formData.append('insulin_to_tdmpatients',JSON.stringify(this.tdmpatients));
   console.log(formData)
    this.service.postkdp_survey(formData).subscribe((res:any)=>{
      //  this.krvey =res
       console.log(res)
   })
   
   }

}
