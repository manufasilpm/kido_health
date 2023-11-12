import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Child } from 'src/app/models/Child';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  private apiUrl = 'http://localhost:9090/child';

  constructor(private http: HttpClient) { }

  getChildrenByParentId(parentId: number): Observable<any[]> {
    const url = `${this.apiUrl}/all/${parentId}`;
    console.log(this.http.get<any[]>(url));
    
    return this.http.get<any[]>(url);
  }

  saveChild(parent: Child): Observable<Child> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Child>(
      `${this.apiUrl}/saveChild`,
      JSON.stringify(parent),
      { headers }
    );
  }
}
