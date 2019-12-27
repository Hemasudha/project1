import { User } from "./../users";
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
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
  isUpdate: false;
  childForm: FormGroup;
  isSubmitted = false;
  isChecked: boolean;
  details: {};
  @Input() duration: any;
  @Input() cost: any;
  @Output() valueChange = new EventEmitter();
  public durations = ["1month", "2months", "3months"];

  public costs = ["free", "$10", "$25"];
  public sessions = ["Live", "Practice"];
  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.childForm = this.fb.group({
      duration: new FormControl("", Validators.required),
      cost: new FormControl("", Validators.required),

      session: new FormControl("", Validators.required)
    });
  }

  changeDuration(duration: any) {
    console.log(duration);
  }
  changeCost(cost: any) {
    console.log(cost);
  }
  valueChanged() {
    this.details = this.childForm.value;

    this.valueChange.emit(this.details);
    this.isSubmitted = true;
    console.log(this.details);
  }
  // getValue(){
  //   if(this.isChecked == true){
  //     return this.
  //   }
  // }
  // add() {
  //   this.isSubmitted = true;
  // }
}
