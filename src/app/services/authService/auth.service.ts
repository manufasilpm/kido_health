import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:9090/auth'; // Change this to your backend authentication endpoint
  private tokenKey = 'auth_token';
  private userIdKey = 'user_id';
  constructor(private http: HttpClient) { }

  login(user:User): Observable<User> {
    console.log("called");
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(JSON.stringify(user));
    

    return this.http.post<User>(`http://localhost:9090/auth/login`, JSON.stringify(user), { headers });

    
  }


  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  setUserId(userId: string): void {
    localStorage.setItem(this.userIdKey, userId);
  }

  getUserId(): string | null {
    return localStorage.getItem(this.userIdKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}


