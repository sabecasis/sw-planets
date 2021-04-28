import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { COLORS } from '../data/colors';
import { Planet } from '../data/planet-interface';

@Component({
  selector: 'app-population-chart',
  templateUrl: './population-chart.component.html',
  styleUrls: ['./population-chart.component.css']
})
export class PopulationChartComponent implements OnInit, OnChanges {

  @Input() planets: Planet[];
  @ViewChild('ppchart') customChart;
  public chartType:string='pie';
  public options:any;
  public data:any;
  public labels:string[]=[];
  private datas:number[]=[];
  public customChartOptions: any;
  
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.planets.currentValue){
     this.formatChartData();
      this.configureOptions();
    }
  }


  private formatChartData(){
    this.labels=this.planets?.map((planet)=>planet.name);
    this.datas = this.planets?.map((planet)=>(planet.population=='unknown')?0:+planet.population);
  }

  ngOnInit(): void {
   this.formatChartData();
  }

  configureOptions(){
    this.options = {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        labels: {
            fontColor: "#ffffff",
        },
        position:'bottom'
      },
      scales: {
        xAxes: [
          {
            display: false,
          },
        ],
        yAxes: [
          {
            display: false,
          },
        ],
      },
    };

  
    this.data = {
      labels: this.labels,
      datasets: [{
        data: this.datas,
        backgroundColor:COLORS,
      }],
    };

    this.customChartOptions={
      id:'population'
    }
   
  }
}
