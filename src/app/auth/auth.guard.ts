import { Injectable } from '@angular/core';
import {  CanLoad,  Router,  UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/router';
import { UrlSegment } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router){

  }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.userIsAuthenticated){
      this.router.navigateByUrl('/auth');
    }
    return this.authService.userIsAuthenticated;
  }

}
