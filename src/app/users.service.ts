import { User } from "./users";
import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  // private User = new User();

  constructor() {}
  setDetails(): Observable<User[]> {
    // TODO: send the message _after_ fetching the heroes
    return of();
  }
  getDetails() {
    throw new Error("Method not implemented.");
  }
}
