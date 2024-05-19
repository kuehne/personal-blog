import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogEntry } from '../model/blog-entry';

@Injectable({
  providedIn: 'root',
})
export class BlogEntryService {
  private readonly API = 'http://localhost:8080/api/v1';
  constructor(private http: HttpClient) {}

  public findAll(): Observable<BlogEntry[]> {
    return this.http.get<BlogEntry[]>(`${this.API}/entries`);
  }

  public findById(id: string | number): Observable<BlogEntry> {
    return this.http.get<BlogEntry>(`${this.API}/entries/${id}`);
  }

  public create(content: BlogEntry): Observable<BlogEntry> {
    return this.http.post<BlogEntry>(`${this.API}/entries`, content);
  }

  public update(
    id: string | number,
    content: BlogEntry
  ): Observable<BlogEntry> {
    return this.http.put<BlogEntry>(`${this.API}/entries/${id}`, content);
  }

  public delete(id: string | number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API}/entries/${id}`);
  }
}
