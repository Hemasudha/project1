import { AppRoutingModule } from "./../app-routing.module";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CommonModule } from "@angular/common";
import { RegistrationComponent } from "../registration/registration.component";
import { ProfileComponent } from "../profile/profile.component";
import { ProfileDetailsComponent } from "../profile-details/profile-details.component";
import { UsersService } from "../users.service";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    RegistrationComponent,
    ProfileComponent,
    ProfileDetailsComponent
  ],
  providers: [UsersService]
})
export class CourseModule {}
