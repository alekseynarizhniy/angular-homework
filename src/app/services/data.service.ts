import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { URL } from '../constants/links';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getData(partUrl: string): Observable<any> {
    return this.http.get(URL + partUrl);
  }

  updateData(insideUrl: string, obj: any): Observable<any> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers: header,
    };

    return this.http.post(URL + insideUrl, obj, options);
  }
}
