import { Component, Input, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { TourismService } from '../services/tourism.service';

@Component({
  selector: 'app-table-tourism',
  templateUrl: './table-tourism.component.html',
  styleUrls: ['./table-tourism.component.scss']
})
export class TableTourismComponent implements OnInit {
 
  @Input() rowData: any[];
  @Input() results: any[];
  @Input() cols: any[];

  selectedResult: any;
  

  constructor(private tourismService: TourismService){}

  ngOnInit() {
  }

  
}
