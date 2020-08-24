import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActionService } from "../service/action.service";
import {Role} from "../_model/role";

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  roles: Role[];
  id: string;

  constructor(private router: Router, private actionService: ActionService) { }

  ngOnInit() {
    let userId = localStorage.getItem("addUserRoles");
    this.id = userId;

    if (!userId) {
      alert('Invalid action.');
      this.router.navigate(['/list-user']);
      return;
    }

    this.actionService.getRoleUser(+userId)
      .subscribe( data => {
        this.roles = data['role'];
        console.log(this.roles.length)
      })
  }

  addUserRoles(): void {
    localStorage.removeItem('addUserRole');
    localStorage.setItem('addUserRole', this.id);
    this.router.navigate(['Admin/add-roles']);
  }

  users(): void {
    this.router.navigate(['Admin']);
  }

}
