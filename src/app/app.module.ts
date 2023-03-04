import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { MedicineComponent } from './medicine/medicine.component';
import { PatientComponent } from './patient/patient.component';
import { MedicalRecordComponent } from './medical-record/medical-record.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeModule } from '@circlon/angular-tree-component';

@NgModule({
  declarations: [
    AppComponent,
    PersonnelComponent,
    MedicineComponent,
    PatientComponent,
    MedicalRecordComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }