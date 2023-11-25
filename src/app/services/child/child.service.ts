import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Child } from 'src/app/models/Child';

@Injectable({
  providedIn: 'root',
})
export class ChildService {
  private apiUrlchild = 'http://localhost:9090/child';
  private apiUrlParent = 'http://localhost:9090/parent';

  constructor(private http: HttpClient) {}

  getChildrenByParentId(parentId: string): Observable<any[]> {
    const url = `${this.apiUrlParent}/${parentId}/children`;
    console.log(this.http.get<any[]>(url));

    return this.http.get<any[]>(url);
  }

  saveChild(parent_Id: number, parent: Child): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(parent);
    return this.http.post<Child>(
      `${this.apiUrlchild}/add?parentId=${parent_Id}`,
      JSON.stringify(parent),
      { headers }
    );
  }
}
