import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = true;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }
  constructor() {
  }
  login(){
    this._userIsAuthenticated = true;
    console.log("logged in");
  }
  logout(){
    this._userIsAuthenticated = false;
  }
}
