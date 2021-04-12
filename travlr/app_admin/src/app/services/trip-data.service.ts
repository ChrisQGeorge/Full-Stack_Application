import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Trip} from '../models/trip';

@Injectable()
export class TripDataService {
  constructor(private http: Http) { }

  private apiBasedUrl = 'http://localhost:3000/api/';

  public getTrips(): Promise<Trip[]> {
    console.log('inside TripDataService#getTrips');
    return this.http
    .get(`${this.apiBasedUrl}trips`)
    .toPromise()
    .then(response => response.json() as Trip[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('This is an error', error);
    return Promise.reject(error.message || error);
  }

}
