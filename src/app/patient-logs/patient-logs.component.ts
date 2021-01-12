import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-logs',
  templateUrl: './patient-logs.component.html',
  styleUrls: ['./patient-logs.component.css']
})
export class PatientLogsComponent implements OnInit {

  title = 'Patient List';

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
