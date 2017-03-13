import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerRoutingModule } from './employer-routing.module';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  imports: [
    CommonModule,
    EmployerRoutingModule
  ],
  declarations: [EmployeeListComponent, EmployeeDetailsComponent]
})
export class EmployerModule { }
