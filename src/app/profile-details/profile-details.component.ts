import { User } from "./../users";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "pr-profile-details",
  templateUrl: "./profile-details.component.html",
  styleUrls: ["./profile-details.component.css"]
})
export class ProfileDetailsComponent implements OnInit {
  duration: any;
  isUpdate: false;
  constructor() {}

  ngOnInit() {}
  // changeDuration(e) {
  //   this.duration.setValue(e.target.value);
  // }
}
