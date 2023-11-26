import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaccine } from '../../models/Vaccine';

@Injectable({
  providedIn: 'root',
})
export class VaccineService {
  private baseUrl = 'http://localhost:9090/vaccine'; // Replace with your actual backend URL

  constructor(private http: HttpClient) {}

  requestVaccine(parent: Vaccine): Observable<Vaccine> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  

    return this.http.post<Vaccine>(
      `${this.baseUrl}/add`,
      JSON.stringify(parent),{headers}
      
    );
  }

 
  getParentid(phoneNumber: string): Observable<string> {
    const url = `${this.baseUrl}/parent_id/${phoneNumber}`;
    return this.http.get<string>(url);
  }
}
