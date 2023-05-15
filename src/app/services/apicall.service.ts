import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  URL = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  posts() {
    return this.http.get(this.URL);
  }
}
