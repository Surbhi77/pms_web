
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  private apiURL = "https://360pmt.com/pms-app/Pms_app"
  constructor(private http:HttpClient) { }
  addInitiate(addinitiate:any){
    return this.http.post( this.apiURL + '/add_initiate/', addinitiate)
  }
  postAddBegin(addbegin:any){
    return this.http.post( this.apiURL + '/add_begin',addbegin)
    }
  postkdp_survey(kdpsurvey:any){
    return this.http.post( this.apiURL + '/kdp_survey',kdpsurvey)

   }
    beginListing(id:any){
    return this.http.post(this.apiURL + "/begin_completed_list" ,id);
    
  }
  beginDraftListing(list:any){
    return this.http.post(this.apiURL + "/draft_begin_list",list);
  }
  beginview(show:any){
    return this.http.post(this.apiURL + "/begin_view",show);

  }
  initiateList(list:any){
    return this.http.post(this.apiURL + "/initiate_completed_list",list)
  }
  draftList(list:any){
    return this.http.post(this.apiURL + "/draft_list",list)
  }
  draftView(view:any){
    return this.http.post(this.apiURL + "/draft_view",view)
  }
  deleteDraftdata(id:number){
    return this.http.post(this.apiURL + "/draft_delete",id)
  }
  beginDraftDelete(id){
    return this.http.post(this.apiURL + "/begin_delete",id);
  }
  login(logindata:any){
    return this.http.post(this.apiURL + '/login',logindata)
  }
  quries(qur:any){
    return this.http.post( this.apiURL + '/enquiry',qur)
  }
  check_terms(check:any){
    return this.http.post( this.apiURL + '/terms_checking',check)

  }
  agreement(data:any){
   return this.http.post(this.apiURL + "/agreement",data)
  }
  changePass(data:any){
    return this.http.post( this.apiURL + "/change_password", data)
  }
  invoicemedia(data:any){
 return this.http.post(this.apiURL + "/userinvoice", data)
  }
 checkinvoice(data:any){
 return this.http.post(this.apiURL + "/check_invoice", data)
}
 forgetpassword(data:any){
  return this.http.post(this.apiURL + "/forget_password", data)
   }
     checkMobile(params:any){
      return this.http.post(this.apiURL + "/check_mobile",params)
    }
    GetAgreement(id:any){
   return this.http.post(this.apiURL + "/get_serviceagreement",id)
    }

}
