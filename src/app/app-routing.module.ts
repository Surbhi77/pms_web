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
import { ChangePasswordComponent } from './change-password/change-password.component';
import { QuriesComponent } from './quries/quries.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceMediaComponent } from './invoice-media/invoice-media.component';


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
   component:HowItWorksComponent,
   canActivate : [AuthGuard]
  },
  {
    path:'add-entry',
    component:AddEntryComponent,
    canActivate : [AuthGuard]
  },
  {
    path:'add-entry-process',
    component:AddEntryProcessComponent
    ,canActivate : [AuthGuard]
  },
  {
    path:'instrutions',
    component:InstrutionsComponent
    ,canActivate : [AuthGuard]
  },
  {
    path:'invoice',
    component:InvoiceComponent
    ,canActivate : [AuthGuard]
  },
  {
    path:'begin-view/:id/:completed',
    component:BeginViewComponent
    ,canActivate : [AuthGuard]
  },
  {
    path:'begin-listing',
    component:BeginListingComponent
    ,canActivate : [AuthGuard]
  },
  
  {
    path:'kap-survey',
    component:KapSurveyComponent,canActivate : [AuthGuard]
  },
  {
    path:'patient-logs',
    component:PatientLogsComponent
    ,canActivate : [AuthGuard]
  },
  {
    path:'begin-view/:id',
    component:BeginViewComponent
    ,canActivate : [AuthGuard]
  }
  ,{
    path:'initiate_completed_list',
    component:InitiateCompletedListComponent
    ,canActivate : [AuthGuard]
  },{
    path:'draft_view/:id',
    component:DraftViewComponent
    ,canActivate : [AuthGuard]
  },
  {
    path:'draft_delete',
    component:InitiateCompletedListComponent
    ,canActivate : [AuthGuard]
  },
  {
    path:'invoice-process',
    component:InvoiceProcessComponent
    ,canActivate : [AuthGuard]
  },
  {
    path:'change_password',
    component:ChangePasswordComponent
    ,canActivate : [AuthGuard]
  },{
    path:'quries',
    component:QuriesComponent
    ,canActivate : [AuthGuard]
  },
  {
    path:'dashboard',
    component:DashboardComponent
    ,canActivate : [AuthGuard]
  },
  {
    path:'invoice-media',
    component:InvoiceMediaComponent
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
