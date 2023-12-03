import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/models/Appointment';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private baseUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) {}

  getHospitalList(): Observable<any[]> {
    const url = `${this.baseUrl}/Hospital/all`;
    console.log('hey');
    console.log(this.http.get<any[]>(url));
    // Adjust the endpoint based on your API
    return this.http.get<any[]>(url);
  }

  getVaccinesList(): Observable<any[]> {
    const url = `${this.baseUrl}/vaccine/all`;

    console.log(this.http.get<any[]>(url));
    // Adjust the endpoint based on your API
    return this.http.get<any[]>(url);
  }

  saveAppointment(childId: number, appointment: Appointment): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(appointment);
    console.log(
      `${this.baseUrl}/api/appointments/addChildAppointment?childId=${childId}`
    );

    return this.http.post<Appointment>(
      `${this.baseUrl}/api/appointments/addChildAppointment?childId=${childId}`,
      JSON.stringify(appointment),
      { headers }
    );
  }

  getHospitalsByDay(day: string) {
    const url = `http://localhost:9090/api/vaccination/hospitals-by-day?dayOfWeek=${day}`;
    return this.http.get<any[]>(url);
  }

  private adminApiUrl = 'http://localhost:9090/admin/getAllAppointments';

  getAllAppointments(): Observable<any[]> {
    return this.http.get<any[]>(this.adminApiUrl);
  }
  private notificationApiUrl =
    'http://localhost:9090/api/appointments/sedNotification';
  sendReminder(childID: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const reminderData = { childID };
    return this.http.post(
      `${this.notificationApiUrl}?childId=${childID}`,
      JSON.stringify(reminderData),
      { headers }
    );
  }
}
