import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../services/auth.service';

import {Employee} from '../../employee';

@Component({
  selector: 'app-new-employee',
  templateUrl: 'new-employee.component.html',
  styleUrls: ['new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
/*  employee: Employee = {

    id: 1,
    firstName: 'Vasya',
    lastName: 'Pupkin',
    gender: 0,
    birth: new Date(1989, 7, 20),
    addressInfo: {
      address: '',
      address2: '',
      country: '',
      region: '',
      city: '',
      postalCode: 0
    },
    contactInfo: {
      email: '',
      mobilePhone: '',
      skype: '',
      viber: '',
      whatsApp: ''
    },
    socialInfo: {
      webSite: '',
      linkedIn: '',
      facebook: '',
      google: '',
      vk: ''
    },
    company: '',
    countryOfCitizen: '',
    skillSet: [],
    employerResource: {
      resumeLink: '',
      coverLetter: '',
      picture: ''
    },
    educationType: '',
    schoolName: '',
    yearsOfExperience: 0
  };*/

title = 'Create your profile';
newEmployee: Employee;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.newEmployee = new Employee();
    this.newEmployee.personType = 'employee';
  }

  onSubmit(): void {
    console.log(this.newEmployee);
    this.router.navigate(['/employee-profile']);
  }
}
