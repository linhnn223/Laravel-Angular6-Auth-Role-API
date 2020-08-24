import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { User } from '../_model/user.model';
import { userRole } from "../_model/userRole";
import { Role } from "../_model/role";


@Injectable()
export class ActionService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>('http://127.0.0.1:8000/api/list-users')
  }

  getRoles() {
    return this.http.get<Role[]>('http://127.0.0.1:8000/api/roles')
  }

  addRoles(role: userRole): Observable<User> {
    const httpHeaders = { headers:new HttpHeaders({'Content-Type': 'application/json'}) };
    return this.http.post<User>('http://127.0.0.1:8000/api/add-roles', role, httpHeaders);
  }

  getRoleUser(id: number) {
    return this.http.get('http://127.0.0.1:8000/api/roles/' + id)
  }

  getUserById(id: number): Observable<User[]> {
    return this.http.get<User[]>('http://127.0.0.1:8000/api/user-detail/' + id)
  }

  createUser(user: User): Observable<User> {
    const httpHeaders = { headers:new HttpHeaders({'Content-Type': 'application/json'}) };
    return this.http.post<User>('http://127.0.0.1:8000/api/create-new-user/', user, httpHeaders);
  }

  updateUser(user: User): Observable<User> {
    const httpHeaders = { headers:new HttpHeaders({'Content-Type': 'application/json'}) };
    return this.http.post<User>('http://127.0.0.1:8000/api/update-user/', user, httpHeaders);
  }

  deleteUser(id: number) {
    return this.http.delete('http://127.0.0.1:8000/api/delete-user/' + id)
  }
}
