import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:9090/auth'; // Change this to your backend authentication endpoint

  constructor(private http: HttpClient) { }

  login(user:User): Observable<User> {
    console.log("called");
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(JSON.stringify(user));
    

    return this.http.post<User>(`http://localhost:9090/auth/login`, JSON.stringify(user), { headers });

    
  }
}


