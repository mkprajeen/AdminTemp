import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: 'login', redirectTo: 'pages/login' },
  { path: '**', redirectTo: 'pages/dashboard',canActivate: []  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
