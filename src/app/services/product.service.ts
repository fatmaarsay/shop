import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from '../product/product';
import {tap,catchError} from 'rxjs/operators';
@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  path="http://localhost:3000/products";

  getProducts(categoryId:number): Observable<Product[]> {
    let newPath =this.path;
    if(categoryId){
      newPath += "?categoryId="+categoryId;
    }
   return this.http.get<Product[]>(newPath).pipe(
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
