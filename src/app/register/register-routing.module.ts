import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AuthGuard } from '../services/auth-guard.service';

import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { NewEmployerComponent } from './new-employer/new-employer.component';

const routes: Routes = [
  { path: '', redirectTo: '/new-employee', pathMatch: 'full' },
  { path: 'new-employee', component: NewEmployeeComponent },
  // { path: 'employee-profile/:id', component: EmployeeProfileComponent, canActivate: [AuthGuard] },
  { path: 'employee-profile', component: EmployeeProfileComponent, /*canActivate: [AuthGuard] */},
  { path: 'new-employer', component: NewEmployerComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
