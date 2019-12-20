import { User } from "./users";
import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  setDetails(): Observable<User[]> {
    console.log(User);
    return;
  }
  getDetails() {
    return this.setDetails();
  }
  constructor() {}
}
