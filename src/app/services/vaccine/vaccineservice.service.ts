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

 
  getAllVaccines(): Observable<Vaccine[]> {
    const url = `${this.baseUrl}/all`;
    console.log(this.http.get<Vaccine[]>(url));

    return this.http.get<Vaccine[]>(url);
  }
  getVaccinesByAge(age:string | null): Observable<Vaccine[]> {
    const url = `${this.baseUrl}/vaccineByAge/${age}`;
    console.log(this.http.get<Vaccine[]>(url));
    return this.http.get<Vaccine[]>(url);
  }

  updateVaccineStatus(vaccine: Vaccine): Observable<Vaccine> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  

    return this.http.put<Vaccine>(
      `${this.baseUrl}/update/${vaccine.vaccineId}`,
      JSON.stringify(vaccine),{headers}
      
    );
  }
  deleteVaccine(id: number | undefined): Observable<Vaccine> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete<Vaccine>(url);
  }
}
