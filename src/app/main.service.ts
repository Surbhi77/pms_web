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
    beginListing(id:any){
    return this.http.post("https://360pmt.com/pms-app/Pms_app/begin_completed_list",id);
  }
  beginDraftListing(list:any){
    return this.http.post("https://360pmt.com/pms-app/Pms_app/begin_list",list);
  }
  beginview(show:any){
    return this.http.post("https://360pmt.com/pms-app/Pms_app/begin_view",show);

  }
  initiateList(list:any){
    return this.http.post("https://360pmt.com/pms-app/Pms_app/initiate_completed_list",list)
  }
  draftList(list:any){
    return this.http.post("https://360pmt.com/pms-app/Pms_app/draft_list",list)
  }
  draftView(view:any){
    return this.http.post("https://360pmt.com/pms-app/Pms_app/draft_view",view)
  }
  deleteDraftdata(id:number){
    return this.http.post("https://360pmt.com/pms-app/Pms_app/draft_delete",id)
  }
  beginDraftDelete(id){
    return this.http.post("https://360pmt.com/pms-app/Pms_app/begin_delete",id);
  }
  login(logindata:any){
    return this.http.post('https://360pmt.com/pms-app/Pms_app/login',logindata)
  }
  instructions(){
    return this.http.get('https://360pmt.com/pms-app/Pms_app/page/instruction')
  }
  howitworks(){
    return this.http.get('https://360pmt.com/pms-app/Pms_app/page/how-its-works')
  }

}
