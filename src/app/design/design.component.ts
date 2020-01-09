import { UsersService } from "./../users.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from "@angular/forms";
@Component({
  selector: "pr-design",
  templateUrl: "./design.component.html",
  styleUrls: ["./design.component.css"]
})
export class DesignComponent implements OnInit {
  name: any;
  $name;
  data: any;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.name = "Angular";
  }

  onKey(event: any) {
    this.data = event.target.value;
    this.$name = new Observable(observer => {
      observer.next(this.data);
    });
    this.$name.subscribe(value => {
      console.log(value);
    });
  }
}
