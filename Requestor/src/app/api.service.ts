import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  reqs = [] as any;

  constructor(private http: HttpClient) { }

  public getRequests() {
    return this.http.get('./assets/requests.json');
  }
}
