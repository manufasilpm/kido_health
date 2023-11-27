import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  
  
  private baseUrl = 'http://localhost:9090'


  constructor(private http: HttpClient) { }

  getHospitalList():Observable<any[]>{
    const url = `${this.baseUrl}/Hospital/all`;
    console.log("hey");
    console.log(this.http.get<any[]>(url));
     // Adjust the endpoint based on your API
    return this.http.get<any[]>(url);

  }

  getVaccinesList():Observable<any[]>{
    const url = `${this.baseUrl}/vaccine/all`;

    console.log(this.http.get<any[]>(url));
     // Adjust the endpoint based on your API
    return this.http.get<any[]>(url);

  }

  saveAppointment(childId:number,appointment:Appointment):Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      console.log(appointment);
      console.log(`${this.baseUrl}/api/appointments/addChildAppointment?childId=${childId}`);
      
      return this.http.post<Appointment>(
        `${this.baseUrl}/api/appointments/addChildAppointment?childId=${childId}`,
        JSON.stringify(appointment),
        { headers }
      );
    }

    getHospitalsByDay(day: string) {
      const url = `http://localhost:9090/api/vaccination/hospitals-by-day?dayOfWeek=${day}`;
      console.log("hey");
      console.log(this.http.get<any[]>(url));
       
      return this.http.get<any[]>(url);
      
    }


  // saveChild(parent_Id: number, parent: Child): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   console.log(parent);
  //   return this.http.post<Child>(
  //     `${this.apiUrlchild}/add?parentId=${parent_Id}`,
  //     JSON.stringify(parent),
  //     { headers }
  //   );
  // }
}


 // Replace with your actual backend URL


