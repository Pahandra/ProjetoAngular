import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { jsonData } from '../models/json.model';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) {}

  getDataJson(): Observable<any> {
    return this.httpClient
      .get<jsonData[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(catchError(this.handleError));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
