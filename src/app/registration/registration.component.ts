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
  private Users = [];

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
    //this.Users.push(this.form.value);
    this.Users = User;
    console.log(User);
    console.log(this.Users);
    console.log(this.details);
  }
  setDetails(details) {
    this.usersService.setDetails().subscribe(details => (this.Users = details));
    console.log(details);
  }
}
