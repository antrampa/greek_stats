import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


interface City {
  name: string;
  code: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'greek_stats';

  cities: City[] = [];
  selectedCity : City;

 
  constructor(private primengConfig: PrimeNGConfig){}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];
  }

}

