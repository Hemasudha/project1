import { TestBed } from "@angular/core/testing";
import { UsersService } from "./../users.service";
import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { User } from "../users";
import { formArrayNameProvider } from "@angular/forms/src/directives/reactive_directives/form_group_name";

@Component({
  selector: "pr-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  model: User = new User();
  @ViewChild("myForm") form: any;
  public details = User;
  submitted = false;
  public users: {};

  constructor(private usersService: UsersService) {}
  ngOnInit() {}

  onCancel() {
    this.form.reset();
    this.submitted = false;
  }
  onRegister(User) {
    console.log("Form Submitted!");
    this.form.reset();
    this.submitted = !this.submitted;
    this.users = User;
    console.log(this.users);
    this.usersService.setDetails(this.users);
  }
}
