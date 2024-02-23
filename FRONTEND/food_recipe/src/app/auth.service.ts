import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3001/api'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  register(userDetails: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, userDetails);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }
}
