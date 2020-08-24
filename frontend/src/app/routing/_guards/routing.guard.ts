import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable({ providedIn: "root" })
export class RoutingGuard{
  constructor(private router:Router) {  }

  checkExistRouter (url: string) {
    let router = localStorage.getItem('routing-list');
    let parse = JSON.parse(router)
    let array = router.split("\",\"")

    array[0] = array[0].replace('{"data":["', '');
    array[array.length-1] = array[array.length-1].replace('\"\]\}', '');

    let find = false;

    if (array.includes(url)) {
      find = true
    }

    return find;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let result = this.checkExistRouter(state.url.toString());

    if (result) {
      return true
    }
    else {
      this.router.navigate(['/'], { queryParams: { returnURL: state.url }});
      return false
    }
  }
}
