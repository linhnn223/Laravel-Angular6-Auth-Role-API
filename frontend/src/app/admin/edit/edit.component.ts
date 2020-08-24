import { Component, OnInit } from "@angular/core";
import { ActionService } from '../service/action.service';
import { Router } from "@angular/router";
import { User } from '../_model/user.model';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  user: User[];
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: ActionService) {  }

  ngOnInit() {
    let userId = localStorage.getItem("editUserId");

    if (!userId) {
      alert('Invalid action.');
      this.router.navigate(['/list-user']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: userId,
      email: ['', Validators.required],
      name: ['', Validators.required],
    });

    this.userService.getUserById(+userId)
      .subscribe( data => {
        this.editForm.get('email').setValue(data['data'].email);
        this.editForm.get('name').setValue(data['data'].name);
      })

    this.userService.getUserById(+userId)
      .subscribe( data => {
        this.user = data['data'];
      })
  }

  onSubmit() {
    this.userService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['Admin'])
        },
        error => {
          alert(error)
        }
      )
  }
}
