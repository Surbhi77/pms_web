import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { KapSurveyComponent } from './kap-survey/kap-survey.component';

import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { InstrutionsComponent } from './instrutions/instrutions.component';
import { InvoiceComponent } from './invoice/invoice.component';
import {LoginComponent} from  './auth/login/login.component'
import {DragDropModule} from '@angular/cdk/drag-drop';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import {MatBadgeModule} from '@angular/material/badge';
// import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
// import {MatButtonModule} from '@angular/material/button';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatDialogModule} from '@angular/material/dialog';
// import {MatDividerModule} from '@angular/material/divider';
// import {MatExpansionModule} from '@angular/material/expansion';
// import {MatGridListModule} from '@angular/material/grid-list';
// import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
// import {MatListModule} from '@angular/material/list';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
// import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatProgressBarModule} from '@angular/material/progress-bar';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
// import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
// import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
// import {MatSortModule} from '@angular/material/sort';
// import {MatTableModule} from '@angular/material/table';
// import {MatTabsModule} from '@angular/material/tabs';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatTooltipModule} from '@angular/material/tooltip';
// import {MatTreeModule} from '@angular/material/tree';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {OverlayModule} from '@angular/cdk/overlay';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
 import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BeginListingComponent } from './begin-listing/begin-listing.component';
import { BeginViewComponent } from './begin-view/begin-view.component';
import { AddEntryProcessComponent } from './add-entry-process/add-entry-process.component';
import { InitiateCompletedListComponent } from './initiate-completed-list/initiate-completed-list.component';
import { DraftViewComponent } from './draft-view/draft-view.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InvoiceProcessComponent } from './invoice-process/invoice-process.component';
import { AuthGuard } from './auth/auth.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { QuriesComponent} from './quries/quries.component';
import { TermsCheckingComponent } from './auth/terms-checking/terms-checking.component';
import { PatientLogsComponent } from './patient-logs/patient-logs.component';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './dashboard/dashboard.component';






//import { BeginDraftListComponent } from './begin-draft-list/begin-draft-list.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddEntryComponent,
    KapSurveyComponent,
    DashboardComponent,
    HowItWorksComponent,
    InstrutionsComponent,
    InvoiceComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BeginListingComponent,
    BeginViewComponent,
    AddEntryProcessComponent,
    InitiateCompletedListComponent,
    DraftViewComponent,
    InvoiceProcessComponent,
    ChangePasswordComponent,
    QuriesComponent,
    PatientLogsComponent,
    TermsCheckingComponent
    
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatRadioModule,
    DragDropModule,
    MatSliderModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSelectModule,
    NgbModule,
    OverlayModule,  
    HttpClientModule,
    MatDialogModule,
    ToastrModule.forRoot(),
  ],
  exports:[
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatRadioModule,
    DragDropModule,
    MatSliderModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSelectModule,
    NgbModule,
    OverlayModule
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
