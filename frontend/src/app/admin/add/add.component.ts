import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActionService } from '../service/action.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private route: Router, private actionService: ActionService) {}

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    this.actionService.createUser(this.addForm.value)
      .subscribe( data => {
        this.route.navigate(['Admin']);
      })
  }
}
