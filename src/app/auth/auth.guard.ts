import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MainService } from '../main.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router, private service:MainService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      if(localStorage.getItem('email')!= null && localStorage.getItem('password')!= null){
       console.log("valid")
       
        return true;
          }
          else
          {
            this.router.navigateByUrl('/login');
            console.log("invalid")
            return false;
          }
          
  }
  
}
