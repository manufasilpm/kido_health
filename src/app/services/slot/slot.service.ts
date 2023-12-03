import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Slot } from 'src/app/models/Slot';

@Injectable({
  providedIn: 'root'
})
export class SlotService {

  private baseUrl = 'http://localhost:9090/api/vaccination'; 

  constructor(private http: HttpClient) {}

  updateSlot(slot:Slot): Observable<Slot> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    return this.http.put<Slot>(
      `${this.baseUrl}/update?hospitalId=${slot.hospitalId}&dayOfWeek=${slot.dayOfWeek}`,
      JSON.stringify(slot),{headers}
      
    );
  }

 
  getSlotid(phoneNumber: string): Observable<string> {
    const url = `${this.baseUrl}/parent_id/${phoneNumber}`;
    return this.http.get<string>(url);
  }

  getAllSlots(): Observable<Slot[]> {
    const url = `${this.baseUrl}/all`;
    console.log(this.http.get<Slot[]>(url));

    return this.http.get<Slot[]>(url);
  }
  getSlots(hospitalId:string | null): Observable<Slot[]> {
    const url = `${this.baseUrl}/slots-by-hospital?hospitalId=${hospitalId}`;
    console.log(this.http.get<Slot[]>(url));

    return this.http.get<Slot[]>(url);
  }
}
