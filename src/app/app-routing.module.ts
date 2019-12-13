import { CourseModule } from "./course/course.module";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { RegistrationComponent } from "./registration/registration.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "RegistrationComponent",
    pathMatch: "full"
  },
  {
    path: "",
    component: RegistrationComponent
  },
  {
    path: "users",
    component: ProfileComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
