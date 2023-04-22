import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';  
import { MenubarModule } from 'primeng/menubar';

import { DropdownModule } from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';

import { SidebarModule } from 'primeng/sidebar';
import { ChartTourismComponent } from './chart-tourism/chart-tourism.component';
import { TableTourismComponent } from './table-tourism/table-tourism.component';
import { TourismComponent } from './tourism/tourism.component';
// import { MainMenuComponent } from './main-menu/main-menu.component';
// import { SideBarComponent } from './side-bar/side-bar.component';
// import { ChartComponent } from './chart/chart.component';

import { HttpClientModule } from '@angular/common/http';
import { MapTourismComponent } from './map-tourism/map-tourism.component';
import { PieChartComponent } from './chart-tourism/pie-chart/pie-chart.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TourismPerRegionComponent } from './tourism-per-region/tourism-per-region.component';
import { SalesPerCountryComponent } from './sales-per-country/sales-per-country.component';
import { HorizontalBarComponent } from './chart-tourism/horizontal-bar/horizontal-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartTourismComponent,
    TableTourismComponent,
    TourismComponent,
    MapTourismComponent,
    PieChartComponent,
    AboutUsComponent,
    HomeComponent,
    PageNotFoundComponent,
    TourismPerRegionComponent,
    SalesPerCountryComponent,
    HorizontalBarComponent,
    // MainMenuComponent,
    // SideBarComponent,
    // ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    ChartModule,
    MenubarModule,
    SidebarModule,
    TableModule,
    TabViewModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
