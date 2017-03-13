import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { provideAuth, AuthHttp, AuthConfig} from 'angular2-jwt';
import { SliderModule } from 'primeng/primeng';

import { routing, appRoutingProviders } from './register-routing.module';

import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { NewEmployerComponent } from './new-employer/new-employer.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';

import { AppService } from '../services/app.service';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../services/auth-guard.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({}), http, options);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SliderModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AppService,
    AuthService,
    AuthGuard
  ],
  declarations: [
    NewEmployeeComponent,
    NewEmployerComponent,
    EmployeeProfileComponent
  ]
})
export class RegisterModule { }

