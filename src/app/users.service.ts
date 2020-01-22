import { User } from "./users";
import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { Http, Response } from "@angular/http";
//import { environment } from "src/environments/environment";
//const API_URL = environment.apiUrl;
@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: Http) {}
  public users: {};

  setDetails(users) {
    this.users = users;
    console.log(users);
    return;
  }
  getDetails() {
    return this.users;
  }
}
