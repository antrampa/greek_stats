import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TourismService {

  private baseUrl = "/api";  // web api URL

  constructor(private http: HttpClient) { }

  getDatapaniCsv(id: number) : any {
    return this.http.get('assets/csv/' + id + '.csv', {responseType: 'text'});
  }

  getDataPerRegion(id: number) : any {
    return this.http.get('assets/csv/region_' + id + '.csv', {responseType: 'text'});
  }

  getJsonData(id: number) : any {
    return this.http.get(this.baseUrl + '/data?id=' + id + '');
  }

  getJsonSalaryPerCountry() : any {
    return this.http.get(this.baseUrl + '/salary');
  }

}
