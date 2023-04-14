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

import { SidebarModule } from 'primeng/sidebar';
import { ChartTourismComponent } from './chart-tourism/chart-tourism.component';
import { TableTourismComponent } from './table-tourism/table-tourism.component';
import { TourismComponent } from './tourism/tourism.component';
// import { MainMenuComponent } from './main-menu/main-menu.component';
// import { SideBarComponent } from './side-bar/side-bar.component';
// import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartTourismComponent,
    TableTourismComponent,
    TourismComponent,
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
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
