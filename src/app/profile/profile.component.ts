import { ProfileDetailsComponent } from "./../profile-details/profile-details.component";
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
  sub = false;
  update: boolean;
  user: {};
  courseName: any;
  public courses = [
    { id: 1, name: "Ember" },
    { id: 2, name: "React" },
    { id: 3, name: "Vue" }
  ];
  constructor(public fb: FormBuilder, private usersService: UsersService) {}

  ngOnInit() {
    this.user = this.usersService.getDetails();
    // console.log(this.user);
    this.subForm = this.fb.group({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      courseName: new FormControl("", Validators.required)
    });
  }
  details;

  changeCourse(course) {
    console.log(course);
    this.submitted = true;
    this.sub = true;
  }
  count(details) {
    this.details = details;
    //alert(details);
  }
  onUpdate() {
    this.update = !this.update;
    this.submitted = true;
    // alert("updated successfully");
  }
}
