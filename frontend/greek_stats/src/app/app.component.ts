import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig,MenuItem } from 'primeng/api';


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

  menuItems: MenuItem[];

  cities: City[] = [];
  selectedCity : City;

 
  constructor(private primengConfig: PrimeNGConfig){}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.menuItems = [
      { label: 'Κατάλογος Dataset - Τουρισμός', icon: 'pi pi-home', routerLink: '/' },
      {
        label: 'Τουρισμός',
        icon: 'pi pi-shopping-cart',
        items: [
          { label: 'Δαπάνη', icon: 'pi pi-desktop', routerLink: '/charts/tourism' }
        ]
      },
      { label: 'About Us', icon: 'pi pi-info-circle', routerLink: '/about-us' }
    ];
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];
  }

}

