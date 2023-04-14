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
      { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
      {
        label: 'Products',
        icon: 'pi pi-shopping-cart',
        items: [
          { label: 'Laptops', icon: 'pi pi-desktop', routerLink: '/products/laptops' },
          { label: 'Smartphones', icon: 'pi pi-mobile', routerLink: '/products/smartphones' }
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

