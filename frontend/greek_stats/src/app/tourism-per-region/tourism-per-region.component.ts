import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourismService } from '../services/tourism.service';


@Component({
  selector: 'app-tourism-per-region',
  templateUrl: './tourism-per-region.component.html',
  styleUrls: ['./tourism-per-region.component.scss']
})
export class TourismPerRegionComponent implements OnInit {
  

  products: any[];
  rowData: any[];
  results: any[];
  cols: any[];
  regions: any[];
  selectedRegion: any;

  chartDataLabel: any[] = [];
  chartData: number[] = [];
  jsonData: any = {};
  jsonSalaryPerCountries: any = {};

  title : string = "";
  label : string = "";

  REGION_COLUMN_NUMBER: number = 2; 
  csvData: any;

  constructor(private route: ActivatedRoute,
              private tourismService: TourismService) {}

  ngOnInit() { 
    const id = +this.route.snapshot.paramMap.get('id');
      console.log("id", id);
      //this.title = this.getTitle(id);
      this.cols = [];
        this.tourismService.getDataPerRegion(id).subscribe(
          data => {
            /* parse data */
            // console.log(data);
            this.csvData = data;
            this.parseCSVData(data);
            //this.parseRegions(data);
            this.parseCSVDataForCharts(data);
          },
          error => {
            console.log(error);
          }
        );

        this.tourismService.getJsonData(11).subscribe(
          data => {
            /* parse data */
            console.log(data);
            this.jsonData = data;
            this.parseRegionsJson(data);
          },
          error => {
            console.log(error);
          }
        );
        
        this.tourismService.getJsonSalaryPerCountry().subscribe(
          data => {
            /* parse data */
            console.log("salary",data);
            this.jsonSalaryPerCountries = data;
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
      this.cols = [];
      const header = lines[0].split(',');
      
      for(let i = 0; i < header.length; i++){
        this.cols.push({ field: header[i], header: header[i].replaceAll('_', ' ') });
      }
      //console.log(this.cols);
      for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentLine = lines[i].split(',');
        if(this.selectedRegion != null && this.selectedRegion != undefined) {
          let regValue = currentLine[this.REGION_COLUMN_NUMBER];
          if(regValue  !==  this.selectedRegion){
            //console.log("continue", regValue ,this.selectedRegion);
            continue; //Filtering
          }
        }
        for (let j = 0; j < this.cols.length; j++) {
          obj[this.cols[j].field] = currentLine[j];
          //console.log(this.cols[j].field,currentLine[j]);
          this.rowData.push(obj);
        }
        this.results.push(obj);
      }
    }

    private parseRegions(csvData: string) {
      const lines = csvData.split('\n');
      this.regions = [];
      for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentLine = lines[i].split(',');
        //console.log("currentLine[2]", currentLine[2]);
        if(!this.regions.find(f => f == currentLine[this.REGION_COLUMN_NUMBER])){
          this.regions.push(currentLine[this.REGION_COLUMN_NUMBER]);
        }
          
      }
      //console.log("this.regions", this.regions);
    }

    private parseRegionsJson(jsonData: string) {
      const lines = jsonData;
      this.regions = [];
      for (var val of jsonData) {
        console.log("region ",val); // prints values: 10, 20, 30, 40
        let reg = val['Περιφέρεια'];
        if(!this.regions.find(f => f == reg)){
          this.regions.push(reg);
        }
      }
      
      //console.log("this.regions", this.regions);
    }

    onRegionSelect(event) {
      console.log('event :' + event);
      console.log(event.value);
      console.log("selectedRegion",this.selectedRegion);
      console.log("this.csvData",this.csvData);
      this.parseCSVData(this.csvData);
      this.parseCSVDataForCharts(this.csvData);
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
        if(this.selectedRegion != null && this.selectedRegion != undefined) {
          let regValue = currentLine[this.REGION_COLUMN_NUMBER];
          if(regValue  !==  this.selectedRegion){
            //console.log("continue", regValue ,this.selectedRegion);
            continue; //Filtering
          }
        }
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
}
