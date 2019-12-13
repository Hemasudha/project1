import { ViewAgreementComponent } from "./../view-agreement/view-agreement.component";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "pr-confirm-agreement",
  templateUrl: "./confirm-agreement.component.html",
  styleUrls: ["./confirm-agreement.component.css"]
})
export class ConfirmAgreementComponent implements OnInit {
  @Input() agree: boolean;
  showMsg: boolean = false;

  constructor() {}

  ngOnInit() {}
  onAccept() {
    this.agree = !this.agree;

    this.showMsg = true;
  }
  onDecline() {
    this.agree = !this.agree;
  }
  onCancel() {
    this.showMsg = false;
    this.agree = false;
  }
  // if(showMsg) {
  //   this.agree = !this.agree;
  // }
}
