import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }
   
  userType:any = [];
  ngOnInit(): void {
    this.userType = localStorage.getItem('userType')
    console.log(this.userType)
  }
  logout(){
    localStorage.removeItem('userType')
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    this.router.navigateByUrl('/login')
  }

}
