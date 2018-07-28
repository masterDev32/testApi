import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import { jsonpFactory } from '@angular/http/src/http_module';

@Injectable()
export class ApiBackEndService {
  constructor(private http: Http) {}

  getUser() {
    return this.http
      .get('http://localhost:3000/api/getUser/')
      .map((response: Response) => response.json());
  }
}
