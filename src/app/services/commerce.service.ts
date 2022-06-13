import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Commerce } from '../state/commerce/commerce.module';

let apiUrl = 'https://random-data-api.com/api/commerce/random_commerce';

@Injectable({
  providedIn: 'root'
})
export class CommerceService {

  constructor(private http: HttpClient) { }

  getCommerces(amount: number): Observable<Commerce[]> {
    if (amount && amount > 0) {
      apiUrl += `?size=${amount}`
    }
    return this.http.get<Commerce[]>(apiUrl);
  }
}
