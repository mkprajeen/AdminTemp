import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {Patient} from './patient.component'
import { PatientListComponent } from './patient-list';
import { EncounterListComponent } from './encounter-list'
import { ProgressNoteComponent } from './progress-note'
import { ProgressNoteNewComponent } from './progress-note-new'


// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Patient,
    children: [
      { path: 'patient-list', component: PatientListComponent },
      { path: 'encounter-list', component: EncounterListComponent },
      { path: 'progress-note/:id', component: ProgressNoteComponent },
      { path: 'progress-note-new/:id', component: ProgressNoteNewComponent }
      
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
