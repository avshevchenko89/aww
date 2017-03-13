import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

//Routing
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }     from './app.component'; //root component
import { MainComponent }    from './main/main.component'; //стартовый компонент
import { EmployeeModule }   from './employee/employee.module'; //модуль для соикателей
import { EmployerModule }   from './employer/employer.module'; //модуль для работодателей, поиск работников
import { RegisterModule }   from './register/register.module'; //модуль регистрации пользователей приложения (работодатели/соискатели)
import { LogInModule }      from './log-in/log-in.module'; //модуль логинизации
import { ContactModule }    from './contact/contact.module'; //модуль для контакта соискателя и работодателя

import { AppService }       from './services/app.service';
import { AuthService }      from './services/auth.service';
import { AuthGuard }        from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    EmployeeModule,
    EmployerModule,
    RegisterModule,
    LogInModule,
    ContactModule
  ],
  providers: [
    AppService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
