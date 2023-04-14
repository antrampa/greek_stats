import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-table-tourism',
  templateUrl: './table-tourism.component.html',
  styleUrls: ['./table-tourism.component.scss']
})
export class TableTourismComponent implements OnInit {
  products: any[];

  ngOnInit() {
      
  }
}
