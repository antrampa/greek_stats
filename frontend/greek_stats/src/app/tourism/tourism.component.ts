import { Component, OnInit } from '@angular/core';
import { TourismService } from '../services/tourism.service';

@Component({
  selector: 'app-tourism',
  templateUrl: './tourism.component.html',
  styleUrls: ['./tourism.component.scss']
})
export class TourismComponent implements OnInit {
  
    products: any[];
    rowData: any[];
    results: any[];
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
