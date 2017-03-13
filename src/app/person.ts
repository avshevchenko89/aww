export class Person {

  id: number;
  firstName: string = '';
  lastName: string = '';
  gender: number = 0;
  birth: {} = {};
  addressInfo: {
    address: string,
    address2: string,
    country: string,
    region: string,
    city: string,
    postalCode: string
  } = {
    address: '',
    address2: '',
    country: '',
    region: '',
    city: '',
    postalCode: '000000'
  };
  contactInfo: {
    email: string,
    mobilePhone: string,
    skype: string,
    viber: string,
    whatsApp: string
  } = {
    email: '',
    mobilePhone: '',
    skype: '',
    viber: '',
    whatsApp: ''
  };
  socialInfo: {
    webSite: string,
    linkedIn: string,
    facebook: string,
    google: string,
    vk: string
  } = {
    webSite: '',
    linkedIn: '',
    facebook: '',
    google: '',
    vk: ''
  };
  authInfo: {
    logIn: string,
    pass: string
  } = {
    logIn: '',
    pass: ''
  };
  company: string = '';
  countryOfCitizen: string = '';
  languages: string[] = [];
  personType: string = '';
  profileComplite: boolean = false;

}
