import { AppRoutingModule } from "./../app-routing.module";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RegistrationComponent } from "../registration/registration.component";
import { ProfileComponent } from "../profile/profile.component";
import { ProfileDetailsComponent } from "../profile-details/profile-details.component";
import { UsersService } from "../users.service";
import { HttpModule } from "@angular/http";
import { DesignComponent } from "../design/design.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    RegistrationComponent,
    ProfileComponent,
    ProfileDetailsComponent,
    DesignComponent
  ],
  providers: [UsersService]
})
export class CourseModule {}
