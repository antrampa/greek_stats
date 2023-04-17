import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { TourismService } from '../services/tourism.service';

@Component({
  selector: 'app-table-tourism',
  templateUrl: './table-tourism.component.html',
  styleUrls: ['./table-tourism.component.scss']
})
export class TableTourismComponent implements OnInit {
  products: any[];
  rowData: any[];
  results: any[];
  selectedResult: any;
  cols: any[];

  constructor(private tourismService: TourismService){}

  ngOnInit() {
    this.cols = [];
      this.tourismService.getDatapaniCsv().subscribe(
        data => {
          /* parse data */
          console.log(data);
          this.parseCSVData(data);
          
        },
        error => {
          console.log(error);
        }
      );
     

      //.subscribe(
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
    this.results = [];
    this.rowData = [];
    const header = lines[0].split(',');
    
    for(let i = 0; i < header.length; i++){
      this.cols.push({ field: header[i], header: header[i].replace('_', ' ') });
    }
    console.log(this.cols);
    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const d = {};
      const currentLine = lines[i].split(',');
      for (let j = 0; j < this.cols.length; j++) {
        //obj[header[j]] = currentLine[j];
        //this.results.push(currentLine[j]);
        obj[this.cols[j].field] = currentLine[j];
        console.log(this.cols[j].field,currentLine[j]);
        //this.rowData.push[this.cols[j].field] = currentLine[j];
        this.rowData.push(obj);
      }
      // result.push(obj);
      this.results.push(obj);
      //this.rowData.push(obj);
    }
    // return result;
    console.log("Raw data", this.rowData);
  }
  
}
