import { Component, OnInit } from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { ActionService } from '../service/action.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private route: Router, private actionService: ActionService) {}

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get f() { return this.addForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.addForm.invalid) {
      return;
    }

    this.actionService.createUser(this.addForm.value)
      .subscribe( data => {
        this.route.navigate(['Admin']);
      },
        error => {
          alert(error)
        })
  }
}
