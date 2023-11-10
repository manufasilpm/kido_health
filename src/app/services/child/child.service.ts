import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
