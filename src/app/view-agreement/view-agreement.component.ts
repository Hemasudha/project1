import { ConfirmAgreementComponent } from "./../confirm-agreement/confirm-agreement.component";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "pr-view-agreement",
  templateUrl: "./view-agreement.component.html",
  styleUrls: ["./view-agreement.component.css"]
})
export class ViewAgreementComponent implements OnInit {
  name = "Hemasudha";
  showVar: boolean;

  constructor() {}

  ngOnInit() {}
  onClick() {
    this.showVar = !this.showVar;
  }
}
