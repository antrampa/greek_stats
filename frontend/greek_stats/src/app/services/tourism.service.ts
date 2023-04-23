import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TourismService {

  //private baseUrl = "http://127.0.0.1:5000";  // web api URL
  private baseUrl = "/api";  // web api URL

  constructor(private http: HttpClient) { }

  getDatapaniCsv(id: number) : any {
    return this.http.get('assets/csv/' + id + '.csv', {responseType: 'text'});
  }

  getDataPerRegion(id: number) : any {
    return this.http.get('assets/csv/region_' + id + '.csv', {responseType: 'text'});
  }

  getJsonData(id: number) : any {
    //return this.http.get<any>('/api/data?id=' + id + '')
    return this.http.get(this.baseUrl + '/data?id=' + id + '');
    // .map(res => <any> res.json())
    //     .catch(error => {
    //         console.log(error);
    //         return Observable.throw(error);
    //     });
  }

  getJsonSalaryPerCountry() : any {
    //return this.http.get<any>('/api/data?id=' + id + '')
    return this.http.get(this.baseUrl + '/salary');
    // .map(res => <any> res.json())
    //     .catch(error => {
    //         console.log(error);
    //         return Observable.throw(error);
    //     });
  }

  private parseCSVData(csvData: string) {
    const lines = csvData.split('\n');
    const result = [];
    const headers = lines[0].split(',');
    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentLine = lines[i].split(',');
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentLine[j];
      }
      result.push(obj);
    }
    return result;
  }
}
