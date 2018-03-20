import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {routing} from './patient.routing'
import {Patient} from './patient.component'
import {PatientListComponent} from './patient-list';
import { EncounterListComponent } from './encounter-list'
import { ProgressNoteComponent } from './progress-note';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MainFormComponent } from './../../dynamicforms/main-form/main-form.component'

@NgModule({
  imports: [
    CommonModule,
    routing,
    NgxDatatableModule,
  ],
  declarations: [
    Patient,
   PatientListComponent,
   EncounterListComponent,
   ProgressNoteComponent,
   MainFormComponent
  ]
})
export class PatientModule { }
