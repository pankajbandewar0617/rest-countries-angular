import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getAllData(): Observable<any> {
    return this.http
      .get('https://restcountries.eu/rest/v2/all')
      .pipe(catchError(this.handleError));
  }

  getDetail(countryname: string): Observable<any> {
    return this.http.get<[]>('https://restcountries.eu/rest/v2/all').pipe(
      map((country) => {
        let singleCountry = country.filter(
          (name: any) => name.alpha3Code === countryname
        );
        return singleCountry[0];
      })
    );
  }
  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Node.js server error');
  }
}
