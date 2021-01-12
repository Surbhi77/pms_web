//import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }
  addInitiate(addinitiate:any){
    return this.http.post("https://360pmt.com/pms-app/Pms_app/add_initiate", addinitiate)
  }
  postAddBegin(addbegin:any){
    return this.http.post("https://360pmt.com/pms-app/Pms_app/add_begin",addbegin)
    }
  


  
  postkdp_survey(kdpsurvey:any){
    return this.http.post("https://360pmt.com/pms-app/Pms_app/kdp_survey",kdpsurvey)

   }
}
