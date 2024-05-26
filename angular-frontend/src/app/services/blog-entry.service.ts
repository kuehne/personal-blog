import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogEntry } from '@app/model/blog-entry';
import { environment } from '@env/environment';
import { Observable, catchError, of, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogEntryService {
  constructor(private http: HttpClient) {}

  public findAll(): Observable<BlogEntry[]> {
    return this.http
      .get<BlogEntry[]>(`${environment.apiUrl}/entries`)
      .pipe(retry(3), catchError(this.handleFindAllError));
  }

  private handleFindAllError(e: HttpErrorResponse): Observable<BlogEntry[]> {
    console.error('An error occured:', e);
    return of([]);
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
