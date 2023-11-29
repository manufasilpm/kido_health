import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospital } from 'src/app/models/Hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:9090/Hospital';

  saveHospital(hospital: Hospital): Observable<Hospital> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  console.log(JSON.stringify(hospital));
  

    return this.http.post<Hospital>(
      `${this.baseUrl}/add`,
      JSON.stringify(hospital),{headers}
      
    );
  }
}
