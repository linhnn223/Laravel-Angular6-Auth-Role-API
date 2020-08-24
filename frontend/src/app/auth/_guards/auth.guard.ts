//Prevent unauthenticated users from accessing retricted routes. it's use to protect the home page route
import { Injectable } from "@angular/core";
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from "@angular/router";

@Injectable( { providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private router:Router) {  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
      // Logged in so return true
      return true;
    }

    // Not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnURL: state.url }});
    return false;
  }
}
