import { Component, OnInit } from '@angular/core';
import { User } from "../_model/user.model";
import { Role } from "../_model/role";
import { Router } from "@angular/router";
import { ActionService } from "../service/action.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[];
  roles: Role[];

  constructor(private router: Router, private actionService: ActionService) {  }

  ngOnInit() {
    //Get user data
    this.actionService.getUsers()
      .subscribe( data => {
        this.users = data['data'];
      })
  }

  deleteUser(user: User): void {
    this.actionService.deleteUser(user.id)
      .pipe(first())
      .subscribe( data => {
        this.router.navigate(['/']);
      },)
  }

  editUser(user: User): void {
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', user.id.toString());
    this.router.navigate(['Admin/edit-user']);
  }

  addUser(): void {
    this.router.navigate(['Admin/add-user']);
  }

  addUserRoles(user: User): void {
    localStorage.removeItem('addUserRoles');
    localStorage.setItem('addUserRoles', user.id.toString());
    this.router.navigate(['Admin/roles']);
  }

  home(): void {
    this.router.navigate(['']);
  }
}
