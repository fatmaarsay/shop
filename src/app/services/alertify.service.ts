import { Injectable } from '@angular/core';
declare let alertify: any; // alertify nesnesini declare edin

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message: string) {
    (window as any).alertify.success(message);
  }
}
