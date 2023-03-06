import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedicalRecordComponent } from './medical-record/medical-record.component';
import { MedicineComponent } from './medicine/medicine.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PatientComponent } from './patient/patient.component';
import { PersonnelComponent } from './personnel/personnel.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    pathMatch: 'full'
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"employees",
    component:PersonnelComponent,
    pathMatch: 'full'
  },
  {
    path:"patients",
    component:PatientComponent,
    pathMatch: 'full'
  },
  {
    path:"medicine",
    component:MedicineComponent,
    pathMatch: 'full'
  },
  {
    path:"medical-record",
    component:MedicalRecordComponent,
    pathMatch: 'full'
  },
  {
    path:"**",
    component:NotFoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
