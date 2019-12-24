import { User } from "./../users";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: "pr-profile-details",
  templateUrl: "./profile-details.component.html",
  styleUrls: ["./profile-details.component.css"]
})
export class ProfileDetailsComponent implements OnInit {
  duration: any;
  isUpdate: false;
  childForm: FormGroup;
  isSubmitted = false;

  @Output() valueChange = new EventEmitter();
  public durations = ["1month", "3months", "6months"];
  public costs = ["free", "$10", "$25"];
  cost: any;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.childForm = this.fb.group({
      durationD: new FormControl("", Validators.required),
      cost: new FormControl("", Validators.required)
    });
  }

  changeDuration(e) {
    console.log(this.duration.setValue(e.target.value));
  }
  changeCost(e) {
    this.cost.setValue(e.target.value);
  }
  valueChanged() {
    this.valueChange.emit({});
  }
  add() {
    this.isSubmitted = true;
  }
}
