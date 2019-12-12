import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  tasks = [] as any;
  users = [] as any;
  names = [] as any;
  info = [] as any;
  /*   httpOptions = {
      async: true,
      crossDomain: true,
      url: 'https://getnet-vrisk.veriscan.se/api/v1/risks',
      method: 'GET',
      headers: {
        Authorization: 'Basic c3ZjX3ZyaXNrOkVNMG8jVFJMV1IyQA==',
        rejectUnauthorized: 'false'
      }
  }; */

  constructor(public http: HttpClient) { }

  public getRisks() {
    return this.http.get('./assets/vrisk.json');
    /* .pipe(map(data => {
      this.risks = data
      this.risks = this.risks.filter((data) =>
        data.treat === false);
      return this.risks;
    })); */
  }
  public getUsers() {
    return this.http.get('./assets/users.json')
      .pipe(map(data => {
        return this.users = Object.values(data);
      }));
  }
  public getRisksInfo() {
    return this.http.get(`./assets/vrisk.json`)
      .pipe(map(data => {
        this.info = Object.values(data);
      }));
  }

  public getTasks() {
    return this.http.get(`./assets/tasks.json`)
      .pipe(map(data => {
        this.tasks = Object.values(data);
      }));
  }
}
