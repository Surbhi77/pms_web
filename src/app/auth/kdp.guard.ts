import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MainService } from '../main.service';

@Injectable({
  providedIn: 'root'
})
export class KdpGuard implements CanActivate {
  constructor(private router:Router, private service:MainService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      if(localStorage.getItem('email')!= null && localStorage.getItem('password')!= null){
        if(localStorage.getItem('kdp_survey')=='yes'){
            return true
        }else{
            this.router.navigateByUrl('/kap-survey');
            return false
        }
      }
      else
      {
       
        return true;
      }
          
  }
  
}
