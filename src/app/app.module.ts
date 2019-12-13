import { ViewAgreementComponent } from "./view-agreement/view-agreement.component";
import { AgreementModule } from "./agreement/agreement.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ConfirmAgreementComponent } from "./confirm-agreement/confirm-agreement.component";
import { ProfileDetailsComponent } from "./profile-details/profile-details.component";
import { CourseModule } from "./course/course.module";
import { RouterModule, Routes } from "@angular/router";
import { from } from "rxjs";
import { AppRoutingModule } from ".//app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ViewAgreementComponent,
    ConfirmAgreementComponent
  ],
  imports: [
    BrowserModule,
    AgreementModule,
    FormsModule,
    ReactiveFormsModule,
    CourseModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
