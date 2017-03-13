import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Employee } from '../../employee';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  employee: Employee;
  step: number = 1;
  val: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.step = 1;
    this.val = 3;
  }

  next(): void {
    this.step += 1;
    console.log(this.step);
  }

  submit(): void {
    this.router.navigate(['']);
  }
}
