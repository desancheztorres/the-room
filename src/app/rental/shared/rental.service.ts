import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Rental } from './rental.model';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private rentalUrl = '/api/v1/rentals/';

  constructor(
    private http: HttpClient
  ) { }

  getRentals(): Observable<any> {
    return this.http.get(this.rentalUrl);
  }

  getRentalByID( rentalId: string ): Observable<any> {
    return this.http.get(`${ this.rentalUrl }${ rentalId }`);
  }
}
