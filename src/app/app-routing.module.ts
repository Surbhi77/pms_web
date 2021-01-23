import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {HowItWorksComponent} from './how-it-works/how-it-works.component';
import {LoginComponent} from './auth/login/login.component';
import {AddEntryComponent} from './add-entry/add-entry.component';
import {InstrutionsComponent} from './instrutions/instrutions.component';
import {InvoiceComponent} from './invoice/invoice.component';
import {KapSurveyComponent} from './kap-survey/kap-survey.component';
import {PatientLogsComponent} from './patient-logs/patient-logs.component';
import { BeginListingComponent } from './begin-listing/begin-listing.component';
import { BeginViewComponent } from './begin-view/begin-view.component';
import { AddEntryProcessComponent } from './add-entry-process/add-entry-process.component';
import { InitiateCompletedListComponent } from './initiate-completed-list/initiate-completed-list.component';
import { DraftViewComponent } from './draft-view/draft-view.component';
import { InvoiceProcessComponent } from './invoice-process/invoice-process.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path:'login',
    component:LoginComponent
   },
  {
   path:'how-it-works',
   component:HowItWorksComponent
  },
  {
    path:'add-entry',
    component:AddEntryComponent
  },
  {
    path:'add-entry-process',
    component:AddEntryProcessComponent
  },
  {
    path:'instrutions',
    component:InstrutionsComponent
  },
  {
    path:'invoice',
    component:InvoiceComponent
  },
  {
    path:'begin-listing',
    component:BeginListingComponent
  },
  
  {
    path:'kap-survey',
    component:KapSurveyComponent,canActivate : [AuthGuard]
  },
  {
    path:'patient-logs',
    component:PatientLogsComponent
  },
  {
    path:'begin-view/:id',
    component:BeginViewComponent
  }
  ,{
    path:'initiate_completed_list',
    component:InitiateCompletedListComponent
  },{
    path:'draft_view/:id',
    component:DraftViewComponent
  },
  {
    path:'draft_delete',
    component:InitiateCompletedListComponent
  },
  {
    path:'invoice-process',
    component:InvoiceProcessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
