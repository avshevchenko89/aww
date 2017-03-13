import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

declare  var Auth0Lock: any;

var options = {
  theme: {
    logo: '../../assets/img/aww.png',
    primaryColor: '#028fcc'
  },
  allowedConnections: ['google', 'facebook', 'linkedin'],
  auth: {
    redirectUrl: 'http://localhost:4200/employee-profile'
  }
};

@Injectable()
export class AuthService {
  lock = new Auth0Lock('rSN3DGqszBsDkvC4wOuHbD1hTE7jV4zS', 'solonnikovys.eu.auth0.com', options);

  constructor(
    private router: Router
  ) {
    this.lock.on("authenticated", (authResult:any) => {
      this.lock.getProfile(authResult.idToken, function(error:any, newEmployee:any) {
        if(error) {
          throw new Error(error);
        }
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('newEmployee', JSON.stringify(newEmployee));
      });
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }
}
