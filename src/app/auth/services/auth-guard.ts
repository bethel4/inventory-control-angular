import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
 import { SessionQuery } from '../state/session.query';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private query: SessionQuery, private router: Router) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.query.isLoggedIn()) {
      console.log(true)
      return true;
    }
    this.router.navigate(['register/login']);
    console.log(false)
    return false;
  }
}
