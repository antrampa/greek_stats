import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TourismService {

  constructor(private http: HttpClient) { }

  getDatapaniCsv() : any {
    return this.http.get('assets/csv/BoG_Non_residents_expenditure_per_journey_el_2023-03-31.csv', {responseType: 'text'});
    // this.http.get('assets/csv/BoG_Non_residents_expenditure_per_journey_el_2023-03-31.csv', {responseType: 'text'}).subscribe(
    //   data => {
    //     /* parse data */
    //     const csvData = this.parseCSVData(data);
    //     //console.log(csvData);
    //     return csvData;
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
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
