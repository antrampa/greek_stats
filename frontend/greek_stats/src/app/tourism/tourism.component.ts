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

    title : string = "";
    label : string = "";

    
    constructor(private route: ActivatedRoute,private tourismService: TourismService){}
    ngOnInit() {
      const id = +this.route.snapshot.paramMap.get('id');
      console.log("id", id);
      this.title = this.getTitle(id);
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
        this.cols.push({ field: header[i], header: header[i].replaceAll('_', ' ') });
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
      for(let i = 1; i < header.length; i++){
        this.chartDataLabel.push(header[i].replaceAll('_', ' '));
      }
      
      for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i].split(',');
        let k = 0;
        for (let j = 1; j < header.length; j++) {
          if(!isNaN(Number(currentLine[j]))) {
            totalPerCol[k] = Number((!isNaN(totalPerCol[k]) ? Number(totalPerCol[k]) : 0) + Number(currentLine[j]));
            //console.log("totalPerCol[" + k + "] ", Number(totalPerCol[k]), Number(currentLine[j]), Number((!isNaN(totalPerCol[k]) ? Number(totalPerCol[k]) : 0) + Number(currentLine[j])) );
          } else {
            totalPerCol[k] = !isNaN(totalPerCol[k]) ? Number(totalPerCol[k]) : 0 + 0;
          }
          k++;
        }
      }

      for (let j = 0; j < totalPerCol.length; j++) {
        this.chartData.push(totalPerCol[j]);
      }
    }

    private getTitle(id: number) : string {
      switch(id) {

        case 1:
          return "Δαπάνη ανά ταξίδι μη κατοίκων στην Ελλάδα κατά χώρα προέλευσης (Τριμηνιαία)";
        case 2:
          return "Δαπάνη ανά ταξίδι κατοίκων στο εξωτερικό κατά χώρα προορισμού (Ετήσια)";
        case 3:
          return "Δαπάνη ανά διανυκτέρευση μη κατοίκων στην Ελλάδα κατά χώρα προέλευσης (Ετήσια)";
        case 4:
          return "Δαπάνη ανά διανυκτέρευση κατοίκων στο εξωτερικό κατά χώρα προορισμού (Ετήσια)";  
        case 5:
            return "Μέση διάρκεια παραμονής ανά ταξίδι κατοίκων στο εξωτερικό κατά χώρα προορισμού (Ετήσια)";
        case 6:
          return "Μέση διάρκεια παραμονής ανά ταξίδι μη κατοίκων στην Ελλάδα κατά χώρα προέλευσης (Ετήσια)";  
        default:
          return "";
          break;
      }
      return "";
    }
}
