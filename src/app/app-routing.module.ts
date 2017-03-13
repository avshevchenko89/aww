import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'find-job', loadChildren: 'app/employee/employee.module#EmployeeModule' },
  { path: 'find-employer', loadChildren: 'app/employer/employer.module#EmployerModule' },
  { path: 'log-in', loadChildren: 'app/log-in/log-in.module#LogInModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
