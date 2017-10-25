import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthenticationGuard} from '../auth'
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
   path: 'login',
   loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  //{
  //  path: 'register',
  //  loadChildren: 'app/pages/register/register.module#RegisterModule'
  //},
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', canActivate: [AuthenticationGuard], loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'patient', canActivate: [AuthenticationGuard], loadChildren: './patient/patient.module#PatientModule' },
 
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
