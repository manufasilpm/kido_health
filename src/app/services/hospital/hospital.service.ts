import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/models/Appointment';
import { Hospital } from 'src/app/models/Hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  private baseUrl = 'http://localhost:9090/Hospital'; 
  private baseUrlAppointment = 'http://localhost:9090/api/appointments'; 

  constructor(private http: HttpClient) {}

  saveHospital(hospital: Hospital): Observable<Hospital> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    return this.http.post<Hospital>(
      `${this.baseUrl}/add`,
      JSON.stringify(hospital),{headers}
      
    );
  }
  updateAppointment(id:string,status:string): Observable<String> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    return this.http.put<String>(
      `${this.baseUrlAppointment}/update/${id}/${status}`,
      "",{headers}
      
    );
  }

 
  getHospitalid(phoneNumber: string): Observable<string> {
    const url = `${this.baseUrl}/parent_id/${phoneNumber}`;
    return this.http.get<string>(url);
  }
  getChildBookingsByHospitalId(parentId: string): Observable<any[]> {
    const url = `${this.baseUrl}/allAppointment?hospitalId=${parentId}`;
    console.log(this.http.get<any[]>(url));
    return this.http.get<any[]>(url);
  }
  getAllHospitals(): Observable<Hospital[]> {
    const url = `${this.baseUrl}/all`;
    console.log(this.http.get<Hospital[]>(url));

    return this.http.get<Hospital[]>(url);
  }
}
