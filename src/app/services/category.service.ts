import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Category } from '../category/category';
import {tap,catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  path="http://localhost:3000/categories";

  getCategories(): Observable<Category[]> {
   return this.http.get<Category[]>(this.path).pipe(
    tap(data=>console.log(JSON.stringify(data))),
    catchError(this.handleError)
   )
    }
  handleError(error:HttpErrorResponse) {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
      errorMessage = 'İşlem BAŞARISIZ'+ error.error.message;
  }
  else {
    errorMessage = 'Sistemsel Hata';
  }
  return throwError(errorMessage) ;
  }

}
