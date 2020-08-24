import { Component, OnInit } from '@angular/core';
import { Role } from "../_model/role";
import { Router } from "@angular/router";
import { ActionService } from "../service/action.service";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {userRole} from "../_model/userRole";

@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.css']
})
export class AddRolesComponent implements OnInit {

  roles: Role[];
  userRole: userRole;
  id: string;

  constructor(private fb: FormBuilder, private router: Router, private actionService: ActionService) {  }

  addForm: FormGroup;

  ngOnInit() {
    let userId = localStorage.getItem("addUserRoles");
    this.id = userId;

    this.actionService.getRoles()
      .subscribe( data => {
        this.roles = data['role'];
      })

    this.addForm = this.fb.group({
      user_id: this.id,
      role_id: this.fb.array([])
    })
  }

  onChange(role_id: number, isChecked: boolean) {
    const idFormArray = <FormArray>this.addForm.controls.role_id;

    if (isChecked) {
      idFormArray.push(new FormControl(role_id));
    }
    else {
      let index = idFormArray.controls.findIndex(x => x.value == role_id)
      idFormArray.removeAt(index);
    }
  }

  onSubmit() {
    this.actionService.addRoles(this.addForm.value)
      .pipe(first())
      .subscribe( data => {
        this.router.navigate(['Admin/roles']);
      })
  }
}
