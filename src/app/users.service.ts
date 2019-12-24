import { User } from "./users";
import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  public users: {};

  setDetails(users) {
    this.users = users;
    console.log(users);
    return;
  }
  getDetails() {
    return this.users;
  }
  constructor() {}
}
