import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parent } from '../../models/Parent';

@Injectable({
  providedIn: 'root',
})
export class ParentserviceService {
  private baseUrl = 'http://localhost:9090/parent'; // Replace with your actual backend URL

  constructor(private http: HttpClient) {}

  saveParent(parent: Parent): Observable<Parent> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Parent>(
      `${this.baseUrl}/saveParent`,
      JSON.stringify(parent),
      { headers }
    );
  }

  getParentid(phoneNumber: string): Observable<string> {
    const url = `${this.baseUrl}/parent_id/${phoneNumber}`;
    return this.http.get<string>(url);
  }
}
