import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {routing} from './patient.routing'
import {Patient} from './patient.component'
import {PatientListComponent} from './patient-list';
import { EncounterListComponent } from './encounter-list'
import { ProgressNoteComponent } from './progress-note';
import { ProgressNoteNewComponent } from './progress-note-new';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MainFormComponent } from './../../dynamicforms/main-form/main-form.component'
import { DynamicFormModule} from './../../dynamicforms/dynamic-form.module'
import {MatTabsModule} from '@angular/material/tabs'

import { DynamicFormsCoreModule } from "@ng-dynamic-forms/core"
import { DynamicFormsNGBootstrapUIModule  } from "@ng-dynamic-forms/ui-ng-bootstrap"
import { NgbModule} from "@ng-bootstrap/ng-bootstrap"
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    routing,
    NgxDatatableModule,
    MatTabsModule,
    ReactiveFormsModule,
    DynamicFormModule,
    DynamicFormsCoreModule.forRoot(), 
    DynamicFormsNGBootstrapUIModule,
    NgbModule.forRoot()
  ],
  declarations: [
    Patient,
   PatientListComponent,
   EncounterListComponent,
   ProgressNoteComponent,
   ProgressNoteNewComponent,
   MainFormComponent
  ]
})
export class PatientModule { }
