import { UsersService } from "./../users.service";
import { RegistrationComponent } from "./../registration/registration.component";
import { Component, OnInit, Input } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from "@angular/forms";
import { User } from "../users";

@Component({
  selector: "pr-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  subForm: FormGroup;
  submitted = false;
  courseName: any;
  private details = this.usersService.setDetails();
  public courses = [
    { id: 1, name: "Ember" },
    { id: 2, name: "React" },
    { id: 3, name: "Vue" }
  ];
  constructor(public fb: FormBuilder, private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.setDetails();
    this.subForm = this.fb.group({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      courseName: new FormControl("", Validators.required)
    });
  }

  changeCourse(e) {
    console.log(e.value);
    this.courseName.setValue(e.target.value);
  }
  onUpdate() {
    alert("updated successfully");
  }
}
