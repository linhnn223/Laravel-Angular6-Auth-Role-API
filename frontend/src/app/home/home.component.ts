import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User} from "../auth/_models/user";
import { UserService} from "../auth/_services/user.service";
import {ActionService} from "../admin/service/action.service";
import {Role} from "../admin/_model/role";
import {forEach} from "@angular/router/src/utils/collection";
import {Router} from "@angular/router";
import {RoutingRole} from "../routing/_Model/routingRole";

@Component({templateUrl: 'home.component.html'})

export class HomeComponent implements OnInit {
  users: User;
  roles: Role;
  routingRole: any;
  id: number;
  count: number;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getAll()
      .pipe(first())
      .subscribe(users => {
      this.users = users['user'];
      this.id = users['user'].id;

      this.userService.getRoleUser(+this.id)
        .subscribe( roles => {
          this.roles = roles['role'];
        })

      this.userService.getRoleList(+this.id)
        .subscribe( data => {
          this.routingRole = data;
          console.log(this.routingRole)
          localStorage.setItem("routing-list", JSON.stringify(this.routingRole));
        })
    })
  }
}
