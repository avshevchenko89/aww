import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInRoutingModule } from './log-in-routing.module';

import { AuthorizationComponent } from './authorization/authorization.component';

@NgModule({
  imports: [
    CommonModule,
    LogInRoutingModule
  ],
  declarations: [AuthorizationComponent]
})
export class LogInModule { }
