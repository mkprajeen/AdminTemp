import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthenticationGuard} from './auth'

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: 'login', redirectTo: 'pages/login' },
  { path: '**', redirectTo: 'pages/dashboard',canActivate: [AuthenticationGuard]  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
