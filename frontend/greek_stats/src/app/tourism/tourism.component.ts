import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

    chartDataLabel: any[] = [];//['Q1', 'Q2', 'Q3', 'Q4'];
    chartData: number[] = [];
  //   chartData: number[] =  [
  //     695.8,
  //     776.7,
  //     674,
  //     551.3,
  //     593.1,
  //     745,
  //     563.8,
  //     515.3,
  //     581.1,
  //     1218.2,
  //     523.9,
  //     685.9,
  //     846.3,
  //     670,
  //     580.9,
  //     515.1,
  //     225.9,
  //     900.8,
  //     669.2,
  //     565.1,
  //     1002.6,
  //     785.6,
  //     1123,
  //     0,
  //     577.8,
  //     1025.8,
  //     730.2
  // ];//[776.7, 325, 702, 620];
    
    constructor(private route: ActivatedRoute,private tourismService: TourismService){}
    ngOnInit() {
      const id = +this.route.snapshot.paramMap.get('id');
      console.log("id", id);
      this.cols = [];
        this.tourismService.getDatapaniCsv(id).subscribe(
          data => {
            /* parse data */
            // console.log(data);
            this.parseCSVData(data);
            this.parseCSVDataForCharts(data);
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
      //console.log(this.cols);
      for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentLine = lines[i].split(',');
        for (let j = 0; j < this.cols.length; j++) {
          obj[this.cols[j].field] = currentLine[j];
          //console.log(this.cols[j].field,currentLine[j]);
          this.rowData.push(obj);
        }
        this.results.push(obj);
      }
    }

    private parseCSVDataForCharts(csvData: string) {
      const lines = csvData.split('\n');
      const header = lines[0].split(',');
      let totalPerCol: number[] = [];
      for(let i = 2; i < header.length; i++){
        this.chartDataLabel.push(header[i].replace('_', ' '));
      }
      
      for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i].split(',');
        let k = 0;
        for (let j = 2; j < header.length; j++) {
          if(!isNaN(Number(currentLine[j]))) {
            totalPerCol[k] = !isNaN(totalPerCol[k]) ? Number(totalPerCol[k]) : 0 + Number(currentLine[j]);
            //console.log("currentLine[" + j + "] ",currentLine[j]  );
            //console.log("totalPerCol[" + k + "] ",totalPerCol[k]  );
            k++;
          } 
          else {
            totalPerCol[k] = !isNaN(totalPerCol[k]) ? Number(totalPerCol[k]) : 0 + 0;
          }
        }
      }

      for (let j = 0; j < totalPerCol.length; j++) {
        this.chartData.push(totalPerCol[j]);
      }
    }
}
