import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getAllData(): Observable<any> {
    return this.http.get('https://restcountries.eu/rest/v2/all');
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
}
