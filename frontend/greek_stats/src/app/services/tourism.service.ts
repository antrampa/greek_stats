import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TourismService {

  constructor(private http: HttpClient) { }

  getDatapaniCsv(id: number) : any {
    return this.http.get('assets/csv/' + id + '.csv', {responseType: 'text'});
  }

  getDataPerRegion(id: number) : any {
    return this.http.get('assets/csv/region_' + id + '.csv', {responseType: 'text'});
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
