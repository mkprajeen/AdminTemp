import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PatientListComponent} from './patient-list'
import {routing} from './patient.routing'

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    PatientListComponent
  ]
})
export class PatientModule { }
