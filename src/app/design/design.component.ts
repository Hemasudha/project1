import { UsersService } from "./../users.service";
import { Component, OnInit } from "@angular/core";
import { Observable, Subject, BehaviorSubject } from "rxjs";
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
  // subject;
  data: any;
  public bsubject = new BehaviorSubject<number>(1.23);
  public subject = new Subject();
  arr = [1, 2, 3];
  constructor(public fb: FormBuilder, private usersService: UsersService) {}

  ngOnInit() {
    //this.name = "Angular";
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
  onSub(event) {
    //let subject = new Subject<string>();
    this.data = event.target.value;
    this.subject.subscribe(data => {
      console.log(data);
    });
    this.subject.next(this.data);
    this.subject.next(this.arr);
  }

  onBsub(event) {
    this.data = event.target.value;

    this.bsubject.subscribe(data => {
      console.log("A:" + data);
    });
    this.bsubject.next(Math.round(this.data));
    this.bsubject.next(Math.random());

    console.log(this.bsubject.value);
  }
}
