import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Trip} from '../models/trip';

@Injectable()
export class TripDataService {
  constructor(private http: Http) { }

  private apiBasedUrl = 'http://localhost:3000/api/';
  private tripURL = `${this.apiBasedUrl}trips/`


  public addTrip(formData: Trip): Promise<Trip> {
    console.log('inside TripDataService#addTrip');
    return this.http
      .post(`${this.apiBasedUrl}trips`, formData)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError)
  }

  public getTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataService#getTrip')
    return this.http
      .get(this.tripURL + tripCode)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError) 

  }

  public getTrips(): Promise<Trip[]> {
    console.log('inside TripDataService#getTrips');
    return this.http
    .get(`${this.apiBasedUrl}trips`)
    .toPromise()
    .then(response => response.json() as Trip[])
    .catch(this.handleError);
  }

  public updateTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#updateTrip')
    return this.http
      .put(this.tripURL + formData.code, formData)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError) 

  }

  private handleError(error: any): Promise<any> {
    console.log('This is an error', error);
    return Promise.reject(error.message || error);
  }

}
