/**
 * The JWT authentication service is used to login an logout of the application, to login it posts the users credentials
 * to the api and check the response for a JWT token, if there is one it mean authentication wa successfull so the user
 * details are added to the local storage with the token. The token is use by the JWT interceptor above to set the
 * authorization header of http requests made to secure api endpoints
 *
 * The logged in user details are stored in local storage so the user will stay logged in if they refresh the browser
 * and also between browser sessions until they logout. If you don't want the user to stay logged in between refreshes
 * or sessions the behaviour could easily be changed by storing user details somewhere less persistent such as session
 * storage or in a property of the authentication service.
 */

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AuthenticationService{
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<any>("http://127.0.0.1:8000/api/login", { email, password })
      .pipe(map(user => {
        // login successful if there's a jwt toking in the response
        if(user && user.token) {
          //store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }))
  }



  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser')
  }
}
