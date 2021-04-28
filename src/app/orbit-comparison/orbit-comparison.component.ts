import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { COLORS } from '../data/colors';
import { Planet } from '../data/planet-interface';

@Component({
  selector: 'app-orbit-comparison',
  templateUrl: './orbit-comparison.component.html',
  styleUrls: ['./orbit-comparison.component.css']
})
export class OrbitComparisonComponent implements  OnChanges, AfterViewInit {

  @Input() planets: Planet[];
  @ViewChild('ppchart') customChart;
  public chartType:string='bubble';
  public options:any;
  public data:any;
  public labels:string[]=[];
  private datas:any[]=[];
  public customChartOptions: any;
    
  constructor() { }

  ngAfterViewInit(): void {
    this.formatChartData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.planets.currentValue){
      this.formatChartData();
      this.configureOptions();
      this.moveRealTime();
    }
  }

  private moveRealTime(){
    setInterval(()=>{
      if(this.datas){
        this.datas.forEach((dataset)=>{
            if(dataset.data[0].y==dataset.planetOrbitalPeriod){
                dataset.data[0].y=0;
            }else{
                dataset.data[0].y++;
            }
        });
        this.setData();
      }
    }, 50);
  }
  private formatChartData(){
    this.labels=this.planets?.map((planet)=>planet.name);
    this.datas = this.planets?.map(
        (planet, index)=>{
          return {
              label:planet.name,
              data:[{
                r:(planet.population=='unknown')?5:(+planet.population.length+5),
                x: index,
                y:0
              }],
              backgroundColor:COLORS[index],
              planetOrbitalPeriod:planet.orbital_period
          }
        });
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
            display: true,
            ticks:{
              callback:(value)=>{
                return this.planets?this.planets[value].name:'';
              },
              max: 9,
              min: 0,
              stepSize: 1,
              fontColor:"#ffffff"
            },
            
          },
        ],
        yAxes: [
          {
            display: true,
            ticks:{
              max: 1000,
              min: 0,
              stepSize: 100
            }
          }
        ],
      },
    };

  
    this.setData();
   

    this.customChartOptions={
      id:'orbits'
    }
   
  }

  private setData(){
    this.data = {
      datasets: this.datas
    };
  }
}
