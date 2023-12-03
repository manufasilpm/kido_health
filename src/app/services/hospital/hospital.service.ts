import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospital } from 'src/app/models/Hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  private baseUrl = 'http://localhost:9090/Hospital'; 

  constructor(private http: HttpClient) {}

  saveHospital(hospital: Hospital): Observable<Hospital> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    return this.http.post<Hospital>(
      `${this.baseUrl}/add`,
      JSON.stringify(hospital),{headers}
      
    );
  }

 
  getHospitalid(phoneNumber: string): Observable<string> {
    const url = `${this.baseUrl}/parent_id/${phoneNumber}`;
    return this.http.get<string>(url);
  }

  getAllHospitals(): Observable<Hospital[]> {
    const url = `${this.baseUrl}/all`;
    console.log(this.http.get<Hospital[]>(url));

    return this.http.get<Hospital[]>(url);
  }
}
