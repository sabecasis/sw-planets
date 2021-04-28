import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlanetTableComponent } from './planet-table/planet-table.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PlanetsViewComponent } from './planets-view/planets-view.component';
import {MatCardModule} from '@angular/material/card'
import { ChartModule } from 'angular2-chartjs';
import { ChartsComponent } from './charts/charts.component';
import { PopulationChartComponent } from './population-chart/population-chart.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetTableComponent,
    PlanetsViewComponent,
    ChartsComponent,
    PopulationChartComponent,
    PopulationChartComponent,
    FooterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    ChartModule,
    FlexLayoutModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
