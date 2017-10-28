import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserdataService {
  username: String;
  result: any;

  constructor(private http: HttpClient) {
    this.username = null;
   }

  updateUser(username: String) {
    this.username = username;
  }

  getUsers() {
    return this.http.get<Data>("/api/users")
      .map(result => this.result = result);
  }

  getUser() {
    return this.username;
  }

}

export interface Data {
  data: Array<any>;
}