/**
 * The user service contains a method for getting all users from the api, I include it to demonstrate accessing a secure
 * api endpoint with the http authorization header set after logging in to the application, the auth header is set with
 * a JWT token with the JWT Interceptor above
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "../_models/user";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`http://127.0.0.1:8000/api/profile`)
  }

  getRoleUser(id: number) {
    return this.http.get('http://127.0.0.1:8000/api/roles/' + id)
  }

  getRoleList(id: number) {
    return this.http.get('http://127.0.0.1:8000/api/routing/' + id)
  }

  getRouteList(id: string) {
    return this.http.get(' http://127.0.0.1:8000/api/routing/' +id)
  }

}
