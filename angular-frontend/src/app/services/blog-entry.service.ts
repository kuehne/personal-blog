import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogEntry } from '@app/model/blog-entry';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogEntryService {
  constructor(private http: HttpClient) {}

  public findAll(): Observable<BlogEntry[]> {
    return this.http.get<BlogEntry[]>(`${environment.apiUrl}/entries`);
  }

  public findById(id: string | number): Observable<BlogEntry> {
    return this.http.get<BlogEntry>(`${environment.apiUrl}/entries/${id}`);
  }

  public create(content: BlogEntry): Observable<BlogEntry> {
    return this.http.post<BlogEntry>(`${environment.apiUrl}/entries`, content);
  }

  public update(
    id: string | number,
    content: BlogEntry
  ): Observable<BlogEntry> {
    return this.http.put<BlogEntry>(
      `${environment.apiUrl}/entries/${id}`,
      content
    );
  }

  public delete(id: string | number): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.apiUrl}/entries/${id}`);
  }
}
