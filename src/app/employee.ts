import { Person } from './person';

export class Employee extends Person {
  title: string;
  description: string;
  skillSet: string[] = [];
  employerResource: {
    resumeLink: string,
    coverLetter: string,
    picture: string
  } = {
    resumeLink: '',
    coverLetter: '',
    picture: ''
  };
  educationType: string = '';
  schoolName: string = '';
  yearsOfExperience: number = 0;
}
