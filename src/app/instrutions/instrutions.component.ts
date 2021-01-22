import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-instrutions',
  templateUrl: './instrutions.component.html',
  styleUrls: ['./instrutions.component.css']
})
export class InstrutionsComponent implements OnInit {
  instructions:any=[];

  constructor(private service:MainService) { }

  ngOnInit(): void {
    this.service.instructions().subscribe(res=>{
      this.instructions = res
      console.log(res)
    })
  }

}
